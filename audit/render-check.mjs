import fs from 'node:fs';
import assert from 'node:assert/strict';
import { chromium } from './tools/node_modules/playwright/index.mjs';
const [base='http://localhost:3001',target='http://localhost:3002']=process.argv.slice(2);
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
try {
  const results=[];
  for(const width of [390,412,768,1440]) {
    const context=await browser.newContext({viewport:{width,height:844}});
    await context.route(/googletagmanager/,r=>r.abort());
    const snapshots=[];
    for(const url of [base,target]) {
      const page=await context.newPage();
      await page.goto(url,{waitUntil:'networkidle'});
      snapshots.push(await page.evaluate(()=>{
        for(const e of document.querySelectorAll('main > section'))e.style.contentVisibility='visible';
        return {title:document.title,description:document.querySelector('meta[name="description"]').content,canonical:document.querySelector('link[rel="canonical"]').href,schemas:[...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>JSON.parse(s.textContent)),sections:[...document.querySelectorAll('main > section')].map(s=>({id:s.id,text:s.innerText,height:s.getBoundingClientRect().height})),links:[...document.querySelectorAll('a')].map(a=>a.getAttribute('href'))};
      }));
      await page.close();
    }
    assert.deepEqual(snapshots[1],snapshots[0],`Visible content, section geometry, links and SEO changed at ${width}`);
    const page=await context.newPage();
    await page.goto(target,{waitUntil:'networkidle'});
    const initialHeight=await page.evaluate(()=>document.documentElement.scrollHeight);
    for(const id of ['services','gallery','areas','faq']) {
      await page.evaluate(id=>{document.documentElement.style.scrollBehavior='auto';location.hash=id;},id);
      await page.waitForFunction(id=>{const r=document.getElementById(id).getBoundingClientRect();return r.top>=60&&r.top<100;},id);
      assert.ok(await page.locator(`#${id} h2`).isVisible());
    }
    const faq=page.locator('#faq details');
    assert.equal(await faq.count(),8);
    await faq.nth(1).locator('summary').click();
    assert.equal(await page.locator('#faq details[open]').count(),1);
    assert.equal(await faq.nth(1).getAttribute('open'),'');
    await faq.nth(2).locator('summary').focus();
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('#faq details[open]').count(),1);
    assert.equal(await faq.nth(2).getAttribute('open'),'');
    await page.screenshot({path:`audit/faq-after-${width}.png`});
    await page.locator('footer').scrollIntoViewIfNeeded();
    const finalHeight=await page.evaluate(()=>document.documentElement.scrollHeight);
    assert.ok(Math.abs(finalHeight-initialHeight)/initialHeight<0.05,'Offscreen size estimates changed scroll extent by over 5%');
    results.push({width,contentAndSeoIdentical:true,anchors:true,faqMouseAndKeyboard:true,initialHeight,finalHeight});
    await context.close();
  }
  const staticContext=await browser.newContext({viewport:{width:390,height:844},javaScriptEnabled:false});
  const staticPage=await staticContext.newPage();
  await staticPage.goto(target);
  await staticPage.locator('#faq details').nth(1).locator('summary').click();
  assert.equal(await staticPage.locator('#faq details[open]').count(),1);
  assert.equal(await staticPage.locator('#faq details').nth(1).getAttribute('open'),'');
  fs.writeFileSync('audit/render-check.json',JSON.stringify({results,faqWithoutJavaScript:true},null,2));
  console.log(JSON.stringify({results,faqWithoutJavaScript:true}));
} finally {await browser.close();}
