import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import "../../public/simple-cesium/style.css"
import "@simple/cesium/style.css"

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', ElementPlusContainer)
    app.use(createPinia())
    app.use(ElementPlus)
    if (typeof document !== 'undefined') {
      import('naive-ui').then(({ default: NaiveUI }) => {
        app.use(NaiveUI)
      })
    }
  }
}
