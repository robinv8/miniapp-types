import Service from "../service";
import { Attribute } from "../types";

const service = new Service({
  platform: 'jd',
  waitUntil: 'networkidle0',
  evaluate: async (page, opts) => {
    return await page.evaluate(({ tableIndex = 0, fields }) => {
      function handleType(str, char, name) {
        if (name.indexOf('bind') > -1 && !str) {
          return 'eventHandle'
        }
        if (str.indexOf(char) === -1) {
          return str;
        }
        return str.split(char).map((item) => item.trim());
      }
      const attributes: Attribute[] = [];

      const tablesEl = document.querySelectorAll('table')[tableIndex];

      tablesEl?.querySelectorAll('tbody tr')?.forEach((el: Element) => {
        const len = el.children.length;
        const options: string[] = [];

        if (len === 0) {
          return
        }
        const innerText = (el.children[0] as HTMLElement).innerText;
        document.querySelectorAll('table').forEach((table) => {
          const text =
            table.previousElementSibling?.querySelector('strong')?.innerText;
          if (
            text === `${innerText} 有效值：` ||
            text === `${innerText} 的合法值`
          ) {
            table.querySelectorAll('tbody tr').forEach((el) => {
              const innerText = (el.children[0] as HTMLElement).innerText;
              options.push(innerText);
            });
          }
        });
        const name = (<HTMLElement>el.children[fields.name])?.innerText;
        const type = handleType((<HTMLElement>el.children[fields.type])?.innerText, '/', name);
        const defaultValue = (<HTMLElement>el.children[fields.defaultValue])?.innerText;
        const description = (<HTMLElement>el.children[fields.description])?.innerText;
        const required = (<HTMLElement>el.children[fields.required])?.innerText;

        attributes.push({
          name,
          type,
          ...(options.length > 0 ? { options } : {}),
          ...(defaultValue
            ? { defaultValue: defaultValue.replace(/\"/g, '') }
            : {}),
          ...(description ? { description } : {}),
          ...(required !== undefined && required !== null
            ? { required: required === '是' }
            : {}),
        });
      });

      return attributes;
    }, opts);
  },
});

service.exec();
