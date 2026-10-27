// Public configuration only. Never put passwords, API secrets, or payment credentials here.
export default {
  campaign: 'Connection Changes Everything',
  proposedDomain: 'give.socialhealthmarketplace.com', // Approved by project owner on 2026-10-26; DNS/hosting not yet configured.
  domainApproved: true,
  siteUrl: 'https://give.socialhealthmarketplace.com/', // Owner-approved domain; hosting and DNS pending.
  siteLive: false, // Enable public sharing only after the deployed domain is verified.
  launchApproved: false, // Enables search indexing only after launch approval.
  paypal: {
    url: '', // Owner-verified official https://www.paypal.com/donate/... hosted link.
    accountVerified: false,
    activationApproved: false,
    supportsMonthly: false // Enable only after checking the actual hosted checkout.
  },
  goal: 250000,
  budget: [
    { name: 'Education and curriculum', percent: 35, amount: 87500, description: 'Proposed support for lessons and practical resources on listening, reaching out, and building relationships—giving people ways to practice social health.' },
    { name: 'School and community programs', percent: 25, amount: 62500, description: 'Proposed support for planning and delivering social health learning in schools and community spaces, where people can practice connection together.' },
    { name: 'Platform and certification', percent: 20, amount: 50000, description: 'Proposed support for an accessible learning platform and the development of a certification pathway for people bringing social health education to others.' },
    { name: 'Campaign outreach', percent: 10, amount: 25000, description: 'Proposed support for campaign materials and outreach that invite people to learn about social health, join the Connection Challenge, and support the mission.' },
    { name: 'Administration and reporting', percent: 10, amount: 25000, description: 'Proposed support for program coordination, financial administration, and reporting—so the work can be organized and its use of funds explained clearly.' }
  ],
  contactEmail: '',
  legal: { disclosure: '', privacyContact: '' },
  officialChannels: [], // [{ label: 'Official website', url: 'https://...' }], verified by owner.
  analytics: { enabled: false, scriptUrl: '', domain: '', privacyDisclosure: '' } // Optional Plausible-compatible, cookieless analytics; review privacy before activation.
};
