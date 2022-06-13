const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const humps = require('humps');

const eventType = ['eventHandle', 'eventhandle', 'handler', 'handlerEvent'];
const omitType = ['color'];
class Service {
  platform;
  waitUntil;
  browser;
  page;
  index = 0;
  evaluate;
  constructor(options) {
    this.platform = options.platform;
    this.waitUntil = options.waitUntil;
    this.evaluate = options.evaluate;
    this.componentList = require(`./${this.platform}/componentList.json`);
  }
  async init() {
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });
    this.page = await this.browser.newPage();
  }

  handleType(str, char) {
    if (str.indexOf(char) === -1) {
      return str;
    }
    return str.split(char).map((item) => item.trim());
  }
  async getComponentProps({ page, url, name }) {
    await this.page.goto(url, { waitUntil: this.waitUntil });
    const data = await this.evaluate(this.page, this.componentList[this.index]);
    if (data.length > 0) {
      const folder = path.join(__dirname, this.platform, 'jsonSchema');
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
      }
      const properties = {};
      const required = [];

      data.forEach((item) => {
        let type =
          typeof item.type === 'string' ? humps.camelize(item.type) : item.type;
        let tsType = '';
        if (eventType.includes(type)) {
          tsType = '() => void';
        }
        if (omitType.includes(type)) {
          type = 'string';
        }
        properties[item.name] = {
          ...(tsType ? { tsType } : { type }),
          description: item.description,
          ...(item.options ? { enum: item.options } : {}),
        };
        if (item.required) {
          required.push(item.name);
        }
      });
      const result = {
        title: name,
        type: 'object',
        properties,
        additionalProperties: false,
        ...(required.length > 0 ? { required } : {}),
      };
      fs.writeFileSync(
        path.join(folder, `${name}.json`),
        JSON.stringify(result, null, 2),
      );
    }
    this.index++;
    const { url: nextUrl = '', name: nextName = '' } =
      this.componentList[this.index] || {};
    if (nextUrl) {
      this.getComponentProps({
        url: nextUrl,
        name: nextName,
        page,
      });
    } else {
      await this.browser.close();
    }
  }
  async exec() {
    await this.init();
    const { url = '', name } = this.componentList[this.index] || {};

    this.getComponentProps({
      url,
      name,
      page: this.page,
    });
  }
}
module.exports = Service;
