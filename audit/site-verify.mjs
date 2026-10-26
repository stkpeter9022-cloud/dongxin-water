import fs from 'node:fs';
import assert from 'node:assert/strict';
import {chromium} from './tools/node_modules/playwright/index.mjs';
import {authorizeContext} from './preview-auth.mjs';
const [label,base]=process.argv.slice(2);
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
try {
  const results=[];
  const contexts=[];
  for(const width of [320,360,390,430,1440]) {
    const context=await browser.newContext({viewport:{width,height:844}});contexts.push(context);
    await authorizeContext(context,base);
    await context.route(/googletagmanager/,r=>r.abort());
    const page=await context.newPage();
    for(const route of ['/','/shi-nei-pei-xian','/shui-dian-gong-cheng','/gei-pai-shui','/projects']) {
      const response=await page.goto(base+route,{waitUntil:'networkidle'});
      assert.equal(response.status(),200);
      const check=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,h1:document.querySelectorAll('h1').length,title:document.title,canonical:document.querySelector('link[rel="canonical"]')?.href,robots:document.querySelector('meta[name="robots"]')?.content,headerImages:document.querySelectorAll('header img').length,footerImages:document.querySelectorAll('footer img').length,mainId:!!document.getElementById('main-content'),badImages:[...document.querySelectorAll('img')].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src),schemas:[...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(s=>{const x=JSON.parse(s.textContent);return x['@graph']||[x];}),text:document.querySelector('main').textContent}));
      assert.equal(check.overflow,false,route+' overflow '+width);
      assert.equal(check.h1,1);
      assert.ok(!check.title.includes('棟鑫水電｜棟鑫水電'));
      assert.equal(check.canonical,'https://www.dongxin24.com'+(route==='/'?'/':route));
      assert.ok(!check.robots.includes('noindex'));
      assert.equal(check.headerImages,1);assert.equal(check.footerImages,1);assert.equal(check.mainId,true);
      assert.deepEqual(check.badImages,[]);
      assert.equal(check.schemas.filter(s=>s['@id']==='https://www.dongxin24.com/#business').length,1);
      for(const s of check.schemas.filter(s=>s.logo))assert.equal(s.logo,'https://www.dongxin24.com/icon.png');
      if(route!=='/')assert.equal(check.schemas.filter(s=>s['@type']==='BreadcrumbList').length,1);
      assert.ok(!/Google\s*客戶評價|★★★★★/.test(check.text));
      assert.ok(!check.text.includes('???'),route+' contains corrupted text');
      if(route==='/projects' && width===390) {
        for(const img of await page.locator('.project-card img').all()) {
          await img.scrollIntoViewIfNeeded();
          await img.evaluate(i=>i.decode());
          assert.ok(await img.evaluate(i=>i.complete&&i.naturalWidth>0));
        }
      }
      if(route==='/') {
        const geometry=await page.evaluate(()=>({heroBottom:document.querySelector('.home-hero').getBoundingClientRect().bottom,contactBottom:document.querySelector('.home-hero .contact-actions').getBoundingClientRect().bottom,repairColumns:getComputedStyle(document.querySelector('.service-grid')).gridTemplateColumns.split(' ').length,projectCount:document.querySelectorAll('#gallery article').length,smallParagraphs:[...document.querySelectorAll('main p')].filter(p=>parseFloat(getComputedStyle(p).fontSize)<16).length}));
        if(width<768){assert.ok(geometry.heroBottom<780,'Hero hides following entry');assert.ok(geometry.contactBottom<780);assert.equal(geometry.repairColumns,2);}
        assert.equal(geometry.projectCount,3);assert.equal(geometry.smallParagraphs,0);
        for(const id of ['services','engineering','gallery','areas','faq']) {
          await page.evaluate(id=>{document.documentElement.style.scrollBehavior='auto';location.hash=id;},id);
          await page.waitForFunction(id=>{const top=document.getElementById(id).getBoundingClientRect().top;return top>=72&&top<=100;},id).catch(async error=>{console.log(JSON.stringify({width,id,geometry:await page.evaluate(id=>({top:document.getElementById(id).getBoundingClientRect().top,scrollY,max:document.documentElement.scrollHeight-innerHeight}),id)}));throw error;});
        }
        const faqs=page.locator('#faq details');
        await faqs.nth(1).locator('summary').focus();await page.keyboard.press('Enter');
        assert.equal(await page.locator('#faq details[open]').count(),1);
        assert.equal(await faqs.nth(1).getAttribute('open'),'');
        await faqs.nth(2).locator('summary').click();assert.equal(await faqs.nth(2).getAttribute('open'),'');
        if(width<768) {
          const button=page.locator('.mobile-menu-button');await button.click();
          assert.equal(await button.getAttribute('aria-expanded'),'true');
          await page.locator('#mobile-navigation a').first().focus();await page.keyboard.press('Escape');
          assert.equal(await page.locator('#mobile-navigation').count(),0);
          assert.equal(await button.evaluate(e=>document.activeElement===e),true);
        }
        await page.evaluate(()=>{document.documentElement.style.scrollBehavior='auto';scrollTo(0,document.documentElement.scrollHeight);});
        const bottom=await page.evaluate(()=>({footerBottom:document.querySelector('footer').getBoundingClientRect().bottom,dockTop:document.querySelector('.contact-dock').getBoundingClientRect().top}));
        assert.ok(bottom.footerBottom<=bottom.dockTop+1,'Contact dock covers footer');
      }
      results.push({width,route,passed:true});
    }
  }
  const context=contexts[0];
  const page=await context.newPage();
  const routes=['/',...fs.readdirSync('app',{withFileTypes:true}).filter(d=>d.isDirectory()&&fs.existsSync(`app/${d.name}/page.tsx`)).map(d=>'/'+d.name)];
  const targets=new Set();
  for(const route of routes){await page.goto(base+route,{waitUntil:'networkidle'});const hrefs=await page.locator('a[href]').evaluateAll(as=>as.map(a=>a.getAttribute('href')).filter(h=>h.startsWith('/')));hrefs.forEach(h=>targets.add(h));}
  for(const target of targets){const u=new URL(target,base);const response=await context.request.get(u.href);assert.equal(response.status(),200,'Broken internal URL '+target);if(u.hash){await page.goto(u.href,{waitUntil:'domcontentloaded'});assert.equal(await page.locator('[id='+JSON.stringify(decodeURIComponent(u.hash.slice(1)))+']').count(),1,'Missing anchor '+target);}}
  for(const path of ['/robots.txt','/sitemap.xml'])assert.equal((await context.request.get(base+path)).status(),200);
  const sitemap=await (await context.request.get(base+'/sitemap.xml')).text();for(const route of routes)assert.ok(sitemap.includes('https://www.dongxin24.com'+(route==='/'?'':route)));
  const original=await context.request.get(base+'/case8.jpg',{maxRedirects:0});assert.equal(original.status(),301);assert.ok(original.headers().location.startsWith('/projects'));
  const optimized=await context.request.get(base+'/_next/image?url=%2Fcase8.jpg&w=640&q=75',{maxRedirects:0});assert.ok([301,400].includes(optimized.status()),'Private image optimizer must redirect or reject');if(optimized.status()===301)assert.ok(optimized.headers().location.startsWith('/projects'));else {assert.ok(!(optimized.headers()['content-type']||'').startsWith('image/'),'Private image data returned');assert.match(await optimized.text(),/image|resource|url/i);}
  const staticContext=await browser.newContext({viewport:{width:390,height:844},javaScriptEnabled:false});await authorizeContext(staticContext,base);const staticPage=await staticContext.newPage();await staticPage.goto(base);await staticPage.locator('#faq details').nth(1).locator('summary').click();assert.equal(await staticPage.locator('#faq details[open]').count(),1);assert.ok(await staticPage.locator('#engineering a[href="/gei-pai-shui"]').count());
  fs.writeFileSync(`audit/${label}-site-verification.json`,JSON.stringify({results,internalTargets:[...targets],faqWithoutJs:true,privacyRedirects:true},null,2));
  console.log(JSON.stringify({checks:results.length,internalTargets:targets.size,faqWithoutJs:true,privacyRedirects:true,passed:true}));
} finally {await browser.close();}
