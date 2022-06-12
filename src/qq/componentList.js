const puppeteer = require('puppeteer');
const fs = require('fs')
const path = require('path')

const run = async (url, page)=>{
  await page.goto(url,{ waitUntil: 'networkidle0' });
  const data = await page.evaluate(()=>{

    const tableList = document.querySelectorAll('table')
    const componentList = []
    console.log(tableList)
    tableList.forEach(tableEle=>{
      tableEle.querySelectorAll('tr').forEach(el=>{
        const aElList = el.children[0].querySelectorAll('a')
        if(aElList) {
          aElList.forEach(aEl=>{
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

const getComponentList = async (url)=>{
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  })
  const page = await browser.newPage();
  const componentList = await run(url,page)
  fs.writeFileSync(path.resolve(__dirname, './componentList.json'), JSON.stringify(componentList, null, 2))
}

getComponentList('https://q.qq.com/wiki/develop/miniprogram/component/')
