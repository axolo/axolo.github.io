import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
// import MySearch from './components/my/search.vue'
import DocBefore from './components/my/doc-before.vue'
import DocAfter from './components/my/doc-after.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 'nav-bar-content-before': () => h(MySearch),
      'doc-before': () => h(DocBefore),
      'doc-after': () => h(DocAfter),
    })
  }
}