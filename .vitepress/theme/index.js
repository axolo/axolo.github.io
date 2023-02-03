import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import MySearch from './components/my/search.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-before': () => h(MySearch)
    })
  }
}