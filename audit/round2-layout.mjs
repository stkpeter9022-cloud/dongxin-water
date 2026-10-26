import fs from 'node:fs';
import assert from 'node:assert/strict';
import { chromium } from './tools/node_modules/playwright/index.mjs';
const [base,label]=process.argv.slice(2);
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const results=[];
try{
  for(const width of [320,390,768,1440]){
    const context=await browser.newContext({viewport:{width,height:900}});
    await context.route(/googletagmanager/,r=>r.abort());
    const page=await context.newPage();
    for(const path of ['/projects','/knowledge','/knowledge/power-and-outlets','/knowledge/leaks-and-water-pressure','/knowledge/toilet-and-drains','/knowledge/renovation-wiring']){
      await page.goto(base+path,{waitUntil:'networkidle'});
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,path+' overflow '+width);
      if(path==='/projects'){
        assert.equal(await page.locator('.project-detail').count(),8);
        const image=page.locator('.project-card img').first();
        await image.scrollIntoViewIfNeeded();await image.evaluate(i=>i.decode());
        const quality=await image.evaluate(i=>({rendered:i.getBoundingClientRect().width,sizes:i.sizes,src:i.currentSrc}));
        assert.ok(!quality.sizes.includes('110px'));
        assert.ok(quality.rendered>250);
      }
      await page.locator('footer').scrollIntoViewIfNeeded();
      const dock=await page.evaluate(()=>({bottom:document.querySelector('footer').getBoundingClientRect().bottom,top:document.querySelector('.contact-dock').getBoundingClientRect().top}));
      assert.ok(dock.bottom<=dock.top+1,path+' footer obscured');
      if(width===390||width===1440){await page.evaluate(()=>{document.documentElement.style.scrollBehavior='auto';scrollTo(0,0);});await page.waitForFunction(()=>scrollY===0);await page.screenshot({path:`audit/round2-media/${label}-${path.replaceAll('/','-')}-${width}.png`});}
      results.push({width,path,passed:true});
    }
    await context.close();
  }
  fs.writeFileSync(`audit/${label}-layout.json`,JSON.stringify(results,null,2));console.log(JSON.stringify({checks:results.length,passed:true}));
}finally{await browser.close();}
