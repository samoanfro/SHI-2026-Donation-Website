export function publicSiteUrl(value) {
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password ? url.href : ''; } catch { return ''; }
}
export function donationReady(config) {
  if (!config.paypal.accountVerified || !config.paypal.activationApproved) return false;
  try { const url = new URL(config.paypal.url); return url.protocol === 'https:' && url.hostname === 'www.paypal.com' && !url.port && !url.username && !url.password && /^\/donate\/?$/.test(url.pathname); } catch { return false; }
}
export function analyticsReady(config) {
  return Boolean(config.analytics.enabled && publicSiteUrl(config.analytics.scriptUrl) && config.analytics.domain && config.analytics.privacyDisclosure);
}

export function sharingReady(config) { return Boolean(config.siteLive && publicSiteUrl(config.siteUrl)); }
