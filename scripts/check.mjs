import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import config from '../config.js';
import { donationReady, analyticsReady, sharingReady } from '../rules.js';
assert.equal(config.budget.reduce((s, r) => s + r.amount, 0), 250000);
assert.equal(config.budget.reduce((s, r) => s + r.percent, 0), 100);
assert.equal(donationReady(config), false, 'Checked-in preview must not accept donations');
const fixture = structuredClone(config); fixture.paypal.accountVerified = true; fixture.paypal.activationApproved = true;
for (const url of ['', 'https://www.paypal.com.evil.test/donate/', 'http://www.paypal.com/donate/', 'https://evil.test/', 'https://www.paypal.com/signin', 'https://www.paypal.com/donate/buttons/TEST/edit', 'https://www.paypal.com/donate/buttons/manage', 'https://name:secret@www.paypal.com/donate/']) { fixture.paypal.url = url; assert.equal(donationReady(fixture), false); }
fixture.paypal.url = 'https://www.paypal.com/donate/?hosted_button_id=TEST_ONLY'; assert.equal(donationReady(fixture), true);
fixture.paypal.activationApproved = false; assert.equal(donationReady(fixture), false);
assert.equal(analyticsReady(config), false);
const html = await readFile('dist/index.html', 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]); assert.equal(ids.length, new Set(ids).size);
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]), 'Missing anchor ' + match[1]);
for (const section of ['home', 'why', 'story', 'funds', 'challenge', 'donate', 'privacy']) assert.ok(ids.includes(section));
assert.match(html, /id="checkout"[^>]*aria-disabled="true"/);
assert.match(html, /noindex,nofollow/);
for (const match of html.matchAll(/(?:src|href)="((?:assets\/|styles\.css|app\.js)[^"]*)"/g)) await access('dist/' + match[1]);
console.log('PASS: budget, section anchors, assets, safe preview, PayPal URL and approval guards, analytics off.');

assert.equal(sharingReady(config), false, 'An approved domain alone must not enable sharing');
assert.equal(sharingReady({...config, siteLive: true}), true);
assert.match(html, /https:\/\/give\.socialhealthmarketplace\.com\/assets\/social-preview\.png/);
