const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const humps = require('humps');
const componentList = require('./componentList.json');

const fn = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    devtools: true,
  });
  const page = await browser.newPage();

  let index = 0;
  const getComponentProps = async ({ page, url, name }) => {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    const data = await page.evaluate((name) => {
      const attributes = [];
      const h2El = document.querySelectorAll('h2');

      if (h2El.length > 0) {
        h2El.forEach((el) => {
          if (el.id === name) {
            const tableEl = el.nextElementSibling.nextElementSibling;
            tableEl?.querySelectorAll('tbody tr')?.forEach((el) => {
              const len = el.children.length;
              if (len > 0) {
                attributes.push({
                  name: el.children[0]?.innerText,
                  type: el.children[1]?.innerText,
                  ...(len > 3
                    ? {
                        defaultValue: el.children[2]?.innerText,
                        description: el.children[3]?.innerText,
                      }
                    : {
                        description: el.children[2]?.innerText,
                      }),
                });
              }
            });
          }
        });
      } else {
        const tablesEl = document.querySelectorAll('table');
        tablesEl[0]?.querySelectorAll('tbody tr')?.forEach((el) => {
          const len = el.children.length;
          const options = [];

          if (len > 0) {
            tablesEl.forEach((table) => {
              const text =
                table.previousElementSibling?.querySelector('strong')?.innerText;
              if (text === `${el.children[0]?.innerText} 有效值：`) {
                table.querySelectorAll('tbody tr').forEach((el) => {
                  options.push(el.children[0].innerText);
                });
              }
            });
            attributes.push({
              name: el.children[0]?.innerText,
              type: el.children[1]?.innerText,
              options,
              ...(len > 3
                ? {
                    defaultValue: el.children[2]?.innerText,
                    description: el.children[3]?.innerText,
                  }
                : {
                    description: el.children[2]?.innerText,
                  }),
            });
          }
        });
      }

      return attributes;
    }, name);
    let tsCode =
      'interface ' + humps.pascalize(componentList[index].name) + 'Props {\n';
    data.forEach((prop) => {
      tsCode += `
      /**
       * @description ${prop.description}${
        prop.defaultValue ? `\n* @default ${prop.defaultValue}` : ''
      }
       * @type ${humps.camelize(prop.type)}
       */
      ${humps.camelize(prop.name)}: ${
        prop.options?.length > 0
          ? prop.options.map((item) => `'${item}'`).join(' | ')
          : humps.camelize(prop.type)
      };
      `;
    });
    tsCode += '}';
    if (!fs.existsSync('dist/qq')) {
      fs.mkdirSync(path.join(process.cwd(), 'dist/qq'), { recursive: true });
    }

    fs.writeFileSync(
      path.join(
        process.cwd(),
        `dist/qq/${humps.camelize(componentList[index].name)}.d.ts`,
      ),
      tsCode,
    );
    index++;
    const { url: nextUrl = '', name: nextName = '' } =
      componentList[index] || {};
    if (nextUrl) {
      getComponentProps({
        url: nextUrl,
        name: nextName,
        page,
      });
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
