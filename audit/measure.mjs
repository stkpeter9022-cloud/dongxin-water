import fs from 'node:fs';
import lighthouse from './tools/node_modules/lighthouse/core/index.js';
import { chromium } from './tools/node_modules/playwright/index.mjs';

const [label = 'baseline', url = 'http://localhost:3000/'] = process.argv.slice(2);
const browser = await chromium.launch({executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--remote-debugging-port=9222']});
try {
  const result = await lighthouse(url, {port: 9222, output: ['json', 'html'], onlyCategories: ['performance'], logLevel: 'error', ...(process.argv.includes('--devtools') ? {throttlingMethod:'devtools'} : {})});
  fs.writeFileSync(`audit/${label}.json`, result.report[0]);
  fs.writeFileSync(`audit/${label}.html`, result.report[1]);
  const a = result.lhr.audits;
  console.log(JSON.stringify({label, url, score: result.lhr.categories.performance.score * 100, metrics: Object.fromEntries(['first-contentful-paint','largest-contentful-paint','cumulative-layout-shift','total-blocking-time','speed-index','bootup-time','mainthread-work-breakdown'].map(k => [k, a[k]?.displayValue])), lcp: a['lcp-breakdown-insight']?.details, shifts: a['cls-culprits-insight']?.details, scripts: a['bootup-time']?.details}, null, 2));
} finally { await browser.close(); }
