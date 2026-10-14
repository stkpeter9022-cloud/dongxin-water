import fs from 'node:fs';
import { chromium } from './tools/node_modules/playwright/index.mjs';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const data=[];
try {
  for(const width of [390,412,768,1440]) {
    const context=await browser.newContext({viewport:{width,height:844}});
    await context.route(/googletagmanager/,r=>r.abort());
    const page=await context.newPage();
    await page.goto('http://localhost:3001/',{waitUntil:'networkidle'});
    data.push({width,sections:await page.evaluate(()=>[...document.querySelectorAll('main > section,body > footer')].map(e=>({id:e.id||e.tagName.toLowerCase(),height:e.getBoundingClientRect().height,top:e.getBoundingClientRect().top}))),fonts:await page.evaluate(()=>getComputedStyle(document.querySelector('h1')).fontFamily)});
    await context.close();
  }
  fs.writeFileSync('audit/layout-before.json',JSON.stringify(data,null,2));
  console.log(JSON.stringify(data,null,2));
} finally {await browser.close();}
