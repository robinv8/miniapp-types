import * as puppeteer from "puppeteer";
import * as fs from "fs";
import * as path from "path";
import { ComponentInfo } from "../types";

const getComponentList = async (url, page) => {
  await page.goto(url, { waitUntil: 'networkidle0' });
  const data = await page.evaluate(() => {

    const tableList = document.querySelectorAll('table')
    const componentList: ComponentInfo[] = []
    console.log(tableList)
    tableList.forEach(tableEle => {
      tableEle.querySelectorAll('tr').forEach(el => {
        const aElList = el.children[0].querySelectorAll('a')
        if (aElList) {
          aElList.forEach(aEl => {
            componentList.push({
              name: aEl.innerText,
              url: aEl.href
            })
          })
        }
      })

    })
    return componentList
  })
  return data
}

const exec = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  })
  const page = await browser.newPage();
  const componentList = await getComponentList('https://q.qq.com/wiki/develop/miniprogram/component/', page)
  fs.writeFileSync(path.resolve(__dirname, './componentList.json'), JSON.stringify(componentList, null, 2))
}

exec()
