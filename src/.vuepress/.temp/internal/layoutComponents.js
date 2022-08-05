import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/storage/Home_Storage/src/Unification/github.com/docs/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/storage/Home_Storage/src/Unification/github.com/docs/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
