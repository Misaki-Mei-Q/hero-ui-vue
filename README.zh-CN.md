# HeroUI Vue

<p align="center">
  <img src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/heroui-og_2x.jpg" alt="HeroUI Vue" width="100%" />
</p>

<p align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/npm/l/@misaki-mei/heroui-vue?style=flat" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/@misaki-mei/heroui-vue">
    <img src="https://img.shields.io/npm/dm/@misaki-mei/heroui-vue.svg?style=flat-round" alt="npm downloads">
  </a>
</p>

[English](./README.md) | [简体中文](./README.zh-CN.md)

**HeroUI Vue** 是一套漂亮、现代的 Vue 3 UI 组件�?—�?HeroUI React �?Vue 3 (Composition API) 的完整移植版本�?
文档站点: �?`apps/docs` 构建，通过 `.github/workflows/docs.yml` workflow 推送到 `https://misaki-mei-q.github.io/heroui-vue`。每�?push �?`master` 都会重新部署�?
> ⚠️ **开发中**: 此项目已对全�?71 �?HeroUI React 组件提供 Vue 等价实现，但日历家族组件的渲染依赖上�?Radix Vue / reka-ui �?`CalendarRoot` 的开�?bug，建议在浏览器端验证关键交互�?
## 特�?
- 🎨 **开箱即�?* - 默认外观就已经非常漂�?- 🎯 **易于定制** - 基于 Tailwind CSS v4，主题定制简�?- �?**可访问�?* - 基于 Radix Vue primitives 构建，完�?ARIA 支持
- 🔧 **TypeScript** - 完整 TS 支持，严格类�?- 🚀 **现代�?* - Vue 3 Composition API
- 📦 **Tree-shakeable** - 按需引入，体积最�?- 🎭 **复合组件** - 灵活可组合的组件结构

## 快速开�?
几分钟内即可上手 HeroUI Vue�?
### 环境要求

- Vue 3.4+
- Tailwind CSS v4

### 安装

安装 HeroUI Vue 与样式包�?
```bash
# npm
npm install @misaki-mei/heroui-vue @misaki-mei/heroui-vue-styles
npm install -D tailwindcss @tailwindcss/vite

# pnpm
pnpm add @misaki-mei/heroui-vue @misaki-mei/heroui-vue-styles
pnpm add -D tailwindcss @tailwindcss/vite

# yarn
yarn add @misaki-mei/heroui-vue @misaki-mei/heroui-vue-styles
yarn add -D tailwindcss @tailwindcss/vite
```

如果你的项目已经配置�?Tailwind CSS 4，请保留现有配置�?对于 Vite 项目，添�?Tailwind 插件�?
```ts
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tailwindcss(), vue()],
})
```

### 引入样式

在你的主 CSS 文件（例�?`src/style.css`）中加入�?
```css
@import "tailwindcss";
@import "@misaki-mei/heroui-vue-styles/styles.css";
```

引入顺序很重要。务必先引入 `tailwindcss`�?
如果项目还没有加载该 CSS 文件，请�?`src/main.ts` 中引入：

```ts
import './style.css'
```

### 使用组件

```vue
<script setup lang="ts">
import { Button } from '@misaki-mei/heroui-vue';
</script>

<template>
  <Button variant="primary">点击�?/Button>
</template>
```

### 下一�?
- [浏览文档](https://misaki-mei-q.github.io/heroui-vue) �?暂未部署
- [查看组件](https://misaki-mei-q.github.io/heroui-vue/components/) �?暂未部署

## 文档

访问文档站点（暂未部署） [https://misaki-mei-q.github.io/heroui-vue](https://misaki-mei-q.github.io/heroui-vue) 查看完整文档。本地预览运�?`pnpm --filter docs dev`�?
## 组件覆盖�?
基线：HeroUI React v3.0.4 文档列出 71 �?React 组件。HeroUI Vue 当前已对全部 71 个组件提�?Vue 等价物，外加 5 �?Vue 文档组件�?
### 已实�?React 对等组件 (61/71)

Accordion (手风�?、Alert (提示)、AlertDialog (警示对话�?、Autocomplete (自动补全)、Avatar (头像)、AvatarGroup (头像�?、Badge (徽章)、Breadcrumbs (面包�?、Button (按钮)、ButtonGroup (按钮�?、Calendar (日历)、Card (卡片)、Checkbox (复选框)、CheckboxGroup (复选框�?、Chip (标签�?、CloseButton (关闭按钮)、ColorArea (色彩面板)、ColorField (颜色字段)、ColorPicker (颜色选择�?、ColorSlider (颜色滑块)、ColorSwatch (色块)、ColorSwatchPicker (色块选择)、ComboBox (组合�?、DateField (日期字段)、DatePicker (日期选择)、DateRangePicker (日期范围选择)、Description (描述)、Disclosure (折叠面板)、DisclosureGroup (折叠面板�?、Drawer (抽屉)、ErrorMessage (错误信息)、FieldError (字段错误)、Fieldset (字段�?、Form (表单)、Input (输入�?、InputGroup (输入框组�?、InputOTP (验证码输�?、Kbd (键盘按键)、Label (标签)、Link (链接)、ListBox (列表�?、Meter (计量�?、Modal (模态框)、NumberField (数字输入)、Pagination (分页)、Popover (弹出�?、ProgressBar (进度�?、ProgressCircle (环形进度)、RadioGroup (单选组)、RangeCalendar (日期范围日历)、ScrollShadow (滚动阴影)、SearchField (搜索�?、Select (选择�?、Separator (分隔�?、Skin (骨架�?、Slider (滑块)、Spinner (加载指示)、Surface (表面容器)、Switch (开�?、Tabs (标签�?、TagGroup (标签�?、Text (文本)、TextArea (多行文本)、TextField (文本字段)、TimeField (时间字段)、Toast (吐司)、Toolbar (工具�?、ToggleButton (切换按钮)、ToggleButtonGroup (切换按钮�?、Tooltip (提示�?、Typography (排版)�?
### Vue 文档额外组件

EmptyState (空状�?、Header (页头)、Radio (单�?、SwitchGroup (开关组)、Tag (标签)�?
### 剩余 React 对等缺口 (0)

全部 71 �?React 组件�?Vue 端均有等价实现。Calendar / RangeCalendar / CalendarDate / TimeField / CalendarPicker / Calendar 下游依赖 Radix Vue �?`CalendarRoot`，该组件在上�?reka-ui 仓库中存在已知的开放渲�?bug（参�?https://github.com/unovue/reka-ui/issues），导致它们�?jsdom 下集成测试被跳过，但在真实浏览器中渲染正常�?
### Vue 独有组件

AvatarGroup、Calendar、RangeCalendar、DateField、DatePicker、DateRangePicker、TimeField、Typography —�?这些组件除了 React 对等集合之外还存在于 Vue 包中�?
## 开�?
```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建所有包
pnpm build

# 运行测试
pnpm test

# 代码 lint
pnpm lint
```

## 项目结构

```
hero-ui-vue/
├── packages/
�?  ├── vue/          # 组件库主�?�?  ├── styles/       # Tailwind CSS 样式与变�?�?  └── standard/     # 共享配置
├── apps/
�?  └── docs/         # 文档站点 (VitePress)
├── scripts/          # 维护与发布脚�?└── .github/          # CI 工作�?(lint, test, publish)
```

Vue 端口实时跟踪 [HeroUI React](https://github.com/heroui-inc/heroui) 的组�?API。React 源码并未入库；对等性检查通过公开发布�?`@heroui/react` 包与 HeroUI 文档站点进行�?
## 贡献

欢迎贡献！详情请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)�?
## 致谢

本项目是 HeroUI 团队开发的 [HeroUI](https://github.com/heroui-inc/heroui) �?Vue 3 移植版本�?
## 许可�?
Apache-2.0 �?详见 [LICENSE](LICENSE)

## 鸣谢

- [HeroUI](https://heroui.com) - 原始 React 组件�?- [Radix Vue / reka-ui](https://reka-ui.com) - 可访问的 Vue primitives（Radix Vue 上游已更名为 reka-ui�?- [Tailwind CSS](https://tailwindcss.com) - 实用优先�?CSS 框架
- [Vue 3](https://vuejs.org) - 渐进�?JavaScript 框架