/** Default ECH Institute channel (@echinstitute) — main podcast hub / API default. */
export const ECH_INSTITUTE_CHANNEL_ID = 'UCD9iiIwTRtLDYcEWONs2Q3A';

/**
 * Official YouTube playlists per series (RSS: feeds/videos.xml?playlist_id=…).
 * @see https://www.youtube.com/playlist?list=…
 */
export const PODCAST_SERIES_PLAYLISTS = {
  peepaneip: {
    playlistId: 'PL4cwHXAawZxqu0PKKyMzG_3BJV_xZTi1F',
    playlistUrl:
      'https://www.youtube.com/playlist?list=PL4cwHXAawZxqu0PKKyMzG_3BJV_xZTi1F',
    title: 'PEEPanEIP',
  },
  /** Women Powering Web3 (WiEP) */
  wiep: {
    playlistId: 'PL4cwHXAawZxrygka99hIDMXyhh_BDpZqR',
    playlistUrl:
      'https://www.youtube.com/playlist?list=PL4cwHXAawZxrygka99hIDMXyhh_BDpZqR',
    title: 'Women Powering Web3',
  },
  fusakaFiles: {
    playlistId: 'PL4cwHXAawZxpz-erUbKKUnnGoQNdF8s7Z',
    playlistUrl:
      'https://www.youtube.com/playlist?list=PL4cwHXAawZxpz-erUbKKUnnGoQNdF8s7Z',
    title: 'The Fusaka Files',
  },
  epd: {
    playlistId: 'PL4cwHXAawZxrhbMXuCqMsCiwx1lwu_cNs',
    playlistUrl:
      'https://www.youtube.com/playlist?list=PL4cwHXAawZxrhbMXuCqMsCiwx1lwu_cNs',
    title: 'Ecosystem Project Demo',
  },
} as const;
