import { mkdir, copyFile, readFile, writeFile, cp, rm } from 'node:fs/promises';
import config from '../config.js';
import { publicSiteUrl } from '../rules.js';
if (config.budget.reduce((sum, row) => sum + row.percent, 0) !== 100 || config.budget.reduce((sum, row) => sum + row.amount, 0) !== config.goal || config.budget.some(row => row.amount !== config.goal * row.percent / 100)) throw new Error('Budget allocation must match goal and total 100%.');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const siteUrl = publicSiteUrl(config.siteUrl);
if (config.launchApproved && !siteUrl) throw new Error('An approved HTTPS siteUrl is required for launch.');
await rm('dist', { recursive: true, force: true }); await mkdir('dist', { recursive: true });
let html = await readFile('index.html', 'utf8');
if (siteUrl) {
  const image = new URL('assets/social-preview.png', siteUrl).href;
  html = html.replace('</head>', `<link rel="canonical" href="${escape(siteUrl)}"><meta property="og:url" content="${escape(siteUrl)}"><meta property="og:image" content="${escape(image)}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Connection Changes Everything — Social Health Initiative"><meta name="twitter:image" content="${escape(image)}"></head>`);
}
if (config.launchApproved) html = html.replace('noindex,nofollow', 'index,follow');
await writeFile('dist/index.html', html);
for (const file of ['styles.css', 'app.js', 'config.js', 'rules.js']) await copyFile(file, 'dist/' + file);
await cp('assets', 'dist/assets', { recursive: true });
await writeFile('dist/robots.txt', config.launchApproved ? `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', siteUrl).href}\n` : 'User-agent: *\nDisallow: /\n');
if (config.launchApproved) await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(siteUrl)}</loc></url></urlset>`);
console.log('Built static website in dist/. Donation activation and deployment remain owner-controlled.');
