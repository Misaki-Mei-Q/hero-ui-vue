import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'
import './styles.css'
import '../../../../packages/styles/src/styles.css'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import ClientOnly from './ClientOnly.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('demo-preview', AntDesignContainer)
    app.component('ClientOnly', ClientOnly)
  }
} satisfies Theme
