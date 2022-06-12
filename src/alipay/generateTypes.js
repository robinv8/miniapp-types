const Service = require('..');

const service = new Service({
  platform: 'alipay',
  waitUntil: 'networkidle0',
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
      tablesEl?.querySelectorAll('tbody tr')?.forEach((el, index) => {
        if (index === 0) {
          return;
        }
        const len = el.children.length;
        const options = [];

        if (len > 0) {
          const optEl = document.querySelector(
            `.lake-engine-view>a[name='${el.children[0]?.innerText}-有效值']`,
          );
          if (optEl) {
            optEl.nextElementSibling.nextElementSibling
              .querySelectorAll('tbody tr')
              .forEach((el, index) => {
                if (index === 0) {
                  return;
                }
                options.push(el.children[0].innerText);
              });
          }
          const description = el.children[fields.description]?.innerText;

          const defaultValue =
            el.children[fields.defaultValue]?.innerText ||
            description.match(/默认值： (\w+)/)?.[1];
          const required = el.children[fields.required]?.innerText;

          attributes.push({
            name: el.children[fields.name]?.innerText,
            type: handleType(el.children[fields.type]?.innerText, '/'),
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
