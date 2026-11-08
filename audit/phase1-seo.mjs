import fs from 'node:fs';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { chromium } from './tools/node_modules/playwright/index.mjs';

const base = process.argv[2] || 'http://localhost:3000';
const routes = ['/', ...fs.readdirSync('app', { withFileTypes: true }).filter(d => d.isDirectory() && fs.existsSync(`app/${d.name}/page.tsx`)).map(d => '/' + d.name), ...[...fs.readFileSync('app/lib/knowledge.ts', 'utf8').matchAll(/slug: "([^"]+)"/g)].map(m => '/knowledge/' + m[1])];
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
try {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  const results = [], targets = new Set();
  for (const route of routes) {
    const response = await page.goto(base + route);
    assert.equal(response.status(), 200, route);
    assert.ok(!/noindex/i.test(response.headers()['x-robots-tag'] || ''), route);
    const data = await page.evaluate(() => ({ title: document.title, description: document.querySelector('meta[name="description"]')?.content, canonicals: [...document.querySelectorAll('link[rel="canonical"]')].map(e => e.href), robots: document.querySelector('meta[name="robots"]')?.content, h1: document.querySelectorAll('h1').length, text: document.querySelector('main').innerText, links: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')), overflow: document.documentElement.scrollWidth > innerWidth }));
    assert.deepEqual(data.canonicals, ['https://www.dongxin24.com' + route]);
    assert.equal(data.h1, 1, route);
    assert.ok(data.description && !/noindex/.test(data.robots), route);
    assert.equal(data.overflow, false, route);
    for (const href of data.links.filter(h => h.startsWith('/') || h.startsWith('#'))) targets.add(new URL(href, base + route).href);
    if (['/zhua-lou', '/tiao-dian'].includes(route)) {
      assert.ok(data.text.includes('同意才施工'));
      assert.ok(data.links.includes('tel:0918808209'));
      assert.ok(data.links.includes('https://line.me/ti/p/ezn_Ad6UpZ'));
      assert.ok(await page.locator('.project-card img').count() > 0);
      await page.locator('#booking-title').scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({ path: `audit/phase1-${route.slice(1)}-mobile.png` });
    }
    if (route === '/zhua-lou') {
      assert.ok(data.text.includes('基本抓漏 3,000 元'));
      assert.ok(data.text.includes('額外儀器與拆木作由師傅現場評估另報'));
    }
    if (route === '/tiao-dian') assert.ok(data.text.includes('出工費依時段') && data.text.includes('材料工資另計') && data.text.includes('現場報價'));
    if (route === '/') assert.ok(data.text.includes('中和水電叫修') && data.title.includes('24小時水電'));
    results.push({ route, title: data.title, description: data.description, canonical: data.canonicals[0], status: response.status() });
  }
  assert.equal(new Set(results.map(r => r.title)).size, routes.length, 'duplicate titles');
  assert.equal(new Set(results.map(r => r.description)).size, routes.length, 'duplicate descriptions');
  for (const target of targets) {
    const url = new URL(target);
    assert.equal((await context.request.get(target)).status(), 200, target);
    if (url.hash) {
      await page.goto(target);
      assert.equal(await page.evaluate(id => document.querySelectorAll('[id]').length && [...document.querySelectorAll('[id]')].filter(e => e.id === id).length, decodeURIComponent(url.hash.slice(1))), 1, target);
    }
  }
  const sitemapResponse = await context.request.get(base + '/sitemap.xml');
  assert.equal(sitemapResponse.status(), 200);
  const xml = await sitemapResponse.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  assert.equal(urls.length, routes.length);
  assert.equal(new Set(urls).size, routes.length);
  for (const result of results) assert.ok(urls.some(url => url.replace(/\/$/, '') === result.canonical.replace(/\/$/, '')), result.route);
  const robots = await (await context.request.get(base + '/robots.txt')).text();
  assert.ok(robots.includes('Allow: /') && robots.includes('Sitemap: https://www.dongxin24.com/sitemap.xml'));
  assert.equal((await context.request.get(base + '/missing-phase1')).status(), 404);
  assert.equal(fs.readFileSync('app/layout.tsx', 'utf8'), execFileSync('git', ['show', 'HEAD:app/layout.tsx'], { encoding: 'utf8' }), 'tracking source changed');
  fs.writeFileSync('audit/phase1-seo-results.json', JSON.stringify({ results, internalTargets: targets.size, sitemap: urls, robots, trackingSourceUnchanged: true }, null, 2));
  console.log(JSON.stringify({ pages: results.length, internalTargets: targets.size, uniqueTitles: true, canonicalAndSitemap: true, trackingSourceUnchanged: true, passed: true }));
} finally { await browser.close(); }
