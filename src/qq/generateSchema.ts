import Service from "../service";
import { Attribute } from "../types";

const typeAlias = require('../typeAlias.json')

const service = new Service({
  platform: 'qq',
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
      const attributes: Attribute[] = [];

      const tablesEl = document.querySelectorAll('table')[tableIndex];
      tablesEl?.querySelectorAll('tbody tr')?.forEach((el) => {
        const len = el.children.length;

        if (len === 0) {
          return
        }
        const options: string[] = [];

        const innerText = (<HTMLElement>el.children[0])?.innerText;
        document.querySelectorAll('table').forEach((table) => {
          const text =
            table.previousElementSibling?.querySelector('strong')?.innerText;
          if (text === `${innerText} 有效值：`) {
            table.querySelectorAll('tbody tr').forEach((el) => {
              const innerText = (<HTMLElement>el.children[0])?.innerText;

              options.push(innerText);
            });
          }
        });
        const name = (<HTMLElement>el.children[fields.name])?.innerText;
        const type = handleType((<HTMLElement>el.children[fields.type])?.innerText, '/');
        const defaultValue = (<HTMLElement>el.children[fields.defaultValue])?.innerText;
        const description = (<HTMLElement>el.children[fields.description])?.innerText;
        const required = (<HTMLElement>el.children[fields.required])?.innerText;

        const obj: Attribute = {
          name,
          type,
          ...(options.length > 0 ? { options } : {}),
          ...(defaultValue ? { defaultValue } : {}),
          ...(description ? { description } : {}),
          ...(required !== undefined && required !== null
            ? { required: required === '是' }
            : {}),
        }

        if ((type === 'number' || type === 'Number') && defaultValue) {
          obj.defaultValue = Number(defaultValue || 0);
        }
        if ((type === 'boolean' || type === 'Boolean') && defaultValue) {
          obj.defaultValue = defaultValue === 'true';
        }

        attributes.push(obj);
      });

      return attributes;
    }, { ...opts, typeAlias });
  },
});

service.exec();
