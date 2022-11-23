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
        result = result.replace(/\n?默认值： ?.*\n?/g, '');
        result = result.replace(/\n?版本要求： ?.*\n?/g, '');
        return result;
      }

      function nextAll(element) {
        const nextElements: HTMLElement[] = []
        let nextElement = element

        while (nextElement.nextElementSibling) {
          nextElements.push(nextElement.nextElementSibling)
          nextElement = nextElement.nextElementSibling
        }

        return nextElements
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
          const tableEl = nextAll(optEl).find((item: HTMLElement) => item.querySelector('table'));
          if (!tableEl) {
            return
          }


          (tableEl as HTMLTableElement).querySelectorAll('tbody tr')
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


        const defaultValue = ((<HTMLElement>el.children[fields.defaultValue])?.innerText ||
          description).split('\n').filter(item => item.indexOf('默认值：') > -1)[0]?.replace(/^默认值： /, '')

       
        const required = (<HTMLElement>el.children[fields.required])?.innerText;

        const filteredDescription = handleDescription(description);
        attributes.push({
          name,
          type,
          ...(options.length > 0 ? { options } : {}),
          ...(defaultValue ? { defaultValue } : {}),
          ...(filteredDescription ? { description: filteredDescription } : {}),
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
