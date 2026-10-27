import fs from 'node:fs';
import assert from 'node:assert/strict';
import { chromium } from './tools/node_modules/playwright/index.mjs';

const [base, label] = process.argv.slice(2);
const routes = ['/', ...fs.readdirSync('app', { withFileTypes: true }).filter(d => d.isDirectory() && fs.existsSync(`app/${d.name}/page.tsx`)).map(d => '/' + d.name), ...['power-and-outlets','leaks-and-water-pressure','toilet-and-drains','renovation-wiring'].map(slug => '/knowledge/' + slug)];
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
try {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  const results = [];
  const targets = new Set();
  let motionChunk;
  for (const route of routes) {
    const response = await page.goto(base + route);
    assert.equal(response.status(),200,route);
    const scripts = await page.locator('script[src^="/_next/"]').evaluateAll(nodes=>nodes.map(node=>node.getAttribute('src')));
    if(route==='/')for(const src of scripts){const body=await(await context.request.get(base+src)).text();if(body.includes('route-transition')&&body.includes('startViewTransition'))motionChunk=src;}
    assert.ok(motionChunk && scripts.includes(motionChunk),route+' missing the latest shared motion bundle');
    const data = await page.evaluate(() => ({ title: document.title, description: document.querySelector('meta[name="description"]')?.content, canonical: document.querySelector('link[rel="canonical"]')?.href, robots: document.querySelector('meta[name="robots"]')?.content, h1: [...document.querySelectorAll('h1')].map(h => h.textContent), text: document.querySelector('main')?.innerText, overflow: document.documentElement.scrollWidth > innerWidth, schemas: [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(s => {const x=JSON.parse(s.textContent);return x['@graph'] || [x];}), links: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')) }));
    assert.equal(data.h1.length,1,route);
    assert.ok(data.description);
    assert.ok(!data.robots.includes('noindex'));
    assert.equal(data.canonical,'https://www.dongxin24.com'+(route==='/'?'/':route));
    assert.equal(data.overflow,false,route);
    assert.ok(data.text.length > 200);
    if (route === '/') assert.equal(data.title,'台北新北24小時水電行｜水電維修・水電工程｜棟鑫水電');
    if(route!=='/')assert.equal(data.schemas.filter(s=>s['@type']==='BreadcrumbList').length,1);
    assert.ok(data.schemas.some(s=>s['@id']==='https://www.dongxin24.com/#business'&&s.name==='棟鑫水電工程行'));
    for(const link of data.links.filter(h=>h.startsWith('/'))) targets.add(link);
    for(const link of data.links.filter(h=>h.startsWith('#')&&h.length>1)) assert.equal(await page.locator('[id='+JSON.stringify(decodeURIComponent(link.slice(1)))+']').count(),1,route+' missing anchor '+link);
    if(route==='/projects') {
      const collection=data.schemas.find(s=>s['@type']==='CollectionPage');
      assert.equal(collection?.mainEntity?.itemListElement?.length,8);
      assert.equal(await page.locator('.project-index a').count(),8);
      await page.locator('.project-index summary').click();
      await page.evaluate(()=>{document.documentElement.style.scrollBehavior='auto';});
      await page.locator('.project-index a[href="#panel"]').click();
      await page.waitForFunction(()=>{const top=document.getElementById('panel').getBoundingClientRect().top;return top>=72&&top<=110;});
    }
    if(route==='/tiao-dian') {
      assert.ok(data.text.includes('先記下發生時間'));
      assert.ok(!data.text.includes('包含中和、板橋、永和、三重、新莊、新店'));
    }
    if(route.startsWith('/knowledge/')) {
      assert.ok(data.text.includes('聯絡前，準備這些資訊'));
      assert.ok(data.text.includes('依問題選擇服務'));
      assert.ok(data.links.some(h=>h.startsWith('tel:')));
      assert.ok(data.links.includes('https://line.me/ti/p/ezn_Ad6UpZ'));
    }
    results.push({route,title:data.title,description:data.description,canonical:data.canonical,h1:data.h1,textLength:data.text.length,status:response.status()});
    if(['/projects','/knowledge','/knowledge/power-and-outlets'].includes(route)) await page.screenshot({path:`audit/round2-media/${label}-${route.replaceAll('/','-')}-390.png`,fullPage:false});
  }
  assert.equal(new Set(results.map(r=>r.title)).size, routes.length);
  assert.equal(new Set(results.map(r=>r.description)).size, routes.length);
  for(const target of targets)assert.equal((await context.request.get(new URL(target,base).href)).status(),200,target);
  const sitemap=await (await context.request.get(base+'/sitemap.xml')).text();
  for(const route of routes)assert.ok(sitemap.includes('https://www.dongxin24.com'+(route==='/'?'':route)));
  assert.equal((await context.request.get(base+'/knowledge/not-a-guide')).status(),404);
  assert.equal((await context.request.get(base+'/missing-round2')).status(),404);
  // Tracking inline source must be byte-identical to the already-deployed baseline.
  const {execFileSync}=await import('node:child_process');
  const before=execFileSync('git',['show','d5cd719:app/layout.tsx'],{encoding:'utf8'});
  assert.equal(fs.readFileSync('app/layout.tsx','utf8'),before);
  fs.writeFileSync(`audit/${label}-seo.json`,JSON.stringify({results,motionChunk,internalTargets:[...targets],withoutJavaScript:true,trackingSourceUnchanged:true},null,2));
  console.log(JSON.stringify({pages:results.length,internalTargets:targets.size,withoutJavaScript:true,trackingSourceUnchanged:true,passed:true}));
} finally {await browser.close();}
