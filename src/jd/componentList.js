const puppeteer = require('puppeteer');
const fs = require('fs')
const path = require('path')
const humps = require('humps');

const getComponentList = async (url, page)=>{

  await page.goto(url,{ waitUntil: 'networkidle0' });
  const data = await page.evaluate(()=>{

    const tableList = document.querySelectorAll('table')
    const componentList = []
    console.log(tableList)
    tableList.forEach(tableEle=>{
      tableEle.querySelectorAll('tr').forEach(el=>{
        const aEl = el.children[0].querySelector('a')
        if(aEl) {
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

const fn = async ()=>{
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  })
  const page = await browser.newPage();
  const componentList = await getComponentList('https://mp-docs.jd.com/component/',page)
  fs.writeFileSync(path.resolve(__dirname, './componentList.json'), JSON.stringify(componentList, null, 2))
}

fn()