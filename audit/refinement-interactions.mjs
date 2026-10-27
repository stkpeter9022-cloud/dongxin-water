import fs from 'node:fs';
import assert from 'node:assert/strict';
import {chromium} from './tools/node_modules/playwright/index.mjs';
const [base,label,mode='after']=process.argv.slice(2);
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
try{
  const context=await browser.newContext({viewport:{width:1280,height:900},recordVideo:{dir:'audit/round2-media',size:{width:1280,height:900}}});
  await context.route(/googletagmanager|google-analytics|googleadservices|doubleclick/,r=>r.abort());
  const page=await context.newPage();await page.goto(base);
  const card=page.locator('.service-card').first();await card.evaluate(e=>e.scrollIntoView({block:'center',behavior:'instant'}));await page.waitForTimeout(700);
  const box=await card.boundingBox();const samples=[];
  for(const [x,y]of [[.2,.25],[.8,.75],[.2,.75],[.8,.25]]){
    await page.mouse.move(box.x+box.width*x,box.y+box.height*y,{steps:12});await page.waitForTimeout(300);
    samples.push(await card.evaluate(e=>({x:e.style.getPropertyValue('--tilt-x'),y:e.style.getPropertyValue('--tilt-y'),transform:getComputedStyle(e).transform,shine:getComputedStyle(e,'::after').opacity})));
  }
  await page.screenshot({path:`audit/round2-media/${label}-card.png`});
  if(mode==='after'){
    assert.ok(samples.every(s=>s.x&&s.y&&Number(s.shine)>.9));
    assert.ok(new Set(samples.map(s=>s.transform)).size>2);
    // Reset after scrolling must allow subsequent pointer frames again.
    await page.mouse.wheel(0,80);await page.waitForTimeout(250);await card.hover();await page.waitForTimeout(300);
    assert.ok(await card.evaluate(e=>!!e.style.getPropertyValue('--tilt-x')));
  }
  const video=page.video();await context.close();await video.saveAs(`audit/round2-media/${label}-card.webm`);
  const low=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  await low.route(/googletagmanager/,r=>r.abort());
  await low.addInitScript(()=>{Object.defineProperty(navigator,'hardwareConcurrency',{value:2});window.lowFrames=[];window.nativeCalls=0;const original=Element.prototype.animate;Element.prototype.animate=function(frames,options){if(this.tagName==='MAIN')window.lowFrames.push(frames[0]);return original.call(this,frames,options);};if(document.startViewTransition){const start=document.startViewTransition.bind(document);document.startViewTransition=(...args)=>{window.nativeCalls++;return start(...args);};}});
  const mobile=await low.newPage();await mobile.goto(base);await mobile.getByRole('button',{name:'開啟選單'}).click();await mobile.locator('#mobile-navigation a[href="/projects"]').click();await mobile.waitForURL('**/projects');await mobile.waitForTimeout(500);
  assert.equal(await mobile.locator('html').evaluate(e=>e.classList.contains('route-transition')),false);
  assert.ok(await mobile.locator('h1').isVisible());
  if(mode==='after'){assert.equal(await mobile.evaluate(()=>window.nativeCalls),0);assert.ok(await mobile.evaluate(()=>window.lowFrames.some(frame=>frame.transform==='translateY(14px)')));}
  fs.writeFileSync(`audit/${label}-interactions.json`,JSON.stringify({samples,lowDeviceNavigation:true},null,2));
  console.log(JSON.stringify({pointerPositions:samples.length,pointerDriven:mode==='after',lowDeviceNavigation:true,passed:true}));
}finally{await browser.close();}
