const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const componentList = require('./componentList.json');
const humps = require('humps');

const fn = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  let index = 0;
  const getComponentProps = async ({ page, url, name }) => {
    await page.goto(url, { waitUntil: 'networkidle0' });

    const data = await page.evaluate(({ name, tableIndex = 0, fields }) => {
      function handleType(str, char) {
        if (str.indexOf(char) === -1) {
          return str;
        }
        return str.split(char).map((item) => item.trim());
      }
      const attributes = [];

      const tablesEl = document.querySelectorAll('table')[tableIndex];
      tablesEl?.querySelectorAll('tbody tr')?.forEach((el, index) => {
        if (index === 0) {
          return;
        }
        const len = el.children.length;
        const options = [];

        if (len > 0) {
          const optEl = document.querySelector(
            `.lake-engine-view>a[name='${el.children[0]?.innerText}-有效值']`,
          );
          if (optEl) {
            optEl.nextElementSibling.nextElementSibling
              .querySelectorAll('tbody tr')
              .forEach((el, index) => {
                if (index === 0) {
                  return;
                }
                options.push(el.children[0].innerText);
              });
          }
          const description = el.children[fields.description]?.innerText;

          const defaultValue =
            el.children[fields.defaultValue]?.innerText ||
            description.match(/默认值： (\w+)/)?.[1];
          const required = el.children[fields.required]?.innerText;

          attributes.push({
            name: el.children[fields.name]?.innerText,
            type: handleType(el.children[fields.type]?.innerText, '/'),
            ...(options.length > 0 ? { options } : {}),
            ...(defaultValue ? { defaultValue } : {}),
            ...(description ? { description } : {}),
            ...(required !== undefined && required !== null
              ? { required: required === '是' }
              : {}),
          });
        }
      });

      return attributes;
    }, componentList[index]);
    if (data.length > 0) {
      const folder = path.join(__dirname, 'jsonScheam');
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
      }
      const properties = {};
      data.forEach((item) => {
        properties[item.name] = {
          type: humps.camelize(item.type),
          description: item.description,
        };
      });
      const result = {
        title: name,
        type: 'object',
        properties,
      };
      fs.writeFileSync(
        path.join(folder, `${name}.json`),
        JSON.stringify(result, null, 2),
      );
    }
    index++;
    const { url: nextUrl = '', name: nextName = '' } =
      componentList[index] || {};
    if (nextUrl) {
      getComponentProps({
        url: nextUrl,
        name: nextName,
        page,
      });
    } else {
      await browser.close();
    }
  };
  const { url = '', name } = componentList[index] || {};

  getComponentProps({
    url,
    name,
    page,
  });
};

fn();
