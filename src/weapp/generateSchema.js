const Service = require('../service');

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
      const attributes = [];

      const tablesEl = document.querySelectorAll('table')[tableIndex];
      Array.from(tablesEl?.querySelector('tbody').children)?.forEach((el) => {
        if (el?.className.indexOf('children-table') > -1) {
          return;
        }
        const options = [];

        const nextTrEl = el.nextElementSibling;
        if (nextTrEl?.className.indexOf('children-table') > -1) {
          nextTrEl
            .querySelector('tbody')
            .querySelectorAll('tr')
            .forEach((el) => {
              options.push(el.children[0].innerText);
            });
        }

        const hasChild = tablesEl.querySelector('.children-table');
        const defaultValue =
          el.children[fields.defaultValue + (hasChild ? 1 : 0)]?.innerText;
        const description =
          el.children[fields.description + (hasChild ? 1 : 0)]?.innerText;
        const required =
          el.children[fields.required + (hasChild ? 1 : 0)]?.innerText;

        attributes.push({
          name: el.children[fields.name + (hasChild ? 1 : 0)]?.innerText,
          type: handleType(
            el.children[fields.type + (hasChild ? 1 : 0)]?.innerText,
            '/',
          ),
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
