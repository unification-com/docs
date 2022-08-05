import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("FooBar", defineAsyncComponent(() => import("/storage/Home_Storage/src/Unification/github.com/docs/src/.vuepress/components/CustomFeatureBlock.vue")))
  },
}
