/**
 * ECH Institute Centralized Route Configuration
 * ================================================
 * Single source of truth for ALL application routes and path aliases.
 * Similar to Angular's RouterModule — import from here everywhere.
 *
 * Usage:
 *   import { ROUTES, ALIASES } from '@/config/routes';
 *   <Link href={ROUTES.about}>About</Link>
 *
 * To add a new page:
 *   1. Add it to APP_ROUTES (canonical path)
 *   2. If you want a short-path alias, add to PATH_ALIASES
 *   3. next.config.ts reads PATH_ALIASES automatically — no other changes needed
 */

// ─────────────────────────────────────────────
// CANONICAL ROUTES  (the real URL for each page)
// ─────────────────────────────────────────────
export const ROUTES = {
  home:         '/',
  about:        '/about',
  education:    '/education',
  homestead:    '/homestead',
  events:       '/events',
  support:      '/support',
  brand:        '/brand',
  getInvolved:  '/get-involved',

  // Programs & Initiatives
  eipSupport:            '/eip-support',
  communityPartnerships: '/community-partnerships',
  institutionalBridging: '/institutional-bridging',

  // Community / media hub (Clean URLs shown in browser)
  podcast:      '/podcast',
  peepaneip:    '/podcast/peepaneip',
  fusakaFiles:  '/podcast/fusaka-files',
  epd:          '/podcast/epd',
  wiep:         '/wiep',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

// ─────────────────────────────────────────────
// SHORT-PATH ALIASES  (convenience URLs → canonical)
// ─────────────────────────────────────────────
// These are injected into next.config.ts as rewrites().
// Add an entry here to make /short-path serve /canonical-path content
// without a redirect (URL stays as the short version in the browser).
export const PATH_ALIASES: Array<{ source: string; destination: string }> = [
  // Core physical rewrites: Clean URL -> Physical App Router Folder
  { source: '/podcast',              destination: '/community/podcast' },
  { source: '/podcast/peepaneip',    destination: '/community/podcast/peepaneip' },
  { source: '/podcast/fusaka-files', destination: '/community/podcast/fusaka-files' },
  { source: '/podcast/epd',          destination: '/community/podcast/epd' },
  { source: '/events',               destination: '/community/events' },
  
  // Absolute top-level shorthands
  { source: '/peepaneip',            destination: '/community/podcast/peepaneip' },
  { source: '/peep-an-eip',          destination: '/community/podcast/peepaneip' },
  { source: '/fusaka-files',         destination: '/community/podcast/fusaka-files' },
  { source: '/fusakaFiles',          destination: '/community/podcast/fusaka-files' },
  { source: '/fusakafiles',          destination: '/community/podcast/fusaka-files' },
  { source: '/epd',                  destination: '/community/podcast/epd' },
  
  // Two-word standardized aliases
  { source: '/getInvolved',          destination: '/community/get-involved' },
  { source: '/getinvolved',          destination: '/community/get-involved' },
  { source: '/get-involved',         destination: '/community/get-involved' },
  
  { source: '/eipSupport',           destination: '/community/eip-support' },
  { source: '/eipsupport',           destination: '/community/eip-support' },
  { source: '/eip-support',          destination: '/community/eip-support' },

  { source: '/communityPartnerships', destination: '/community/community-partnerships' },
  { source: '/communitypartnerships', destination: '/community/community-partnerships' },
  { source: '/community-partnerships', destination: '/community/community-partnerships' },

  { source: '/institutionalBridging', destination: '/community/institutional-bridging' },
  { source: '/institutionalbridging', destination: '/community/institutional-bridging' },
  { source: '/institutional-bridging', destination: '/community/institutional-bridging' },
];

// ─────────────────────────────────────────────
// EXTERNAL LINKS  (third-party URLs used across the site)
// ─────────────────────────────────────────────
export const EXTERNAL_LINKS = {
  blog:          'https://blog.echinstitute.org',
  annualReport:  '/reports/First_Annual_Report_ECH_Institute_Inc.pdf',
  discord:       'https://dsc.gg/ech',

  // Social
  twitter:       'https://x.com/ECHinstitute',
  github:        'https://github.com/echinstitute',
  youtube:       'https://www.youtube.com/@echinstitute',
  linkedin:      'https://www.linkedin.com/company/ethereum-cat-herders/',
  reddit:        'https://www.reddit.com/r/EthereumCatHerders/',
  warpcast:      'https://farcaster.xyz/ethcatherders',

  // Podcast platforms
  spotify:       'https://open.spotify.com/show/7dgxKMkSyy3HWtQW7OfqXA',
  applePodcasts: 'https://podcasts.apple.com/us/podcast/ech-institute-podcast/id1620565121',
  pocketCasts:   'https://pocketcasts.com/podcast/ech-institute-podcast/07681030-5a48-013a-d70a-0acc26574db2',
  castbox:       'https://castbox.fm/channel/7004180?country=gb',

  // Contact
  email:         'mailto:team@ethcatherders.com',
} as const;

// ─────────────────────────────────────────────
// SITE METADATA  (used by SEO, sitemap, etc.)
// ─────────────────────────────────────────────
export const SITE = {
  url:         'https://www.echinstitute.org',
  name:        'ECH Institute',
  email:       'team@ethcatherders.com',
  twitterHandle: '@ECHinstitute',
  foundingDate:  '2024-07-11',
} as const;
