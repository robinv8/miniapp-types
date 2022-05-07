const puppeteer = require('puppeteer');
const fs = require('fs')
const path = require('path')
const humps = require('humps');
const componentList = require('./componentList.json')


const fn = async ()=>{
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  })
  const page = await browser.newPage();

  let index=0
  const getComponentProps = async (url, page)=>{
    await page.goto(url,{ waitUntil: 'networkidle0' });
    const data = await page.evaluate(()=>{
      const tableList = document.querySelectorAll('table')
      const attributes = []
      console.log(tableList)
      tableList.forEach(tableEle=>{
        tableEle.querySelectorAll('tr')?.forEach(el=>{
          if(el.childNodes.length===3 && el.childNodes[0].innerText!=='属性'){

            attributes.push({
              name: el.childNodes[0].innerText,
              type: el.childNodes[1].innerText,
              desc: el.childNodes[2].innerText
            })
          }
        })

      })
      return attributes
    })
    let tsCode = 'interface '+humps.pascalize(componentList[index].name)+'Props {\n'
    data.forEach(el=>{
      tsCode += ' '+humps.camelize(el.name)+': '+el.type+';\n'
    })
    tsCode += '}'
    componentList[index].props=data
    fs.writeFileSync(path.join(process.cwd(), `dist/alipay/${humps.camelize(componentList[index].name)}.d.ts`),tsCode)
    index++
    const nextUrl = componentList[index]?.url
    if(nextUrl) {
      getComponentProps(componentList[index].url,page)
    }
  }
  getComponentProps(componentList[index].url,page)
}

fn()
