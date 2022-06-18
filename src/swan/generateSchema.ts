import Service from "../service";
import { Attribute } from "../types";

const service = new Service({
  platform: 'swan',
  waitUntil: 'networkidle2',
  evaluate: async (page, opts) => {
    return await page.evaluate(({ tableIndex = 0, fields }) => {
      function handleType(str, char) {
        if (str.indexOf(char) === -1) {
          return str;
        }
        return str.split(char).map((item) => item.trim());
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
        }
      });

      return attributes;
    }, opts);
  },
});

service.exec();
