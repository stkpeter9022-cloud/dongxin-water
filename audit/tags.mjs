import fs from 'node:fs';
import assert from 'node:assert/strict';
import { chromium } from './tools/node_modules/playwright/index.mjs';

const [label='tags-local',baseUrl='http://localhost:3000'] = process.argv.slice(2);
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
try {
  const context=await browser.newContext({viewport:{width:390,height:844}});
  const scripts=[];
  // Allow genuine Google script loading, block measurement/beacon endpoints.
  await context.route('**/*',r=>{
    const url=new URL(r.request().url());
    if(/(^|\.)(google-analytics\.com|googletagmanager\.com|googleadservices\.com|doubleclick\.net|google\.[a-z.]+)$/.test(url.hostname)) {
      if(url.hostname==='www.googletagmanager.com'&&url.pathname==='/gtag/js') return r.continue();
      return r.abort();
    }
    return r.continue();
  });
  const page=await context.newPage();
  const scriptResponses=[];
  page.on('response',r=>{if(r.url().includes('googletagmanager.com/gtag/js'))scriptResponses.push({url:r.url(),status:r.status()});});
  page.on('request',r=>{const u=new URL(r.url());if(u.hostname==='www.googletagmanager.com'&&u.pathname==='/gtag/js')scripts.push({id:u.searchParams.get('id'),url:u.href});});
  await page.goto(baseUrl,{waitUntil:'domcontentloaded'});
  assert.equal(new URL(page.url()).origin,new URL(baseUrl).origin,'Preview redirected to login; authenticated access required');
  await page.waitForLoadState('networkidle');
  await page.waitForFunction(()=>window.google_tag_manager, null, {timeout:30000}).catch(async error=>{
    console.log(JSON.stringify({scripts,scriptResponses,diagnostic:await page.evaluate(()=>({managerKeys:Object.keys(window.google_tag_manager||{}),dataLayerEntries:window.dataLayer?.length,scripts:[...document.scripts].map(s=>s.src).filter(Boolean)}))},null,2));
    throw error;
  });
  await page.getByRole('button',{name:'開啟選單'}).click();
  await page.locator('#mobile-navigation a[href="/about"]').click();
  await page.waitForURL('**/about');
  await page.waitForLoadState('networkidle');
  const result=await page.evaluate(()=>{
    const configs=window.dataLayer.filter(a=>a[0]==='config').map(a=>a[1]);
    const before=window.dataLayer.length;
    let prevented;
    document.addEventListener('click',e=>{prevented=e.defaultPrevented;e.preventDefault();},{once:true});
    document.querySelector('a[href="tel:0918808209"]').dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true}));
    return {configs,prevented,events:window.dataLayer.slice(before).filter(a=>a[0]==='event').map(a=>({name:a[1],method:a[2].contact_method,path:a[2].page_path})),domScripts:[...document.scripts].filter(s=>s.src.includes('googletagmanager.com/gtag/js')).map(s=>s.src)};
  });
  assert.deepEqual(result.configs,['G-KQMV13X0NC','AW-16737912362','AW-18052969763','AW-18404348972']);
  assert.equal(result.prevented,false);
  assert.deepEqual(result.events.map(e=>e.name),['conversion_event_contact','click_phone']);
  const counts=Object.fromEntries([...new Set(scripts.map(s=>s.id))].map(id=>[id,scripts.filter(s=>s.id===id).length]));
  assert.equal(counts['G-KQMV13X0NC'],1,'GA4 loader duplicated');
  assert.ok(Object.values(counts).every(n=>n===1),'Same Google tag ID loaded more than once');
  fs.writeFileSync(`audit/${label}.json`,JSON.stringify({baseUrl,counts,scripts,...result},null,2));
  console.log(JSON.stringify({baseUrl,counts,...result},null,2));
} finally {await browser.close();}
