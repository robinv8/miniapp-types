import Service from '../service';
import { Attribute } from '../types';
const typeAlias = require('../typeAlias.json');

const service = new Service({
  platform: 'tt',
  waitUntil: 'networkidle0',
  evaluate: async (page, opts) => {
    return await page.evaluate(
      ({ tableIndex = 0, fields, typeAlias }) => {
        function handleType(str, char) {
          if (str.toLowerCase() === 'eventhandler') {
            return 'eventHandle';
          }
          if (str.indexOf(char) === -1) {
            return str;
          }
          return str
            .split(char)
            .map((item) => typeAlias[item.trim()] || item.trim());
        }

        function handleDescription(str) {
          if (!str) {
            return '';
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

          if (len === 0) {
            return;
          }
          const options: string[] = [];

          const innerText = (<HTMLElement>el.children[0])?.innerText;
          document.querySelectorAll('table').forEach((table) => {
            const text = table.previousElementSibling?.innerHTML;
            if (text === `${innerText} 的合法值`) {
              table.querySelectorAll('tbody tr').forEach((el) => {
                const innerText = (<HTMLElement>el.children[0])?.innerText;
                if (!innerText.match(/[\u4e00-\u9fa5]/)) {
                  options.push(innerText);
                }
              });
            }
          });
          const name = (<HTMLElement>el.children[fields.name])?.innerText;

          if (name.match(/[\u4e00-\u9fa5]/)) {
            return;
          }
          const type = handleType(
            (<HTMLElement>el.children[fields.type])?.innerText,
            '/',
          );
          const defaultValue = (<HTMLElement>el.children[fields.defaultValue])
            ?.innerText;
          const description = (<HTMLElement>el.children[fields.description])
            ?.innerText;
          const required = (<HTMLElement>el.children[fields.required])
            ?.innerText;
          const filteredDescription = handleDescription(description);
          const obj: Attribute = {
            name,
            type,
            ...(options.length > 0 ? { options } : {}),
            ...(defaultValue && defaultValue !== '\n' && defaultValue !== '无'
              ? { defaultValue }
              : {}),
            ...(filteredDescription
              ? { description: filteredDescription }
              : {}),
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
      },
      { ...opts, typeAlias },
    );
  },
});

service.exec();
