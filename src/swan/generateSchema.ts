import Service from "../service";
import { Attribute } from "../types";
const typeAlias = require('../typeAlias.json')

const service = new Service({
  platform: 'swan',
  waitUntil: 'networkidle2',
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
        if (!str) {
          return ''
        }
        let result = str;
        result = result.replace(/\n?默认值： .*\n?/g, '');
        result = result.replace(/\n?版本要求： .*\n?/g, '');
        return result;
      }
      const attributes: Attribute[] = [];

      const tablesEl = document.querySelectorAll('table')[tableIndex];
      tablesEl?.querySelectorAll('tbody tr')?.forEach((el) => {
        const len = el.children.length;
        const options: string[] = [];

        if (len > 0) {
          const innerText = (<HTMLElement>el.children[0])?.innerText;
          const optEl = document.getElementById(`${innerText} 有效值`);

          const name = (<HTMLElement>el.children[fields.name])?.innerText;

          if (optEl) {
            optEl.nextElementSibling?.querySelectorAll('tbody tr')
              .forEach((el) => {
                const index = name === 'image' && innerText === 'mode' ? 1 : 0;
                const text = (<HTMLElement>el.children[index])?.innerText;
                options.push(text);
              });
          }
          const type = handleType((<HTMLElement>el.children[fields.type])?.innerText, '/');
          const defaultValue = (<HTMLElement>el.children[fields.defaultValue])?.innerText;
          const description = (<HTMLElement>el.children[fields.description])?.innerText;
          const required = (<HTMLElement>el.children[fields.required])?.innerText;
          const filteredDescription = handleDescription(description);

          const obj: Attribute = {
            name,
            type,
            ...(options.length > 0 ? { options } : {}),
            ...(defaultValue ? { defaultValue } : {}),
            ...(filteredDescription ? { description: filteredDescription } : {}),
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
        }
      });

      return attributes;
    }, { ...opts, typeAlias });
  },
});

service.exec();
