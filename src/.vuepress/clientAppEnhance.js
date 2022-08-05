import { defineClientAppEnhance } from "@vuepress/client";
import CustomFeatureBlock from "./components/CustomFeatureBlock.vue";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("CustomFeatureBlock", CustomFeatureBlock);
});
