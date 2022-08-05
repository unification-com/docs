const { defaultTheme } = require('@vuepress/theme-default')
const { path } = require('@vuepress/utils')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
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

  theme: defaultTheme({
    logo: '/assets/common/unification_logoblack.png',
    logoDark: '/assets/common/unification_logowhite.png',
    repo: 'unification-com/docs',
    docsDir: 'src',
    editLink: false,
    navbar: [
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
  }),

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    registerComponentsPlugin({
      components: {
        CustomFeatureBlock: path.resolve(__dirname, './components/CustomFeatureBlock.vue'),
      },
    }),
  ],

  extendsMarkdown: (md) => {
    // use more markdown-it plugins!
    md.use(require('markdown-it-include'), 'src')
  }
}
