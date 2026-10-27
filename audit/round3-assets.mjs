import fs from 'node:fs';import assert from 'node:assert/strict';import crypto from 'node:crypto';
import {chromium}from './tools/node_modules/playwright/index.mjs';
const[base,label,mode='after']=process.argv.slice(2);const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
try{const context=await browser.newContext({javaScriptEnabled:false});const page=await context.newPage();await page.goto(base);
const urls=await page.locator('script[src^="/_next/"],link[rel="stylesheet"]').evaluateAll(nodes=>nodes.map(n=>n.src||n.href));const assets=[];
for(const url of urls){const r=await context.request.get(url);assert.equal(r.status(),200);const body=await r.body();const text=body.toString();const motion=url.includes('.js')&&text.includes('startViewTransition')&&text.includes('route-transition');const css=url.includes('.css')&&text.includes('page-depth-out');if(!motion&&!css)continue;const path='.next'+new URL(url).pathname.replace('/_next','');const local=fs.existsSync(path)?fs.readFileSync(path):null;const match=!!local&&body.equals(local);
if(mode==='after')assert.ok(match,'Production asset differs from accepted build: '+url);
if(css)assert.ok(text.includes(mode==='before'?'rotateY(-1.5deg)':'rotateY(12deg)'));
if(motion)assert.ok(text.includes(mode==='before'?'rotateY(-2.5deg)':'rotateY(-10deg)'));
assets.push({url,kind:motion?'motion-js':'motion-css',sha256:crypto.createHash('sha256').update(body).digest('hex'),bytes:body.length,matchesLocalBuild:match});}
assert.ok(assets.some(a=>a.kind==='motion-js')&&assets.some(a=>a.kind==='motion-css'));fs.writeFileSync(`audit/${label}-assets.json`,JSON.stringify({base,mode,assets},null,2));console.log(JSON.stringify({mode,assets,passed:true}));}finally{await browser.close();}
