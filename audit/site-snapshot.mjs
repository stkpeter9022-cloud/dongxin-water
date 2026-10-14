import fs from 'node:fs';
import { chromium } from './tools/node_modules/playwright/index.mjs';
import { authorizeContext } from './preview-auth.mjs';
const [label,base]=process.argv.slice(2);
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
try {
  const results=[];
  for(const width of [320,360,390,412,430,768,1440]) {
    const context=await browser.newContext({viewport:{width,height:844}});
    await authorizeContext(context,base);
    await context.route(/googletagmanager/,r=>r.abort());
    const page=await context.newPage();
    await page.goto(base,{waitUntil:'networkidle'});
    await page.screenshot({path:`audit/${label}-${width}.png`});
    await page.evaluate(()=>{for(const e of document.querySelectorAll('main > section'))e.style.contentVisibility='visible';});
    await page.locator('footer').scrollIntoViewIfNeeded();
    await page.evaluate(()=>{document.documentElement.style.scrollBehavior='auto';scrollTo(0,0);});
    const result=await page.evaluate(()=>({height:document.documentElement.scrollHeight,overflow:document.documentElement.scrollWidth>innerWidth,title:document.title,description:document.querySelector('meta[name="description"]')?.content,sections:[...document.querySelectorAll('main > section')].map(s=>({id:s.id,height:s.getBoundingClientRect().height,text:s.innerText}))}));
    if([390,1440].includes(width)) await page.screenshot({path:`audit/${label}-full-${width}.png`,fullPage:true});
    results.push({width,...result});
    await context.close();
  }
  fs.writeFileSync(`audit/${label}-snapshot.json`,JSON.stringify(results,null,2));
  console.log(JSON.stringify(results.map(({width,height,overflow})=>({width,height,overflow}))));
} finally {await browser.close();}
