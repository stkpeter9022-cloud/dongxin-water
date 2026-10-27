import fs from 'node:fs';
import assert from 'node:assert/strict';
import { chromium, webkit } from './tools/node_modules/playwright/index.mjs';
const [base,label,engine='chrome',mode='native']=process.argv.slice(2);
const folder='audit/round2-media';fs.mkdirSync(folder,{recursive:true});
const browser=await (engine==='webkit'?webkit.launch():chromium.launch({executablePath:engine==='edge'?'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe':'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true}));
const results=[];
const instrument=()=>{
  window.motionLog=[];window.captureAnimations=[];window.freeze=false;
  window.shifts=[];if(PerformanceObserver.supportedEntryTypes.includes('layout-shift'))new PerformanceObserver(list=>{for(const x of list.getEntries())if(!x.hadRecentInput)window.shifts.push(x.value);}).observe({type:'layout-shift',buffered:true});
  const animate=Element.prototype.animate;
  Element.prototype.animate=function(frames,options){const a=animate.call(this,frames,options);window.motionLog.push({kind:'element',target:this.className||this.id||this.tagName,frames,options});if(window.freeze&&(this.id==='main-content'||this.dataset.motionOutgoing)){a.pause();a.currentTime=0;window.captureAnimations.push(a);if(this.id==='main-content')window.captureReady=true;}return a;};
  if(document.startViewTransition){const start=document.startViewTransition.bind(document);document.startViewTransition=(...args)=>{const t=start(...args);t.ready.then(()=>{const all=document.getAnimations().filter(a=>a.animationName?.startsWith('page-depth'));window.motionLog.push({kind:'native',animations:all.map(a=>({name:a.animationName,duration:a.effect.getTiming().duration,frames:a.effect.getKeyframes()}))});if(window.freeze){all.forEach(a=>{a.pause();a.currentTime=0;});window.captureAnimations=all;window.captureReady=true;}}).catch(()=>{});return t;};}
};
try{
for(const mobile of [false,true]){
 const viewport=mobile?{width:390,height:844}:{width:1280,height:900};
 const context=await browser.newContext({viewport,isMobile:mobile,hasTouch:mobile,recordVideo:{dir:folder,size:viewport},reducedMotion:mode==='reduce'?'reduce':'no-preference'});
 await context.route(/googletagmanager|google-analytics|googleadservices|doubleclick/,r=>r.abort());await context.addInitScript(instrument);
 if(mode==='fallback')await context.addInitScript(()=>{document.startViewTransition=undefined;});
 if(mode==='rejected-snapshot')await context.addInitScript(()=>document.addEventListener('DOMContentLoaded',()=>{for(let i=0;i<2;i++){const node=document.createElement('div');node.style.cssText='position:fixed;top:0;left:0;width:1px;height:1px;view-transition-name:duplicate-test';document.body.append(node);}}));
 if(mode==='low'||mode==='cores-only')await context.addInitScript(low=>{Object.defineProperty(navigator,'hardwareConcurrency',{value:2});Object.defineProperty(navigator,'deviceMemory',{value:low?2:8});},mode==='low');
 if(mode==='save-data')await context.addInitScript(()=>Object.defineProperty(navigator,'connection',{value:{saveData:true}}));
 const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base);await page.waitForTimeout(800);
 const native=engine!=='webkit'&&await page.evaluate(()=>!!document.startViewTransition)&&!['fallback','low','reduce','save-data','rejected-snapshot'].includes(mode);
 const clicks=async path=>{
   if(path==='/tiao-dian'||path==='/ma-tong'){const link=page.locator(`.service-card[href="${path}"]`);await link.scrollIntoViewIfNeeded();await page.waitForTimeout(1000);await link.click();}
   else if(mobile){await page.locator('.mobile-menu-button').click();await page.locator(`#mobile-navigation a[href="${path}"]`).click();}
   else await page.locator(`header a[href="${path}"]`).first().click();
 };
 const cases=['/tiao-dian','/','/shui-dian-gong-cheng','/','/ma-tong','/','/projects','/'];const captures=[];
 for(let i=0;i<cases.length;i++){
   const path=cases[i];const capture=!['reduce','save-data'].includes(mode);
   // Position the chosen card before arming the route snapshot capture.
   if(path==='/tiao-dian'||path==='/ma-tong'){await page.locator(`.service-card[href="${path}"]`).scrollIntoViewIfNeeded();await page.waitForTimeout(950);}
   await page.evaluate(freeze=>{window.freeze=freeze;window.captureReady=false;window.captureAnimations=[];},capture);
   await clicks(path);await page.waitForURL(base+path);
   if(capture){
     await page.waitForFunction(()=>window.captureReady);
     const duration=await page.evaluate(()=>window.captureAnimations[0].effect.getTiming().duration);
     const frames=[];
     for(const [stage,fraction]of [['start',.02],['middle',.5],['end',.999]]){
       await page.evaluate(f=>window.captureAnimations.forEach(a=>a.currentTime=a.effect.getTiming().duration*f),fraction);
       await page.waitForTimeout(70);
       const data=await page.evaluate(()=>({animations:window.captureAnimations.map(a=>({name:a.animationName||'fallback',time:a.currentTime,frames:a.effect.getKeyframes(),progress:a.effect.getComputedTiming().progress})),old:getComputedStyle(document.documentElement,'::view-transition-old(page)').transform,new:getComputedStyle(document.documentElement,'::view-transition-new(page)').transform,main:getComputedStyle(document.querySelector('main')).transform,layer:document.querySelector('[data-motion-outgoing]')?getComputedStyle(document.querySelector('[data-motion-outgoing]')).transform:null}));
       await page.screenshot({path:`${folder}/${label}-${engine}-${mode}-${mobile?'mobile':'desktop'}-${i}-${stage}.png`});frames.push({stage,...data});
       if(stage==='middle'){
         const contacts=await page.evaluate(()=>[...document.querySelectorAll('.contact-dock a')].map(link=>{const r=link.getBoundingClientRect();const hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)?.closest('a')===link;let prevented;document.addEventListener('click',e=>{prevented=e.defaultPrevented;e.preventDefault();},{once:true});link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true}));return{href:link.getAttribute('href'),hit,prevented};}));
         assert.ok(contacts.length>=2&&contacts.every(c=>c.hit&&!c.prevented),'Contact blocked');
         if(native)assert.ok(data.old!=='none'&&data.new!=='none','Missing dual 3D matrices');else assert.notEqual(data.main,'none');
       }
     }
     await page.evaluate(()=>{window.freeze=false;window.captureAnimations.forEach(a=>a.play());});await page.waitForTimeout(250);
     captures.push({path,duration,frames});
   }else await page.waitForTimeout(100);
   assert.equal(await page.locator('main').evaluate(e=>getComputedStyle(e).transform),'none');
 }
 // Unpaused full homepage scroll recording exercises every major section.
 const height=await page.evaluate(()=>document.documentElement.scrollHeight);
 for(let y=0;y<height;y+=360){if(engine==='webkit'&&mobile)await page.evaluate(()=>scrollBy({top:360,behavior:'smooth'}));else await page.mouse.wheel(0,360);await page.waitForTimeout(400);}
 await page.waitForTimeout(1000);
 const log=await page.evaluate(()=>window.motionLog);const cls=await page.evaluate(()=>window.shifts.reduce((a,b)=>a+b,0));
 if(mode==='reduce'||mode==='save-data')assert.equal(log.length,0);else{
   assert.ok(log.filter(x=>x.kind==='element').length>5,'No section reveals');
   assert.ok(captures.length===8);
   if(native)assert.ok(log.filter(x=>x.kind==='native').length>=8);else assert.equal(log.filter(x=>x.kind==='native').length,0);
 }
 assert.deepEqual(errors,[]);assert.ok(cls<.05,'Unexpected layout shift '+cls);
 const video=page.video();await context.close();await video.saveAs(`${folder}/${label}-${engine}-${mode}-${mobile?'mobile':'desktop'}.webm`);
 results.push({mobile,native,version:browser.version(),mode,captures,log,cls,errors});
}
fs.writeFileSync(`audit/${label}-${engine}-${mode}.json`,JSON.stringify(results,null,2));console.log(JSON.stringify(results.map(({mobile,native,version,mode,captures,cls})=>({mobile,native,version,mode,transitions:captures.length,cls,passed:true}))));
}finally{await browser.close();}
