# 组件总览

HeroUI Vue 提供了一套完整的 UI 组件，用于搭建现代 Web 应用。

## 表单组件

用于用户输入与交互的表单组件。

- [Button 按钮](/zh-CN/components/button) - 带多种变体的可点击按钮
- [Button Group 按钮组](/zh-CN/components/button-group) - 将多个按钮组合
- [Checkbox 复选框](/zh-CN/components/checkbox) - 用于布尔选择的复选框
- [Checkbox Group 复选框组](/zh-CN/components/checkbox-group) - 将相关复选框分组
- [Fieldset 字段集](/zh-CN/components/fieldset) - 带标题与操作区的表单分组
- [Input 输入框](/zh-CN/components/input) - 单行文本输入
- [Input Group 输入框组合](/zh-CN/components/input-group) - 支持前后缀与多行文本插槽的输入框外壳
- [Input OTP 验证码输入](/zh-CN/components/input-otp) - 带可视槽位的一次性验证码输入
- [Number Field 数字输入](/zh-CN/components/number-field) - 带加减按钮的数字输入
- [Radio 单选](/zh-CN/components/radio) - 在一组选项中单选
- [Radio Group 单选组](/zh-CN/components/radio-group) - 共享状态的多个单选按钮
- [Switch 开关](/zh-CN/components/switch) - 开关型切换控件
- [Switch Group 开关组](/zh-CN/components/switch-group) - 相关开关的布局容器
- [TextField 文本字段](/zh-CN/components/textfield) - 包含标签与校验的完整表单字段
- [Textarea 多行文本](/zh-CN/components/textarea) - 多行文本输入
- [Toggle Button 切换按钮](/zh-CN/components/toggle-button) - 可按下的切换控件
- [Toggle Button Group 切换按钮组](/zh-CN/components/toggle-button-group) - 将相关切换控件分组

## 表单元素

用于构建可访问表单的辅助组件。

- [Description 描述](/zh-CN/components/description) - 表单字段的说明文字
- [Field Error 字段错误](/zh-CN/components/field-error) - 表单校验的错误信息展示
- [Label 标签](/zh-CN/components/label) - 表单字段的标签

## 通用组件

通用 UI 组件。

- [Accordion 手风琴](/zh-CN/components/accordion) - 可折叠的内容区域
- [Alert 提示](/zh-CN/components/alert) - 状态与反馈消息
- [AlertDialog 警示对话框](/zh-CN/components/alert-dialog) - 高风险操作的确认对话框
- [Autocomplete 自动补全](/zh-CN/components/autocomplete) - 可搜索的单选项选择器
- [Avatar 头像](/zh-CN/components/avatar) - 用户或实体头像
- [Badge 徽章](/zh-CN/components/badge) - 紧凑的状态标记
- [Breadcrumbs 面包屑](/zh-CN/components/breadcrumbs) - 层级化的导航路径
- [Card 卡片](/zh-CN/components/card) - 结构化的表面容器
- [Chip 标签块](/zh-CN/components/chip) - 紧凑的标签或状态
- [Disclosure 折叠面板](/zh-CN/components/disclosure) - 带触发器与动画面板的折叠区域
- [Disclosure Group 折叠面板组](/zh-CN/components/disclosure-group) - 协调多个折叠项的展开状态
- [Close Button 关闭按钮](/zh-CN/components/close-button) - 用于关闭元素的按钮
- [Empty State 空状态](/zh-CN/components/empty-state) - 空列表或空搜索结果的占位
- [Header 页头](/zh-CN/components/header) - 区域标题 primitive
- [Kbd 键盘按键](/zh-CN/components/kbd) - 展示键盘快捷键
- [Link 链接](/zh-CN/components/link) - 可访问的超链接组件
- [Meter 计量条](/zh-CN/components/meter) - 已知范围的标量测量
- [Modal 模态框](/zh-CN/components/modal) - 聚焦交互的对话框浮层
- [Drawer 抽屉](/zh-CN/components/drawer) - 承载补充内容与操作的滑出面板
- [Pagination 分页](/zh-CN/components/pagination) - 页面导航控件
- [Progress Bar 进度条](/zh-CN/components/progress-bar) - 线性进度指示器
- [Progress Circle 环形进度](/zh-CN/components/progress-circle) - 环形进度指示器
- [Scroll Shadow 滚动阴影](/zh-CN/components/scroll-shadow) - 带边缘阴影的可滚动区域
- [Separator 分隔符](/zh-CN/components/separator) - 内容区域间的视觉分隔
- [Skeleton 骨架屏](/zh-CN/components/skeleton) - 加载占位
- [Spinner 加载指示](/zh-CN/components/spinner) - 加载动画
- [Surface 表面容器](/zh-CN/components/surface) - 基础表面容器
- [Tag 标签](/zh-CN/components/tag) - 可选或可移除的标签
- [Tabs 标签页](/zh-CN/components/tabs) - 标签式内容导航
- [Text 文本](/zh-CN/components/text) - 带样式的文本组件
- [Toolbar 工具栏](/zh-CN/components/toolbar) - 承载相关操作的工具栏容器

## 即将推出

更多组件正在积极开发中。

- Select 选择器
- DatePicker 日期选择
- Tooltip 提示框
- Dropdown 下拉
- Calendar and date inputs 日历与日期输入
- Menus and overlays 菜单与浮层

## 使用模式

所有组件都遵循一致的 API 模式。

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