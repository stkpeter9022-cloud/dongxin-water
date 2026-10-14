import fs from 'node:fs';
import assert from 'node:assert/strict';
import lighthouse from './tools/node_modules/lighthouse/core/index.js';
import { chromium } from './tools/node_modules/playwright/index.mjs';
import puppeteer from './tools/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
import { authorizeContext } from './preview-auth.mjs';

const [label,url,countText='1']=process.argv.slice(2);
const count=Number(countText);
assert.ok(label&&url&&Number.isInteger(count)&&count>0);
const runs=[];
for(let i=0;i<count;i++) {
  const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--remote-debugging-port=9222']});
  try {
    const auth=await browser.newContext();
    await authorizeContext(auth,url);
    const cookies=await auth.cookies(new URL(url).origin);
    await auth.close();
    const pp=await puppeteer.connect({browserURL:'http://localhost:9222'});
    if(cookies.length) await pp.setCookie(...cookies.map(c=>{const cookie={...c};if(cookie.expires===-1)delete cookie.expires;return cookie;}));
    await pp.disconnect();
    const result=await lighthouse(url,{port:9222,output:['json','html'],onlyCategories:['performance'],logLevel:'error',throttlingMethod:process.argv.includes('--simulate')?'simulate':'devtools',maxWaitForLoad:90000,maxWaitForFcp:60000,disableFullPageScreenshot:!process.argv.includes('--full-screenshot')});
    const r=result.lhr,a=r.audits;
    const name=`${label}-${i+1}`;
    fs.writeFileSync(`audit/${name}.json`,result.report[0]);
    fs.writeFileSync(`audit/${name}.html`,result.report[1]);
    if(i===0&&result.artifacts.Trace) fs.writeFileSync(`audit/${name}-trace.json`,JSON.stringify(result.artifacts.Trace));
    const metrics={score:r.categories.performance.score===null?null:Math.round(r.categories.performance.score*100),lcp:a['largest-contentful-paint'].numericValue,cls:a['cumulative-layout-shift'].numericValue,tbt:a['total-blocking-time'].numericValue,benchmark:r.environment.benchmarkIndex,main:a['mainthread-work-breakdown'].numericValue,js:a['bootup-time'].numericValue};
    const warnings=r.runWarnings||[];
    const valid=new URL(r.finalDisplayedUrl).origin===new URL(url).origin&&!r.runtimeError&&warnings.length===0&&['score','lcp','cls','tbt'].every(k=>Number.isFinite(metrics[k]));
    const run={name,valid,...metrics,warnings,errors:Object.values(a).filter(x=>x.scoreDisplayMode==='error').map(x=>({id:x.id,error:x.errorMessage}))};
    runs.push(run);
    console.log(JSON.stringify(run));
    fs.writeFileSync(`audit/${label}-summary.json`,JSON.stringify({url,settings:r.configSettings,runs},null,2));
    if(!valid) throw Error('Invalid measurement retained; not counted toward the requested three valid runs');
  } finally {await browser.close();}
}
const median=key=>{const values=runs.map(r=>r[key]).sort((a,b)=>a-b);return values[Math.floor(values.length/2)];};
console.log(JSON.stringify({label,count,median:Object.fromEntries(['score','lcp','cls','tbt','benchmark','main','js'].map(k=>[k,median(k)]))}));
