const Service = require('..');

const service = new Service({
  platform: 'jd',
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
      tablesEl?.querySelectorAll('tbody tr')?.forEach((el) => {
        const len = el.children.length;
        const options = [];

        if (len > 0) {
          document.querySelectorAll('table').forEach((table) => {
            const text =
              table.previousElementSibling?.querySelector('strong')?.innerText;
            if (
              text === `${el.children[0]?.innerText} 有效值：` ||
              text === `${el.children[0]?.innerText} 的合法值`
            ) {
              table.querySelectorAll('tbody tr').forEach((el) => {
                options.push(el.children[0].innerText);
              });
            }
          });
          const defaultValue = el.children[fields.defaultValue]?.innerText;
          const description = el.children[fields.description]?.innerText;
          const required = el.children[fields.required]?.innerText;

          attributes.push({
            name: el.children[fields.name]?.innerText,
            type: handleType(el.children[fields.type]?.innerText, '/'),
            ...(options.length > 0 ? { options } : {}),
            ...(defaultValue
              ? { defaultValue: defaultValue.replace(/\"/g, '') }
              : {}),
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
