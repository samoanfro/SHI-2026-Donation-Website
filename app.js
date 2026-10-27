import config from './config.js';
import { donationReady, publicSiteUrl, analyticsReady, sharingReady } from './rules.js';
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
const money = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
document.querySelector('#goal').textContent = money(config.goal);
document.querySelector('.budget-total span:last-child').textContent = `100% · ${money(config.goal)}`;
document.querySelectorAll('.budget-bar span').forEach((bar, i) => { bar.style.width = `${config.budget[i].percent}%`; });
const budget = document.querySelector('#budget');
budget.replaceChildren(...config.budget.map(item => {
  const row = document.createElement('div'); row.className = 'budget-row';
  const description = document.createElement('div');
  const title = document.createElement('h3'); title.textContent = item.name;
  const text = document.createElement('p'); text.textContent = item.description;
  description.append(title, text);
  const percent = document.createElement('span'); percent.textContent = `${item.percent}%`;
  const amount = document.createElement('strong'); amount.textContent = money(item.amount);
  row.append(description, percent, amount); return row;
}));
const monthly = document.querySelector('input[value="monthly"]');
const checkout = document.querySelector('#checkout');
if (donationReady(config)) {
  checkout.href = config.paypal.url;
  checkout.removeAttribute('aria-disabled'); checkout.removeAttribute('tabindex');
  checkout.textContent = 'Continue to PayPal ↗';
  document.querySelector('#donation-status').textContent = 'Choose your amount on the official PayPal donation page.';
  document.querySelector('#checkout-note').textContent = 'You will leave this website to donate securely through PayPal.';
  if (config.paypal.supportsMonthly) { monthly.disabled = false; document.querySelector('#monthly-note').textContent = 'Select on PayPal'; }
  document.querySelector('.preview-bar').textContent = '2026 CAMPAIGN · CONNECTION CHANGES EVERYTHING';
  document.querySelector('.footer-bottom span:last-child').textContent = '2026 donation campaign';
}
document.querySelectorAll('input[name="frequency"]').forEach(input => input.addEventListener('change', () => {
  document.querySelector('#donation-status').textContent = monthly.checked ? 'On PayPal, choose the monthly option before confirming your gift. Your frequency selection is completed there.' : 'Choose your one-time gift amount on the official PayPal donation page.';
}));
const siteUrl = sharingReady(config) ? publicSiteUrl(config.siteUrl) : '';
const shareStatus = document.querySelector('#share-status');
const shareText = 'Connection changes everything. Reach out, connect, and invite three friends to do the same. Giving is optional.';
if (siteUrl) { const email = document.querySelector('#email-share'); email.hidden = false; email.href = `mailto:?subject=${encodeURIComponent('Take the Connection Challenge')}&body=${encodeURIComponent(shareText + '\n\n' + siteUrl + '#challenge')}`; }
document.querySelector('#share').addEventListener('click', async () => {
  if (!siteUrl) { shareStatus.textContent = 'Campaign sharing will be available when the campaign website is live. You can still reach out to someone today.'; return; }
  const url = siteUrl + '#challenge';
  try {
    if (navigator.share) { await navigator.share({ title: config.campaign, text: shareText, url }); shareStatus.textContent = 'Thank you for passing it on.'; }
    else if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(shareText + '\n' + url); shareStatus.textContent = 'Challenge invitation copied. Paste it into a message to your friends.'; }
    else { shareStatus.textContent = `Copy this campaign link: ${url}`; }
  } catch (error) { if (error.name !== 'AbortError') shareStatus.textContent = `Share this campaign link: ${url}`; }
});
if (config.contactEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.contactEmail)) {
  const link = document.createElement('a'); link.href = 'mailto:' + config.contactEmail; link.textContent = config.contactEmail; document.querySelector('#contact').replaceChildren(link);
}
const channels = config.officialChannels.filter(item => publicSiteUrl(item.url));
if (channels.length) { document.querySelector('#official-channels').replaceChildren(...channels.map(item => { const p = document.createElement('p'); const a = document.createElement('a'); a.href = item.url; a.textContent = item.label; a.rel = 'noopener noreferrer'; p.append(a); return p; })); }
if (config.legal.disclosure) document.querySelector('#legal-disclosure').textContent = config.legal.disclosure;
if (config.legal.privacyContact) document.querySelector('#privacy-contact').textContent = config.legal.privacyContact;
if (analyticsReady(config)) {
  document.querySelector('#privacy > p').textContent = 'This website has no forms, donor database, or payment processing. Configured analytics are described below. Sharing opens your chosen service only when you choose a share action. PayPal processes donations on its own website under its own privacy terms. The hosting provider may process basic server logs.';
  document.querySelector('#analytics-disclosure').textContent = config.analytics.privacyDisclosure;
  const script = document.createElement('script'); script.defer = true; script.src = config.analytics.scriptUrl; script.dataset.domain = config.analytics.domain; document.head.append(script);
}
