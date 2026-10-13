import fs from 'node:fs';

const accessFile='audit/tools/preview-access-20261014.json';
export async function authorizeContext(context,baseUrl) {
  if(!fs.existsSync(accessFile)) return;
  const {shareUrl}=JSON.parse(fs.readFileSync(accessFile,'utf8').replace(/^\uFEFF/,''));
  if(new URL(shareUrl).origin!==new URL(baseUrl).origin) return;
  // The API request sets deployment cookies without running analytics on the secret URL.
  const response=await context.request.get(shareUrl);
  if(new URL(response.url()).origin!==new URL(baseUrl).origin || !(await response.text()).includes('G-KQMV13X0NC')) {
    throw Error('Preview share authorization failed; access URL omitted from diagnostics');
  }
}
