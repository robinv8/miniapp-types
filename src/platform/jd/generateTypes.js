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
      const attributes = []
      document.querySelector('table')?.querySelectorAll('tbody tr')?.forEach(el=>{
        const len = el.children.length
        if(len===4){
          attributes.push({
            name: el.children[0].innerText,
            type: el.children[1].innerText,
          })
        } else {

        }
      })
      return attributes
    })
    let tsCode = 'interface '+humps.pascalize(componentList[index].name)+'Props {\n'
    data.forEach(el=>{
      tsCode += ' '+humps.camelize(el.name)+': '+el.type+';\n'
    })
    tsCode += '}'
    componentList[index].props=data
    fs.writeFileSync(path.join(process.cwd(), `dist/jd/${humps.camelize(componentList[index].name)}.d.ts`),tsCode)
    index++
    const nextUrl = componentList[index]?.url
    if(nextUrl) {
      getComponentProps(componentList[index].url,page)
    }

  }
  getComponentProps(componentList[index].url,page)
}

fn()
