import * as puppeteer from "puppeteer";
import * as fs from "fs";
import * as path from "path";
import * as humps from "humps";

const eventTypes = ['eventHandle', 'eventhandle', 'handler', 'handlerEvent', 'eventHandler'];
const omitTypes = ['color'];
class Service {
  platform;
  waitUntil;
  browser;
  page;
  index = 0;
  evaluate;
  componentList;
  waitTime
  constructor(options) {
    this.platform = options.platform;
    this.waitUntil = options.waitUntil;
    this.evaluate = options.evaluate;
    this.waitTime = options.waitTime || 0;
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
    await this.page.goto(url, { waitUntil: this.waitUntil, debugger: true });
    await this.page.waitForTimeout(this.waitTime)
    const data = await this.evaluate(this.page, this.componentList[this.index]);
    if (data.length > 0) {
      const folder = path.join(__dirname, this.platform, 'jsonSchema');
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
      }
      const properties = {};
      const required: string[] = [];

      data.forEach((item) => {
        let type =
          typeof item.type === 'string' ? humps.camelize(item.type) : item.type;
        let tsType = '';
        if (eventTypes.includes(type)) {
          tsType = '() => void';
        }
        if (omitTypes.includes(type)) {
          type = 'string';
        }
        properties[item.name] = {
          ...(tsType ? { tsType } : { type }),
          description: item.description,
          defaultValue: item.defaultValue,
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
export default Service;
