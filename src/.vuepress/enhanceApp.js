/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  router.addRoutes([
    { path: '/mainchain/software/cosmovisor/install_statesync_cosmovisor.html', redirect: 'mainchain/software/cosmovisor/install_und_with_cosmovisor.html' },
  ])
}
