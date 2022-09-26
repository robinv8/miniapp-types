import Service from "../service";
import { Attribute } from "../types";
const typeAlias = require('../typeAlias.json')

const service = new Service({
  platform: 'weapp',
  waitUntil: 'domcontentloaded',
  evaluate: async (page, opts) => {
    return await page.evaluate(({ tableIndex = 0, fields, typeAlias }) => {
      function handleType(str, char) {
        if (str.toLowerCase() === 'eventhandler') {
          return 'eventHandle'
        }
        if (str.indexOf(char) === -1) {
          return str;
        }
        return str.split(char).map((item) => typeAlias[item.trim()] || item.trim());
      }

      function handleDescription(str) {
        let result = str;
        result = result.replace(/\n?默认值： .*\n?/g, '');
        result = result.replace(/\n?版本要求： .*\n?/g, '');
        return result;
      }
      const attributes: Attribute[] = [];

      const tablesEl = document.querySelectorAll('table')[tableIndex];
      const children = tablesEl?.querySelector('tbody')?.children
      if (!children) {
        return attributes;
      }
      Array.from(children)?.forEach((el) => {
        if (!(el instanceof HTMLElement)) {
          return
        }
        if (el?.className.indexOf('children-table') > -1) {
          return;
        }
        const options: string[] = [];

        const nextTrEl = el.nextElementSibling;
        if (nextTrEl && nextTrEl?.className.indexOf('children-table') > -1) {
          nextTrEl?.querySelector('tbody')
            ?.querySelectorAll('tr')
            .forEach((el) => {
              const innerText = (<HTMLElement>el.children[0])?.innerText
              options.push(innerText);
            });
        }

        const hasChild = tablesEl.querySelector('.children-table');
        const index = hasChild ? 1 : 0;
        const name = (<HTMLElement>el.children[fields.name + index])?.innerText;
        const type = handleType((<HTMLElement>el.children[fields.type + index])?.innerText, '/');
        const defaultValue =
          (<HTMLElement>el.children[fields.defaultValue + index])?.innerText;
        const description =
          (<HTMLElement>el.children[fields.description + index])?.innerText;
        const required =
          (<HTMLElement>el.children[fields.required + index])?.innerText;
        const filteredDescription = handleDescription(description);

        attributes.push({
          name,
          type,
          ...(options.length > 0 ? { options } : {}),
          ...(defaultValue ? { defaultValue } : {}),
          ...(filteredDescription ? { description: filteredDescription } : {}),
          ...(required !== undefined && required !== null
            ? { required: required === '是' }
            : {}),
        });
      });

      return attributes;
    }, { ...opts, typeAlias });
  },
});

service.exec();
