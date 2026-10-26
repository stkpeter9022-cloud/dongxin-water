import fs from 'node:fs';
import assert from 'node:assert/strict';
import { chromium } from './tools/node_modules/playwright/index.mjs';

const [base, label, mode = 'after'] = process.argv.slice(2);
fs.mkdirSync('audit/round2-media', { recursive: true });
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const instrument = () => {
  window.motionLog = [];
  window.interactionSamples = [];
  new PerformanceObserver(list => { for (const entry of list.getEntries()) if (entry.interactionId) window.interactionSamples.push({ name: entry.name, duration: entry.duration, interactionId: entry.interactionId }); }).observe({ type: 'event', buffered: true, durationThreshold: 16 });
  const original = Element.prototype.animate;
  Element.prototype.animate = function(frames, options) {
    window.motionLog.push({ kind: 'element', target: this.className || this.id || this.tagName, frames, options });
    return original.call(this, frames, options);
  };
  if (document.startViewTransition) {
    const start = document.startViewTransition.bind(document);
    document.startViewTransition = (...args) => {
      const transition = start(...args);
      transition.ready.then(() => {
        window.motionLog.push({ kind: 'native', animations: document.getAnimations().map(a => ({ name: a.animationName, duration: a.effect.getTiming().duration, frames: a.effect.getKeyframes() })) });
        if (window.freezeNextTransition) {
          window.freezeNextTransition = false;
          document.getAnimations().filter(a => a.animationName?.startsWith('page-depth')).forEach(a => { a.pause(); a.currentTime = 120; });
          window.transitionFrozen = true;
        }
      }).catch(e => window.motionLog.push({ kind: 'transition-rejected', error: e.name }));
      return transition;
    };
  }
};
const results = [];
try {
  for (const mobile of [false, true]) {
    const viewport = mobile ? { width: 390, height: 844 } : { width: 1280, height: 900 };
    const context = await browser.newContext({ viewport, isMobile: mobile, hasTouch: mobile, recordVideo: { dir: 'audit/round2-media', size: viewport } });
    await context.route(/googletagmanager|google-analytics|googleadservices|doubleclick/, r => r.abort());
    await context.addInitScript(instrument);
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(base);
    await page.waitForTimeout(600);
    await page.screenshot({ path: `audit/round2-media/${label}-${mobile ? 'mobile' : 'desktop'}-home.png` });
    for (let i = 0; i < 6; i++) { await page.mouse.wheel(0, 420); await page.waitForTimeout(550); }
    const reveal = await page.evaluate(() => window.motionLog.filter(e => e.kind === 'element'));
    await page.goto(base);
    await page.waitForTimeout(400);
    const repair = page.locator('.service-card[href="/tiao-dian"]');
    await repair.scrollIntoViewIfNeeded();
    await page.waitForTimeout(550);
    await repair.click();
    await page.waitForURL('**/tiao-dian');
    await page.waitForTimeout(650);
    const paths = ['/tiao-dian'];
    const nav = async (path) => {
      if (mobile) {
        await page.getByRole('button', { name: '開啟選單' }).click();
        await page.locator(`#mobile-navigation a[href="${path}"]`).click();
      } else await page.locator(`header a[href="${path}"]`).first().click();
      await page.waitForURL(base + path);
      await page.waitForTimeout(650);
      paths.push(path);
    };
    await nav('/shui-dian-gong-cheng');
    await nav('/about');
    await nav('/');
    await page.goBack(); await page.waitForURL('**/about'); await page.waitForTimeout(450);
    await page.goForward(); await page.waitForURL(base + '/'); await page.waitForTimeout(450);
    const { log, interactionSamples } = await page.evaluate(() => ({ log: window.motionLog, interactionSamples: window.interactionSamples }));
    if (mode === 'after') {
      assert.ok(reveal.length > 5, 'No scroll reveal ' + mobile);
      assert.ok(log.filter(e => e.kind === 'native').length >= 4, 'No native page transition ' + mobile);
      assert.ok(log.some(e => e.kind === 'native' && e.animations.some(a => a.name === 'page-depth-in')));
      await page.evaluate(() => { window.freezeNextTransition = true; });
      if (mobile) await page.getByRole('button', { name: '開啟選單' }).click();
      await page.locator(mobile ? '#mobile-navigation a[href="/shui-dian-gong-cheng"]' : 'header a[href="/shui-dian-gong-cheng"]').first().click();
      await page.waitForFunction(() => window.transitionFrozen);
      const contact = await page.evaluate(() => {
        const link = document.querySelector('.contact-dock a[href^="tel:"]');
        const rect = link.getBoundingClientRect();
        const hit = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2)?.closest('a');
        let prevented;
        document.addEventListener('click', event => { prevented = event.defaultPrevented; event.preventDefault(); }, { once: true });
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
        return { hit: hit === link, prevented };
      });
      assert.deepEqual(contact, { hit: true, prevented: false }, 'Transition blocks phone contact');
      await page.screenshot({ path: `audit/round2-media/${label}-${mobile ? 'mobile' : 'desktop'}-transition-120ms.png` });
      await page.evaluate(() => document.getAnimations().forEach(a => { if (a.playState === 'paused') a.play(); }));
      await page.waitForTimeout(500);
      await page.evaluate(() => { document.querySelector('header a[href="/"]').click(); document.querySelector('footer a[href="/about"]').click(); });
      await page.waitForURL(base + '/about');
      await page.waitForTimeout(1200);
      assert.equal(await page.locator('html').evaluate(e => e.classList.contains('route-transition')), false, 'Rapid navigation left a snapshot');
    }
    assert.deepEqual(errors, []);
    const video = page.video();
    await context.close();
    await video.saveAs(`audit/round2-media/${label}-${mobile ? 'mobile' : 'desktop'}.webm`);
    results.push({ mobile, revealCount: reveal.length, paths, log, interactionSamples, phoneDuringTransition: mode === 'after', rapidNavigation: mode === 'after', errors });
  }
  if (mode === 'after') {
    for (const option of ['reduce', 'fallback', 'save-data']) {
      const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: option === 'reduce' ? 'reduce' : 'no-preference' });
      await context.route(/googletagmanager/, r => r.abort());
      await context.addInitScript(instrument);
      if (option === 'fallback') await context.addInitScript(() => { document.startViewTransition = undefined; });
      if (option === 'save-data') await context.addInitScript(() => { Object.defineProperty(navigator, 'connection', { value: { saveData: true } }); });
      const page = await context.newPage();
      await page.goto(base);
      await page.waitForTimeout(400);
      await page.getByRole('button', { name: '開啟選單' }).click();
      await page.locator('#mobile-navigation a[href="/projects"]').click();
      await page.waitForURL('**/projects');
      await page.waitForTimeout(500);
      const log = await page.evaluate(() => window.motionLog);
      assert.equal(log.filter(e => e.kind === 'native').length, 0);
      if (option !== 'fallback') assert.equal(log.length, 0);
      else assert.ok(log.some(e => e.target === 'main-content' || e.target === 'content-page'));
      assert.equal(await page.locator('main').evaluate(e => getComputedStyle(e).transform), 'none');
      await context.close();
      results.push({ option, passed: true });
    }
  }
  fs.writeFileSync(`audit/${label}-motion.json`, JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results.map(({ mobile, revealCount, paths, option, passed }) => ({ mobile, revealCount, paths, option, passed }))));
} finally { await browser.close(); }
