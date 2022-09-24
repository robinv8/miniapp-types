import Service from "../service";
import { Attribute } from "../types";
const typeAlias = require('../typeAlias.json')

const service = new Service({
  platform: 'alipay',
  waitUntil: 'load',
  waitTime: 3000,
  evaluate: async (page, opts) => {
    return await page.evaluate(({ tableIndex = 0, fields, typeAlias }) => {
      function handleType(str, char) {
        if(str.toLowerCase() === 'eventhandler') {
          return 'eventHandle'
        }
        if (str.indexOf(char) === -1) {
          return str;
        }
        return str.split(char).map((item) => typeAlias[item.trim()] || item.trim());
      }
      const attributes: Attribute[] = [];

      const tablesEl = document.querySelectorAll('table')[tableIndex];
      tablesEl?.querySelectorAll('tbody tr')?.forEach((el, index) => {
        if (index === 0) {
          return;
        }
        const len = el.children.length;
        const options: string[] = [];

        if (len == 0) {
          return

        }
        const text = (<HTMLElement>el.children[0])?.innerText

        const optEl = document.querySelector(
          `.lake-engine-view>a[name='${text}-有效值']`,
        );
        if (optEl instanceof HTMLElement) {
          optEl?.nextElementSibling?.nextElementSibling?.querySelectorAll('tbody tr')
            .forEach((el, index) => {
              if (index === 0) {
                return;
              }
              const text = (el.children[0] as HTMLElement)?.innerText

              options.push(text);
            });
        }

        const name = (<HTMLElement>el.children[fields.name])?.innerText
        const type = handleType((<HTMLElement>el.children[fields.type])?.innerText, '/')
        const description = (<HTMLElement>el.children[fields.description])?.innerText;

        const defaultValue =
          (<HTMLElement>el.children[fields.defaultValue])?.innerText ||
          description.match(/默认值： (\w+)/)?.[1];
        const required = (<HTMLElement>el.children[fields.required])?.innerText;

        attributes.push({
          name,
          type,
          ...(options.length > 0 ? { options } : {}),
          ...(defaultValue ? { defaultValue } : {}),
          ...(description ? { description } : {}),
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
