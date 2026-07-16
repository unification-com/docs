import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import './custom.css'

// The six live custom components, ported from the former VuePress site. VuePress auto-registered
// components from .vuepress/components/**; VitePress needs explicit global registration here.
import InstallUnd from './components/InstallUnd.vue'
import CosmovisorDirTree from './components/CosmovisorDirTree.vue'
import LatestUndVersion from './components/LatestUndVersion.vue'
import DownloadUndClient from './components/DownloadUndClient.vue'
import Statesync from './components/Statesync.vue'
import CustomFeatureBlock from './components/CustomFeatureBlock.vue'

// The Network-* set renders the live network-info page (networks/overview.md). They reference each
// other by VuePress's path-prefixed global names, so all six are registered globally under those
// exact `Network-*` names.
import NetworkOverview from './components/Network/Overview.vue'
import NetworkServices from './components/Network/Services.vue'
import NetworkServiceTableRow from './components/Network/ServiceTableRow.vue'
import NetworkServiceItem from './components/Network/ServiceItem.vue'
import NetworkIBC from './components/Network/IBC.vue'
import NetworkUpgrades from './components/Network/Upgrades.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('InstallUnd', InstallUnd)
    app.component('CosmovisorDirTree', CosmovisorDirTree)
    app.component('LatestUndVersion', LatestUndVersion)
    app.component('DownloadUndClient', DownloadUndClient)
    app.component('Statesync', Statesync)
    app.component('CustomFeatureBlock', CustomFeatureBlock)
    app.component('Network-Overview', NetworkOverview)
    app.component('Network-Services', NetworkServices)
    app.component('Network-ServiceTableRow', NetworkServiceTableRow)
    app.component('Network-ServiceItem', NetworkServiceItem)
    app.component('Network-IBC', NetworkIBC)
    app.component('Network-Upgrades', NetworkUpgrades)
    enhanceAppWithTabs(app)
  },
}
