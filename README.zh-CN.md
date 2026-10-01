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

**HeroUI Vue** 是一套漂亮、现代的 Vue 3 UI 组件库 —— HeroUI React 到 Vue 3 (Composition API) 的完整移植版本。

文档站点: [https://misaki-mei-q.github.io/hero-ui-vue](https://misaki-mei-q.github.io/hero-ui-vue)

> ⚠️ **开发中**: 此项目仍在积极开发，尚未达到生产可用状态。

## 特性

- 🎨 **开箱即用** - 默认外观就已经非常漂亮
- 🎯 **易于定制** - 基于 Tailwind CSS v4，主题定制简单
- ♿ **可访问性** - 基于 Radix Vue primitives 构建，完整 ARIA 支持
- 🔧 **TypeScript** - 完整 TS 支持，严格类型
- 🚀 **现代化** - Vue 3 Composition API
- 📦 **Tree-shakeable** - 按需引入，体积最优
- 🎭 **复合组件** - 灵活可组合的组件结构

## 快速开始

几分钟内即可上手 HeroUI Vue。

### 环境要求

- Vue 3.4+
- Tailwind CSS v4

### 安装

安装 HeroUI Vue 与样式包：

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

如果你的项目已经配置了 Tailwind CSS 4，请保留现有配置。
对于 Vite 项目，添加 Tailwind 插件：

```ts
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tailwindcss(), vue()],
})
```

### 引入样式

在你的主 CSS 文件（例如 `src/style.css`）中加入：

```css
@import "tailwindcss";
@import "@misaki-mei/heroui-vue-styles/styles.css";
```

引入顺序很重要。务必先引入 `tailwindcss`。

如果项目还没有加载该 CSS 文件，请在 `src/main.ts` 中引入：

```ts
import './style.css'
```

### 使用组件

```vue
<script setup lang="ts">
import { Button } from '@misaki-mei/heroui-vue';
</script>

<template>
  <Button variant="primary">点击我</Button>
</template>
```

### 下一步

- [浏览文档](https://misaki-mei-q.github.io/hero-ui-vue)
- [查看组件](https://misaki-mei-q.github.io/hero-ui-vue/components/)

## 文档

访问 [文档站点](https://misaki-mei-q.github.io/hero-ui-vue) 查看完整文档。

## 组件覆盖度

基线：HeroUI React v3.0.4 文档列出 71 个 React 组件。HeroUI Vue 目前已对其中 50 个组件提供文档级对等支持，外加 5 个 Vue 端额外的 primitive。

### 已实现 React 对等组件 (50/71)

Accordion (手风琴)、Alert (提示)、AlertDialog (警示对话框)、Autocomplete (自动补全)、Avatar (头像)、Badge (徽章)、Breadcrumbs (面包屑)、Button (按钮)、ButtonGroup (按钮组)、Card (卡片)、Checkbox (复选框)、CheckboxGroup (复选框组)、Chip (标签块)、CloseButton (关闭按钮)、Description (描述)、Disclosure (折叠面板)、DisclosureGroup (折叠面板组)、Drawer (抽屉)、ErrorMessage (错误信息)、FieldError (字段错误)、Fieldset (字段集)、Input (输入框)、InputGroup (输入框组合)、InputOTP (验证码输入)、Kbd (键盘按键)、Label (标签)、Link (链接)、ListBox (列表框)、Meter (计量条)、Modal (模态框)、NumberField (数字输入)、Pagination (分页)、ProgressBar (进度条)、ProgressCircle (环形进度)、RadioGroup (单选组)、ScrollShadow (滚动阴影)、SearchField (搜索框)、Separator (分隔符)、Skeleton (骨架屏)、Spinner (加载指示)、Surface (表面容器)、Switch (开关)、Tabs (标签页)、TagGroup (标签组)、Text (文本)、TextArea (多行文本)、TextField (文本字段)、Toolbar (工具栏)、ToggleButton (切换按钮)、ToggleButtonGroup (切换按钮组)。

### Vue 文档额外组件

EmptyState (空状态)、Header (页头)、Radio (单选)、SwitchGroup (开关组)、Tag (标签)。

### 剩余 React 对等缺口 (21)

Calendar (日历)、ColorArea (色彩面板)、ColorField (颜色字段)、ColorSlider (颜色滑块)、ColorSwatch (色块)、ColorSwatchPicker (色块选择)、ColorPicker (色彩选择器)、ComboBox (组合框)、DateField (日期字段)、DatePicker (日期选择)、DateRangePicker (日期范围选择)、Dropdown (下拉)、Form (表单)、Popover (弹出)、RangeCalendar (日期范围日历)、Select (选择器)、Slider (滑块)、Table (表格)、TimeField (时间字段)、Toast (吐司)、Tooltip (提示框)。

## 开发

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
│   ├── vue/          # 组件库主体
│   ├── styles/       # Tailwind CSS 样式与变体
│   └── standard/     # 共享配置
├── apps/
│   └── docs/         # 文档站点 (VitePress)
├── scripts/          # 维护与发布脚本
└── .github/          # CI 工作流 (lint, test, publish)
```

Vue 端口实时跟踪 [HeroUI React](https://github.com/heroui-inc/heroui) 的组件 API。React 源码并未入库；对等性检查通过公开发布的 `@heroui/react` 包与 HeroUI 文档站点进行。

## 贡献

欢迎贡献！详情请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 致谢

本项目是 HeroUI 团队开发的 [HeroUI](https://github.com/heroui-inc/heroui) 的 Vue 3 移植版本。

## 许可证

Apache-2.0 — 详见 [LICENSE](LICENSE)

## 鸣谢

- [HeroUI](https://heroui.com) - 原始 React 组件库
- [Radix Vue](https://www.radix-vue.com) - 可访问的 Vue primitives
- [Tailwind CSS](https://tailwindcss.com) - 实用优先的 CSS 框架
- [Vue 3](https://vuejs.org) - 渐进式 JavaScript 框架