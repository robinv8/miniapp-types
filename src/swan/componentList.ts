import * as puppeteer from "puppeteer";
import * as fs from "fs";
import * as path from "path";
import { ComponentInfo } from './../types';

const getComponentList = async (url, page) => {

  await page.goto(url, { waitUntil: 'networkidle0' });
  const data = await page.evaluate(() => {

    const tableList = document.querySelectorAll('table')
    const componentList: ComponentInfo[] = []
    console.log(tableList)
    tableList.forEach(tableEle => {
      tableEle.querySelectorAll('tr').forEach(el => {
        const aEl = el.children[0].querySelector('a')
        if (aEl) {
          componentList.push({
            name: aEl.innerText,
            url: aEl.href
          })
        }
      })

    })
    return componentList
  })
  return data
}

const fn = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  })
  const page = await browser.newPage();
  const componentList = await getComponentList('https://smartprogram.baidu.com/docs/develop/component/component/', page)
  const componentListStr = fs.readFileSync(
    path.resolve(__dirname, './componentList.json'),
    'utf-8',
  );
  const componentListJSON = JSON.parse(componentListStr);
  componentList.forEach((item) => {
    const component = componentListJSON.find(
      (component) => component.name === item.name,
    );
    if (component) {
      item = Object.assign(item, component);
    }
  });
  fs.writeFileSync(path.resolve(__dirname, './componentList.json'), JSON.stringify(componentList, null, 2))
}

fn()
