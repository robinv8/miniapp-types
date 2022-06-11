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
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const data = await page.evaluate(({ name, tableIndex = 0, fields }) => {
      function handleType(str, char) {
        if (str.indexOf(char) === -1) {
          return str;
        }
        return str.split(char).map((item) => item.trim());
      }
      const attributes = [];

      const tablesEl = document.querySelectorAll('table')[tableIndex];
      Array.from(tablesEl?.querySelector('tbody').children)?.forEach((el) => {
        const len = el.children.length;
        const options = [];

        if (el?.className.indexOf('children-table') === -1 && len > 0) {
          const nextTrEl = el.nextElementSibling;
          if (nextTrEl?.className.indexOf('children-table') > -1) {
            nextTrEl
              .querySelector('tbody')
              .querySelectorAll('tr')
              .forEach((el) => {
                options.push(el.children[0].innerText);
              });
          }

          const hasChild = tablesEl.querySelector('.children-table');
          const defaultValue =
            el.children[fields.defaultValue + (hasChild ? 1 : 0)]?.innerText;
          const description =
            el.children[fields.description + (hasChild ? 1 : 0)]?.innerText;
          const required =
            el.children[fields.required + (hasChild ? 1 : 0)]?.innerText;

          attributes.push({
            name: el.children[fields.name + (hasChild ? 1 : 0)]?.innerText,
            type: handleType(
              el.children[fields.type + (hasChild ? 1 : 0)]?.innerText,
              '/',
            ),
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
      const folder = path.join(__dirname, 'jsonSchema');
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
      }
      const properties = {};
      data.forEach((item) => {
        properties[item.name] = {
          type:
            typeof item.type === 'string'
              ? humps.camelize(item.type)
              : item.type,
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
