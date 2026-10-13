import fs from 'node:fs';
import assert from 'node:assert/strict';
import { chromium } from './tools/node_modules/playwright/index.mjs';

const label = process.argv[2] || 'after';
const baseUrl = (process.argv[3] || 'http://localhost:3000').replace(/\/$/, '');
const browser = await chromium.launch({executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true});
const results = [];
const routes = ['/', ...fs.readdirSync('app', {withFileTypes:true}).filter(d => d.isDirectory() && fs.existsSync(`app/${d.name}/page.tsx`)).map(d => `/${d.name}`), '/missing-audit-page'];
try {
  for (const viewport of [{width:390,height:844}, {width:1440,height:900}]) {
    const context = await browser.newContext({viewport, deviceScaleFactor:1});
    // Never send test contact events to Google or open a real dialer/LINE app.
    await context.route(/https:\/\/(www\.)?(google|googletagmanager|googleadservices|doubleclick)\./, r => r.abort());
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    for (const route of routes) {
      const response=await page.goto(`${baseUrl}${route}`, {waitUntil:'networkidle'});
      assert.equal(response.status(),route==='/missing-audit-page'?404:200,`${route}: unexpected HTTP status (deployment protection may be enabled)`);
      if(await page.locator('footer').count()) await page.locator('footer').scrollIntoViewIfNeeded();
      await page.waitForFunction(() => [...document.querySelectorAll('header img,footer img')].every(i=>i.complete&&i.naturalWidth>0));
      await page.evaluate(() => {document.documentElement.style.scrollBehavior='auto';window.scrollTo(0,0);});
      if(viewport.width===390 && await page.getByRole('button', {name:'開啟選單'}).count()) {
        await page.getByRole('button', {name:'開啟選單'}).click();
      }
      const result = await page.evaluate(() => {
        const links = [...document.querySelectorAll('a[href^="tel:"], a[href*="line.me"]')];
        const configs=window.dataLayer.filter(a=>a[0]==='config').map(a=>a[1]);
        const recorded = [];
        window.dataLayer.push = (...args) => recorded.push(...args);
        const clicks = links.map(link => {
          const href=link.getAttribute('href');
          const before=recorded.length;
          let prevented;
          const cancel = e => {prevented=e.defaultPrevented;e.preventDefault();};
          document.addEventListener('click',cancel,{once:true});
          link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true}));
          return {href,prevented,events:recorded.slice(before).map(a=>[a[0],a[1],a[2]])};
        });
        // Even a failing analytics queue must leave native navigation available.
        window.dataLayer.push = () => {throw Error('Simulated analytics failure');};
        let failurePrevented;
        document.addEventListener('click', e => {failurePrevented=e.defaultPrevented;e.preventDefault();},{once:true});
        links[0].dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true}));
        return {configs,clicks,failurePrevented,overflow:document.documentElement.scrollWidth>innerWidth,logos:[...document.querySelectorAll('header img,footer img')].map(i=>({src:i.getAttribute('src'),loaded:i.complete&&i.naturalWidth>0})),schemas:[...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>JSON.parse(s.textContent))};
      });
      assert.equal(result.overflow,false,`${route} overflow at ${viewport.width}`);
      assert.deepEqual(result.configs,['G-KQMV13X0NC','AW-16737912362','AW-18052969763','AW-18404348972']);
      for(const schema of result.schemas.filter(s=>s.logo)) assert.equal(schema.logo,'https://www.dongxin24.com/icon.png');
      for(const click of result.clicks) {
        assert.ok(['tel:0918808209','https://line.me/ti/p/ezn_Ad6UpZ'].includes(click.href));
        assert.equal(click.prevented,false,`${route} navigation blocked`);
        assert.equal(click.events.length,2,`${route}: event count`);
        assert.deepEqual(click.events.map(e=>e[1]),['conversion_event_contact',click.href.startsWith('tel:')?'click_phone':'click_line']);
        assert.equal(click.events[0][2].contact_action,'click');
      }
      assert.equal(result.failurePrevented,false);
      assert.ok(result.logos.length===(route==='/'?2:0)&&result.logos.every(i=>i.loaded),`${route}: logo failed`);
      results.push({route,width:viewport.width,links:result.clicks.length,passed:true});
      if(route==='/tiao-dian') {
        await page.goto(`${baseUrl}/tiao-dian`,{waitUntil:'networkidle'});
        await page.screenshot({path:`audit/${label}-service-${viewport.width}.png`});
      }
      if(route==='/') {
        await page.goto(`${baseUrl}/`,{waitUntil:'networkidle'});
        await page.screenshot({path:`audit/${label}-${viewport.width}.png`});
        await page.locator('footer').scrollIntoViewIfNeeded();
        await page.screenshot({path:`audit/${label}-footer-${viewport.width}.png`});
        await page.goto(`${baseUrl}/`,{waitUntil:'networkidle'});
        const live=await page.locator('h1').boundingBox();
        const noJS=await browser.newContext({viewport,javaScriptEnabled:false});
        const staticPage=await noJS.newPage();
        await staticPage.goto(`${baseUrl}/`);
        const staticBox=await staticPage.locator('h1').boundingBox();
        assert.deepEqual(staticBox,live,'Hero must have the same layout without hydration');
        await noJS.close();
      }
    }
    // Client-side navigation must not install a second contact listener.
    await page.goto(`${baseUrl}/`,{waitUntil:'networkidle'});
    if(viewport.width===390) await page.getByRole('button',{name:'開啟選單'}).click();
    const aboutLink=viewport.width===390 ? page.locator('#mobile-navigation a[href="/about"]') : page.locator('header .desktop-nav a[href="/about"]');
    await aboutLink.click();
    await page.waitForURL('**/about');
    const spa=await page.evaluate(() => {
      const events=[];
      window.dataLayer.push=(...args)=>events.push(...args);
      document.addEventListener('click',e=>e.preventDefault(),{once:true});
      document.querySelector('a[href="tel:0918808209"]').dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true}));
      return events.map(e=>({name:e[1],path:e[2].page_path}));
    });
    assert.deepEqual(spa,[{name:'conversion_event_contact',path:'/about'},{name:'click_phone',path:'/about'}]);
    assert.deepEqual(errors,[],'Browser runtime errors');
    await context.close();
  }
  fs.writeFileSync(`audit/${label}-verification.json`,JSON.stringify(results,null,2));
  console.log(JSON.stringify({pages:routes.length,viewports:2,links:results.reduce((n,r)=>n+r.links,0),results},null,2));
} finally {await browser.close();}
