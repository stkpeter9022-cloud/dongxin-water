import fs from 'node:fs';
import {chromium} from './tools/node_modules/playwright/index.mjs';
import {authorizeContext} from './preview-auth.mjs';
const [label,base]=process.argv.slice(2);
const routes=['/',...fs.readdirSync('app',{withFileTypes:true}).filter(d=>d.isDirectory()&&fs.existsSync(`app/${d.name}/page.tsx`)).map(d=>'/'+d.name)];
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
try{const context=await browser.newContext({viewport:{width:390,height:844}});await authorizeContext(context,base);await context.route(/googletagmanager/,r=>r.abort());const page=await context.newPage();const pages=[];
for(const route of routes){const response=await page.goto(base+route,{waitUntil:'networkidle'});const data=await page.evaluate(()=>({title:document.title,description:document.querySelector('meta[name="description"]')?.content,canonical:document.querySelector('link[rel="canonical"]')?.href,robots:document.querySelector('meta[name="robots"]')?.content,h1:[...document.querySelectorAll('h1')].map(e=>e.textContent),headings:[...document.querySelectorAll('h2,h3')].map(e=>e.textContent),text:document.querySelector('main')?.textContent,schemas:[...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>JSON.parse(s.textContent)),links:[...document.querySelectorAll('a')].map(a=>a.getAttribute('href'))}));pages.push({route,status:response.status(),...data});
if(['/','/tiao-dian','/shi-nei-pei-xian','/about','/contact'].includes(route))await page.screenshot({path:`audit/${label}-${route.replaceAll('/','')||'home'}-390.png`});}
fs.writeFileSync(`audit/${label}-inventory.json`,JSON.stringify(pages,null,2));console.log(JSON.stringify(pages.map(({route,status,title})=>({route,status,title}))));}finally{await browser.close();}
