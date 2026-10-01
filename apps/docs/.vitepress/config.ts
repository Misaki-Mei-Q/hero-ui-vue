import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const sharedSidebar = {
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
        { text: 'Avatar Group', link: '/components/avatar-group' },
        { text: 'Badge', link: '/components/badge' },
        { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
        { text: 'Calendar', link: '/components/calendar' },
        { text: 'Card', link: '/components/card' },
        { text: 'Chip', link: '/components/chip' },
        { text: 'Color Area', link: '/components/color-area' },
        { text: 'Color Field', link: '/components/color-field' },
        { text: 'Color Picker', link: '/components/color-picker' },
        { text: 'Color Slider', link: '/components/color-slider' },
        { text: 'Color Swatch', link: '/components/color-swatch' },
        { text: 'Color Swatch Picker', link: '/components/color-swatch-picker' },
        { text: 'ComboBox', link: '/components/combo-box' },
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
        { text: 'Form', link: '/components/form' },
        { text: 'Input', link: '/components/input' },
        { text: 'Input Group', link: '/components/input-group' },
        { text: 'Input OTP', link: '/components/input-otp' },
        { text: 'Number Field', link: '/components/number-field' },
        { text: 'Radio', link: '/components/radio' },
        { text: 'Radio Group', link: '/components/radio-group' },
        { text: 'Search Field', link: '/components/search-field' },
        { text: 'Slider', link: '/components/slider' },
        { text: 'Switch', link: '/components/switch' },
        { text: 'Switch Group', link: '/components/switch-group' },
        { text: 'Table', link: '/components/table' },
        { text: 'DateField', link: '/components/date-field' },
        { text: 'DatePicker', link: '/components/date-picker' },
        { text: 'Date Range Picker', link: '/components/date-range-picker' },
        { text: 'TextField', link: '/components/textfield' },
        { text: 'Textarea', link: '/components/textarea' },
        { text: 'TimeField', link: '/components/time-field' }
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
        { text: 'Dropdown', link: '/components/dropdown' },
        { text: 'Pagination', link: '/components/pagination' },
        { text: 'Popover', link: '/components/popover' },
        { text: 'Progress Bar', link: '/components/progress-bar' },
        { text: 'Progress Circle', link: '/components/progress-circle' },
        { text: 'Range Calendar', link: '/components/range-calendar' },
        { text: 'Scroll Shadow', link: '/components/scroll-shadow' },
        { text: 'Select', link: '/components/select' },
        { text: 'Separator', link: '/components/separator' },
        { text: 'Spinner', link: '/components/spinner' },
        { text: 'Text', link: '/components/text' },
        { text: 'Tooltip', link: '/components/tooltip' },
        { text: 'Toast', link: '/components/toast' },
        { text: 'Toggle Button', link: '/components/toggle-button' },
        { text: 'Toggle Button Group', link: '/components/toggle-button-group' },
        { text: 'Toolbar', link: '/components/toolbar' }
      ]
    }
  ]
}

const sharedThemeConfig = {
  socialLinks: [
    { icon: 'github', link: 'https://github.com/Misaki-Mei-Q/heroui-vue' }
  ],

  search: {
    provider: 'local'
  },

  editLink: {
    pattern: 'https://github.com/Misaki-Mei-Q/heroui-vue/edit/master/apps/docs/:path',
    text: 'Edit this page on GitHub'
  },

  footer: {
    message: 'Released under the Apache-2.0 License.',
    copyright: 'Copyright © 2024-present HeroUI Vue'
  }
}

const zhCNSidebar = {
  '/zh-CN/guide/': [
    {
      text: '入门',
      items: [
        { text: '简介', link: '/zh-CN/guide/introduction' },
        { text: '安装', link: '/zh-CN/guide/installation' },
        { text: '快速开始', link: '/zh-CN/guide/quick-start' }
      ]
    }
  ],
  '/zh-CN/components/': [
    {
      text: '入门',
      items: [
        { text: '简介', link: '/zh-CN/guide/introduction' },
        { text: '安装', link: '/zh-CN/guide/installation' },
        { text: '快速开始', link: '/zh-CN/guide/quick-start' }
      ]
    },
    {
      text: '组件',
      items: [
        { text: '总览', link: '/zh-CN/components/' },
        { text: 'Accordion 手风琴', link: '/zh-CN/components/accordion' },
        { text: 'Alert 提示', link: '/zh-CN/components/alert' },
        { text: 'AlertDialog 警示对话框', link: '/zh-CN/components/alert-dialog' },
        { text: 'Autocomplete 自动补全', link: '/zh-CN/components/autocomplete' },
        { text: 'Avatar 头像', link: '/zh-CN/components/avatar' },
        { text: 'Avatar Group 头像组', link: '/zh-CN/components/avatar-group' },
        { text: 'Badge 徽章', link: '/zh-CN/components/badge' },
        { text: 'Breadcrumbs 面包屑', link: '/zh-CN/components/breadcrumbs' },
        { text: 'Calendar 日历', link: '/zh-CN/components/calendar' },
        { text: 'Card 卡片', link: '/zh-CN/components/card' },
        { text: 'Chip 标签块', link: '/zh-CN/components/chip' },
        { text: 'ComboBox 复合输入', link: '/zh-CN/components/combo-box' },
        { text: 'Color Area 颜色面', link: '/zh-CN/components/color-area' },
        { text: 'Color Field 颜色字段', link: '/zh-CN/components/color-field' },
        { text: 'Color Picker 颜色选择器', link: '/zh-CN/components/color-picker' },
        { text: 'Color Slider 颜色滑块', link: '/zh-CN/components/color-slider' },
        { text: 'Color Swatch 色块', link: '/zh-CN/components/color-swatch' },
        { text: 'Color Swatch Picker 色块选择', link: '/zh-CN/components/color-swatch-picker' },
        { text: 'Disclosure 折叠面板', link: '/zh-CN/components/disclosure' },
        { text: 'Disclosure Group 折叠面板组', link: '/zh-CN/components/disclosure-group' },
        { text: 'Empty State 空状态', link: '/zh-CN/components/empty-state' },
        { text: 'Skeleton 骨架屏', link: '/zh-CN/components/skeleton' },
        { text: 'Surface 表面容器', link: '/zh-CN/components/surface' },
        { text: 'Tag 标签', link: '/zh-CN/components/tag' },
        { text: 'Tag Group 标签组', link: '/zh-CN/components/tag-group' },
        { text: 'Tabs 标签页', link: '/zh-CN/components/tabs' }
      ]
    },
    {
      text: '表单',
      items: [
        { text: 'Button 按钮', link: '/zh-CN/components/button' },
        { text: 'Button Group 按钮组', link: '/zh-CN/components/button-group' },
        { text: 'Checkbox 复选框', link: '/zh-CN/components/checkbox' },
        { text: 'Checkbox Group 复选框组', link: '/zh-CN/components/checkbox-group' },
        { text: 'Fieldset 字段集', link: '/zh-CN/components/fieldset' },
        { text: 'Form 表单', link: '/zh-CN/components/form' },
        { text: 'Input 输入框', link: '/zh-CN/components/input' },
        { text: 'Input Group 输入框组合', link: '/zh-CN/components/input-group' },
        { text: 'Input OTP 验证码输入', link: '/zh-CN/components/input-otp' },
        { text: 'Number Field 数字输入', link: '/zh-CN/components/number-field' },
        { text: 'Radio 单选', link: '/zh-CN/components/radio' },
        { text: 'Radio Group 单选组', link: '/zh-CN/components/radio-group' },
        { text: 'Search Field 搜索框', link: '/zh-CN/components/search-field' },
        { text: 'Slider 滑块', link: '/zh-CN/components/slider' },
        { text: 'Switch 开关', link: '/zh-CN/components/switch' },
        { text: 'Switch Group 开关组', link: '/zh-CN/components/switch-group' },
        { text: 'DateField 日期字段', link: '/zh-CN/components/date-field' },
        { text: 'DatePicker 日期选择器', link: '/zh-CN/components/date-picker' },
        { text: 'Date Range Picker 日期范围选择器', link: '/zh-CN/components/date-range-picker' },
        { text: 'TextField 文本字段', link: '/zh-CN/components/textfield' },
        { text: 'Textarea 多行文本', link: '/zh-CN/components/textarea' },
        { text: 'TimeField 时间字段', link: '/zh-CN/components/time-field' }
      ]
    },
    {
      text: '表单元素',
      items: [
        { text: 'Description 描述', link: '/zh-CN/components/description' },
        { text: 'Error Message 错误信息', link: '/zh-CN/components/error-message' },
        { text: 'Field Error 字段错误', link: '/zh-CN/components/field-error' },
        { text: 'Label 标签', link: '/zh-CN/components/label' }
      ]
    },
    {
      text: '通用',
      items: [
        { text: 'Close Button 关闭按钮', link: '/zh-CN/components/close-button' },
        { text: 'Header 页头', link: '/zh-CN/components/header' },
        { text: 'Kbd 键盘按键', link: '/zh-CN/components/kbd' },
        { text: 'Link 链接', link: '/zh-CN/components/link' },
        { text: 'List Box 列表框', link: '/zh-CN/components/list-box' },
        { text: 'Meter 计量条', link: '/zh-CN/components/meter' },
        { text: 'Modal 模态框', link: '/zh-CN/components/modal' },
        { text: 'Drawer 抽屉', link: '/zh-CN/components/drawer' },
        { text: 'Dropdown 下拉菜单', link: '/zh-CN/components/dropdown' },
        { text: 'Pagination 分页', link: '/zh-CN/components/pagination' },
        { text: 'Popover 弹出层', link: '/zh-CN/components/popover' },
        { text: 'Progress Bar 进度条', link: '/zh-CN/components/progress-bar' },
        { text: 'Progress Circle 环形进度', link: '/zh-CN/components/progress-circle' },
        { text: 'Range Calendar 范围日历', link: '/zh-CN/components/range-calendar' },
        { text: 'Scroll Shadow 滚动阴影', link: '/zh-CN/components/scroll-shadow' },
        { text: 'Select 选择器', link: '/zh-CN/components/select' },
        { text: 'Separator 分隔符', link: '/zh-CN/components/separator' },
        { text: 'Spinner 加载指示', link: '/zh-CN/components/spinner' },
        { text: 'Text 文本', link: '/zh-CN/components/text' },
        { text: 'Tooltip 提示', link: '/zh-CN/components/tooltip' },
        { text: 'Toast 提示', link: '/zh-CN/components/toast' },
        { text: 'Toggle Button 切换按钮', link: '/zh-CN/components/toggle-button' },
        { text: 'Toggle Button Group 切换按钮组', link: '/zh-CN/components/toggle-button-group' },
        { text: 'Toolbar 工具栏', link: '/zh-CN/components/toolbar' }
      ]
    }
  ]
}

export default defineConfig({
  title: 'HeroUI Vue',
  description: 'A modern Vue 3 UI component library built with Tailwind CSS. Docs: https://misaki-mei-q.github.io/heroui-vue',
  base: '/heroui-vue/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/heroui-vue/favicon.svg' }],
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

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        ...sharedThemeConfig,
        nav: [
          { text: 'Getting Started', link: '/guide/quick-start', activeMatch: '^/guide/' },
          { text: 'Components', link: '/components/' },
          { text: 'GitHub', link: 'https://github.com/Misaki-Mei-Q/heroui-vue' }
        ],
        sidebar: sharedSidebar
      }
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        ...sharedThemeConfig,
        nav: [
          { text: '入门', link: '/zh-CN/guide/quick-start', activeMatch: '^/zh-CN/guide/' },
          { text: '组件', link: '/zh-CN/components/' },
          { text: 'GitHub', link: 'https://github.com/Misaki-Mei-Q/heroui-vue' }
        ],
        sidebar: zhCNSidebar,
        editLink: {
          pattern: 'https://github.com/Misaki-Mei-Q/heroui-vue/edit/master/apps/docs/zh-CN/:path',
          text: '在 GitHub 上编辑此页'
        }
      }
    }
  },

  ignoreDeadLinks: true,

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