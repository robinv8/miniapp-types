const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const componentList = require('./componentList.json');

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
      tablesEl?.querySelectorAll('tbody tr')?.forEach((el) => {
        const len = el.children.length;
        const options = [];

        if (len > 0) {
          document.querySelectorAll('table').forEach((table) => {
            const text =
              table.previousElementSibling?.querySelector('strong')?.innerText;
            if (
              text === `${el.children[0]?.innerText} 有效值：` ||
              text === `${el.children[0]?.innerText} 的合法值`
            ) {
              table.querySelectorAll('tbody tr').forEach((el) => {
                options.push(el.children[0].innerText);
              });
            }
          });
          const defaultValue = el.children[fields.defaultValue]?.innerText;
          const description = el.children[fields.description]?.innerText;
          const required = el.children[fields.required]?.innerText;

          attributes.push({
            name: el.children[fields.name]?.innerText,
            type: handleType(el.children[fields.type]?.innerText, '/'),
            ...(options.length > 0 ? { options } : {}),
            ...(defaultValue
              ? { defaultValue: defaultValue.replace(/\"/g, '') }
              : {}),
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
      fs.writeFileSync(
        path.join(folder, `${name}.json`),
        JSON.stringify(data, null, 2),
      );
    }

    // let tsCode =
    //   'interface ' + humps.pascalize(componentList[index].name) + 'Props {\n';
    // data.forEach((prop) => {
    //   tsCode += `
    //   /**
    //    * @description ${prop.description}${
    //     prop.defaultValue ? `\n* @default ${prop.defaultValue}` : ''
    //   }
    //    * @type ${humps.camelize(prop.type)}
    //    */
    //   ${humps.camelize(prop.name)}: ${
    //     prop.options?.length > 0
    //       ? prop.options.map((item) => `'${item}'`).join(' | ')
    //       : humps.camelize(prop.type)
    //   };
    //   `;
    // });
    // tsCode += '}';
    // if (!fs.existsSync('dist/qq')) {
    //   fs.mkdirSync(path.join(process.cwd(), 'dist/qq'), { recursive: true });
    // }

    // fs.writeFileSync(
    //   path.join(
    //     process.cwd(),
    //     `dist/qq/${humps.camelize(componentList[index].name)}.d.ts`,
    //   ),
    //   tsCode,
    // );
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
