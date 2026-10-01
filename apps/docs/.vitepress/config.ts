import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  title: 'HeroUI Vue',
  description: 'A modern Vue 3 UI component library built with Tailwind CSS. Docs: https://misaki-mei-q.github.io/hero-ui-vue',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'HeroUI Vue - Modern Vue 3 UI Components' }],
    ['meta', { property: 'og:description', content: 'A beautiful, accessible component library built with Tailwind CSS and Vue 3 Composition API' }],
  ],

  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },

  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/guide/quick-start', activeMatch: '^/guide/' },
      { text: 'Components', link: '/components/' },
      { text: 'GitHub', link: 'https://github.com/Misaki-Mei-Q/hero-ui-vue' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' }
          ]
        },
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/components/' },
            { text: 'Accordion', link: '/components/accordion' },
            { text: 'Alert', link: '/components/alert' },
            { text: 'AlertDialog', link: '/components/alert-dialog' },
            { text: 'Autocomplete', link: '/components/autocomplete' },
            { text: 'Avatar', link: '/components/avatar' },
            { text: 'Badge', link: '/components/badge' },
            { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
            { text: 'Card', link: '/components/card' },
            { text: 'Chip', link: '/components/chip' },
            { text: 'Disclosure', link: '/components/disclosure' },
            { text: 'Disclosure Group', link: '/components/disclosure-group' },
            { text: 'Empty State', link: '/components/empty-state' },
            { text: 'Skeleton', link: '/components/skeleton' },
            { text: 'Surface', link: '/components/surface' },
            { text: 'Tag', link: '/components/tag' },
            { text: 'Tag Group', link: '/components/tag-group' },
            { text: 'Tabs', link: '/components/tabs' }
          ]
        },
        {
          text: 'Forms',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Button Group', link: '/components/button-group' },
            { text: 'Checkbox', link: '/components/checkbox' },
            { text: 'Checkbox Group', link: '/components/checkbox-group' },
            { text: 'Fieldset', link: '/components/fieldset' },
            { text: 'Input', link: '/components/input' },
            { text: 'Input Group', link: '/components/input-group' },
            { text: 'Input OTP', link: '/components/input-otp' },
            { text: 'Number Field', link: '/components/number-field' },
            { text: 'Radio', link: '/components/radio' },
            { text: 'Radio Group', link: '/components/radio-group' },
            { text: 'Search Field', link: '/components/search-field' },
            { text: 'Switch', link: '/components/switch' },
            { text: 'Switch Group', link: '/components/switch-group' },
            { text: 'TextField', link: '/components/textfield' },
            { text: 'Textarea', link: '/components/textarea' }
          ]
        },
        {
          text: 'Form Elements',
          items: [
            { text: 'Description', link: '/components/description' },
            { text: 'Error Message', link: '/components/error-message' },
            { text: 'Field Error', link: '/components/field-error' },
            { text: 'Label', link: '/components/label' }
          ]
        },
        {
          text: 'General',
          items: [
            { text: 'Close Button', link: '/components/close-button' },
            { text: 'Header', link: '/components/header' },
            { text: 'Kbd', link: '/components/kbd' },
            { text: 'Link', link: '/components/link' },
            { text: 'List Box', link: '/components/list-box' },
            { text: 'Meter', link: '/components/meter' },
            { text: 'Modal', link: '/components/modal' },
            { text: 'Drawer', link: '/components/drawer' },
            { text: 'Pagination', link: '/components/pagination' },
            { text: 'Progress Bar', link: '/components/progress-bar' },
            { text: 'Progress Circle', link: '/components/progress-circle' },
            { text: 'Scroll Shadow', link: '/components/scroll-shadow' },
            { text: 'Separator', link: '/components/separator' },
            { text: 'Spinner', link: '/components/spinner' },
            { text: 'Text', link: '/components/text' },
            { text: 'Toggle Button', link: '/components/toggle-button' },
            { text: 'Toggle Button Group', link: '/components/toggle-button-group' },
            { text: 'Toolbar', link: '/components/toolbar' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Misaki-Mei-Q/hero-ui-vue' }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/Misaki-Mei-Q/hero-ui-vue/edit/develop/apps/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the Apache-2.0 License.',
      copyright: 'Copyright © 2024-present HeroUI Vue'
    }
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      port: 5173,
      strictPort: true
    },
    resolve: {
      alias: [
        {
          find: '@misaki-mei/heroui-vue',
          replacement: path.resolve(__dirname, '../../../packages/vue/src')
        },
        {
          find: '@misaki-mei/heroui-vue-styles',
          replacement: path.resolve(__dirname, '../../../packages/styles/src')
        },
        {
          find: '@misaki-mei/heroui-vue-styles',
          replacement: path.resolve(__dirname, '../../../packages/styles/src')
        }
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    }
  }
})
