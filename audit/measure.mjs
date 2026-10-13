import fs from 'node:fs';
import lighthouse from './tools/node_modules/lighthouse/core/index.js';
import { chromium } from './tools/node_modules/playwright/index.mjs';
import puppeteer from './tools/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
import { authorizeContext } from './preview-auth.mjs';

const [label = 'baseline', url = 'http://localhost:3000/'] = process.argv.slice(2);
const browser = await chromium.launch({executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--remote-debugging-port=9222']});
try {
  const authContext=await browser.newContext();
  await authorizeContext(authContext,url);
  const cookies=await authContext.cookies(new URL(url).origin);
  await authContext.close();
  const measurementBrowser=await puppeteer.connect({browserURL:'http://localhost:9222'});
  await measurementBrowser.setCookie(...cookies.map(c=>{
    const cookie={...c};
    if(cookie.expires===-1) delete cookie.expires;
    return cookie;
  }));
  await measurementBrowser.disconnect();
  const result = await lighthouse(url, {port: 9222, output: ['json', 'html'], onlyCategories: ['performance'], logLevel: 'error', ...(process.argv.includes('--devtools') ? {throttlingMethod:'devtools'} : {})});
  if(new URL(result.lhr.finalDisplayedUrl).origin!==new URL(url).origin) throw Error('Lighthouse did not measure the authorized Preview');
  fs.writeFileSync(`audit/${label}.json`, result.report[0]);
  fs.writeFileSync(`audit/${label}.html`, result.report[1]);
  const a = result.lhr.audits;
  console.log(JSON.stringify({label, url, score: result.lhr.categories.performance.score===null ? null : Math.round(result.lhr.categories.performance.score*100), warnings:result.lhr.runWarnings, metrics: Object.fromEntries(['first-contentful-paint','largest-contentful-paint','cumulative-layout-shift','total-blocking-time','speed-index','bootup-time','mainthread-work-breakdown'].map(k => [k, a[k]?.displayValue])), lcp: a['lcp-breakdown-insight']?.details, shifts: a['cls-culprits-insight']?.details, scripts: a['bootup-time']?.details}, null, 2));
} finally { await browser.close(); }
