# Components Overview

HeroUI Vue provides a comprehensive set of UI components for building modern web applications.
HeroUI Vue 提供了一套完整的 UI 组件，用于搭建现代 Web 应用。

## Forms / 表单组件

Form components for user input and interaction. 用于用户输入与交互的表单组件。

- [Button 按钮](/components/button) - Clickable button element with multiple variants | 带多种变体的可点击按钮
- [Button Group 按钮组](/components/button-group) - Group multiple buttons together | 将多个按钮组合
- [Checkbox 复选框](/components/checkbox) - Checkbox for boolean selections | 用于布尔选择的复选框
- [Checkbox Group 复选框组](/components/checkbox-group) - Group related checkbox values | 将相关复选框分组
- [Fieldset 字段集](/components/fieldset) - Form section layout with legend and actions | 带标题与操作区的表单分组
- [Input 输入框](/components/input) - Single-line text input field | 单行文本输入
- [Input Group 输入框组合](/components/input-group) - Input shell with prefix, suffix, and textarea slots | 支持前后缀与多行文本插槽的输入框外壳
- [Input OTP 验证码输入](/components/input-otp) - One-time passcode input with visual slots | 带可视槽位的一次性验证码输入
- [Number Field 数字输入](/components/number-field) - Numeric input with increment/decrement controls | 带加减按钮的数字输入
- [Radio 单选](/components/radio) - Radio button for single selection from a group | 在一组选项中单选
- [Radio Group 单选组](/components/radio-group) - Group radio buttons with shared state | 共享状态的多个单选按钮
- [Switch 开关](/components/switch) - Toggle switch for on/off states | 开关型切换控件
- [Switch Group 开关组](/components/switch-group) - Layout wrapper for related switches | 相关开关的布局容器
- [TextField 文本字段](/components/textfield) - Complete form field with label and validation | 包含标签与校验的完整表单字段
- [Textarea 多行文本](/components/textarea) - Multi-line text input field | 多行文本输入
- [Toggle Button 切换按钮](/components/toggle-button) - Pressable toggle control | 可按下的切换控件
- [Toggle Button Group 切换按钮组](/components/toggle-button-group) - Group related toggle controls | 将相关切换控件分组

## Form Elements / 表单元素

Helper components for building accessible forms. 用于构建可访问表单的辅助组件。

- [Description 描述](/components/description) - Descriptive text for form fields | 表单字段的说明文字
- [Field Error 字段错误](/components/field-error) - Error message display for form validation | 表单校验的错误信息展示
- [Label 标签](/components/label) - Label component for form fields | 表单字段的标签

## General / 通用组件

General-purpose UI components. 通用 UI 组件。

- [Accordion 手风琴](/components/accordion) - Collapsible content sections | 可折叠的内容区域
- [Alert 提示](/components/alert) - Status and feedback message | 状态与反馈消息
- [AlertDialog 警示对话框](/components/alert-dialog) - Confirmation dialog for consequential actions | 高风险操作的确认对话框
- [Autocomplete 自动补全](/components/autocomplete) - Searchable single-option picker | 可搜索的单选项选择器
- [Avatar 头像](/components/avatar) - User or entity avatar | 用户或实体头像
- [Badge 徽章](/components/badge) - Compact status marker | 紧凑的状态标记
- [Breadcrumbs 面包屑](/components/breadcrumbs) - Hierarchical navigation path | 层级化的导航路径
- [Card 卡片](/components/card) - Structured surface container | 结构化的表面容器
- [Chip 标签块](/components/chip) - Compact label or status | 紧凑的标签或状态
- [Disclosure 折叠面板](/components/disclosure) - Collapsible section with trigger and animated panel | 带触发器与动画面板的折叠区域
- [Disclosure Group 折叠面板组](/components/disclosure-group) - Coordinate expanded state across disclosure items | 协调多个折叠项的展开状态
- [Close Button 关闭按钮](/components/close-button) - Button for closing/dismissing elements | 用于关闭 / 关闭元素的按钮
- [Empty State 空状态](/components/empty-state) - Empty list or search result placeholder | 空列表或空搜索结果的占位
- [Header 页头](/components/header) - Section heading primitive | 区域标题 primitive
- [Kbd 键盘按键](/components/kbd) - Display keyboard shortcuts | 展示键盘快捷键
- [Link 链接](/components/link) - Accessible hyperlink component | 可访问的超链接组件
- [Meter 计量条](/components/meter) - Known-range scalar measurement | 已知范围的标量测量
- [Modal 模态框](/components/modal) - Dialog overlay for focused interactions | 聚焦交互的对话框浮层
- [Drawer 抽屉](/components/drawer) - Slide-out panel for supplementary content and actions | 承载补充内容与操作的滑出面板
- [Pagination 分页](/components/pagination) - Page navigation controls | 页面导航控件
- [Progress Bar 进度条](/components/progress-bar) - Linear progress indicator | 线性进度指示器
- [Progress Circle 环形进度](/components/progress-circle) - Circular progress indicator | 环形进度指示器
- [Scroll Shadow 滚动阴影](/components/scroll-shadow) - Scrollable region with edge shadows | 带边缘阴影的可滚动区域
- [Separator 分隔符](/components/separator) - Visual divider between content sections | 内容区域间的视觉分隔
- [Skeleton 骨架屏](/components/skeleton) - Loading placeholder | 加载占位
- [Spinner 加载指示](/components/spinner) - Loading indicator | 加载动画
- [Surface 表面容器](/components/surface) - Base surface wrapper | 基础表面容器
- [Tag 标签](/components/tag) - Selectable or removable tag | 可选或可移除的标签
- [Tabs 标签页](/components/tabs) - Tabbed content navigation | 标签式内容导航
- [Text 文本](/components/text) - Styled text component | 带样式的文本组件
- [Toolbar 工具栏](/components/toolbar) - Toolbar container for related actions | 承载相关操作的工具栏容器

## Coming Soon / 即将推出

More components are being actively developed. 更多组件正在积极开发中。

- Select 选择器
- DatePicker 日期选择
- Tooltip 提示框
- Dropdown 下拉
- Calendar and date inputs 日历与日期输入
- Menus and overlays 菜单与浮层

## Usage Pattern / 使用模式

All components follow a consistent API pattern. 所有组件都遵循一致的 API 模式。

```vue
<script setup lang="ts">
import { ComponentName } from '@misaki-mei/heroui-vue'
</script>

<template>
  <ComponentName
    variant="primary"
    size="md"
    :disabled="false"
  >
    Content
  </ComponentName>
</template>
```