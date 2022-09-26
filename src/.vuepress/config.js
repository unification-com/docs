const { description } = require('../../package.json')
const { sidebar: mainchain_sidebar } = require('./sidebars/mainchain')
const { sidebar: ooo_sidebar } = require('./sidebars/ooo')
const { sidebar: vor_sidebar } = require('./sidebars/vor')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/assets/common/unification_icon.png' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'unification-com/docs',
    logo: '/assets/common/unification_logoblack.png',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Mainchain',
        link: '/mainchain/'
      },
      {
        text: 'VOR',
        link: '/vor/'
      },
      {
        text: 'OoO',
        link: '/ooo/'
      }
    ],
    sidebar: {
      '/mainchain/': mainchain_sidebar,
      '/ooo/': ooo_sidebar,
      '/vor/': vor_sidebar
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'tabs',
  ],

  extendMarkdown: (md) => {
    // use more markdown-it plugins!
    md.use(require('markdown-it-include'), 'src')
  }
}
