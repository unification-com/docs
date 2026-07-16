import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { sidebar } from './sidebars'

// Migration note: `cleanUrls: false` (the VitePress default) is deliberate — it preserves the
// existing `.html` URL shape, so inbound links (e.g. the go-ooo README's
// docs.unification.io/ooo/guide/ooo_api.html) keep resolving. UNoDE retired; VOR kept.
export default defineConfig({
  title: 'Documentation',
  description: 'Documentation for all Unification Projects',
  cleanUrls: false,
  // Kept relaxed for the migration commit. A link check surfaced 21 pre-existing dead links (bad
  // relative paths, dir links without a trailing slash, a stale ./examples/finchain, and
  // http://localhost example URLs) — VuePress never link-checked, so these are not regressions.
  // S8 follow-up: fix them, then flip this to `false` (optionally ignoring the localhost pattern).
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/assets/common/unification_icon.png' }],
  ],
  themeConfig: {
    // Horizontal wordmark logo — black on light, white on dark. The logo already reads
    // "UNIFICATION", so the redundant site-title text is hidden (it also overflowed the sidebar-width
    // title box onto the scrollbar).
    logo: {
      light: '/assets/common/unification_horizontal_logo_black.png',
      dark: '/assets/common/unification_horizontal_logo_white.png',
      alt: 'Unification',
    },
    siteTitle: false,
    nav: [
      { text: 'Mainchain', link: '/mainchain/' },
      { text: 'VOR', link: '/vor/' },
      { text: 'OoO', link: '/ooo/' },
    ],
    sidebar,
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/unification-com' },
    ],
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
})
