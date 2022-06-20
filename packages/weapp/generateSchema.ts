import Service from "../service";
import { Attribute } from "../types";

const service = new Service({
  platform: 'weapp',
  waitUntil: 'domcontentloaded',
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
    }, opts);
  },
});

service.exec();
