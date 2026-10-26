import fs from 'node:fs';
import { chromium } from './tools/node_modules/playwright/index.mjs';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const results=[];
try {
  for(const [name,url] of [['yangming','https://hydropower9.com/'],['longxin','https://24homefix.com/']]) {
    const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
    const page=await context.newPage();
    await page.goto(url,{waitUntil:'domcontentloaded'});
    await page.waitForTimeout(1200);
    const data=await page.evaluate(()=>({title:document.title,h1:[...document.querySelectorAll('h1')].map(e=>e.textContent),links:[...document.querySelectorAll('a[href]')].map(e=>({text:e.textContent.trim().slice(0,50),href:e.href})).filter(e=>e.text||e.href.startsWith('tel:')),overflow:document.documentElement.scrollWidth>innerWidth,scripts:[...document.scripts].map(s=>s.src).filter(Boolean),cssAnimation:document.getAnimations().map(a=>a.animationName)}));
    await page.screenshot({path:`audit/round2-media/${name}-mobile.png`});
    const animations=[];
    for(let i=0;i<4;i++){await page.mouse.wheel(0,500);await page.waitForTimeout(100);animations.push(await page.evaluate(()=>document.getAnimations().map(a=>({name:a.animationName||a.constructor.name,frames:a.effect?.getKeyframes().slice(0,2)}))));await page.waitForTimeout(450);}
    await page.screenshot({path:`audit/round2-media/${name}-mobile-content.png`});
    results.push({name,url,...data,scrollAnimations:animations});
    await context.close();
  }
  fs.writeFileSync('audit/round2-competitors.json',JSON.stringify(results,null,2));
  console.log(JSON.stringify(results.map(({name,title,h1,overflow,scrollAnimations})=>({name,title,h1,overflow,scrollAnimationCounts:scrollAnimations.map(a=>a.length)}))));
}finally{await browser.close();}
