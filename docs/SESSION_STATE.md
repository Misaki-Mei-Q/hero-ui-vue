# Session State — Resume Notes

> 写于 Phase 1 → Phase 2 切换点。新会话从这里继续。

## 当前用户目标

> "我主要在乎样式上需要和原版 HeroUI 一模一样，其他功能上保持 Vue 的特性就行。"

- 样式（CSS class、token、视觉表现）必须与 `@heroui/react@3.2.x` 一致。
- API / 交互 / 事件命名按 Vue 习惯（`@click` 而非 `onPress`，slot 而非 render prop）。
- 不需要逐组件补 `*Variants` 类型导出（除非需要）。
- 不需要逐组件写单元测试（除非需要）。

## 已完成（master 9f61495 / 09727d8）

### 1. Phase 1: 简单组件（12 个，全部 commit 并 push）
- Button (f471148) — 加了 `onPress` + scoped slot（用户**可能想回退**，见下）
- Badge (4034b7b) — 导出 `BadgeVariants` 类型
- Chip (e42abb9) — 导出 `ChipVariants` 类型
- CloseButton (39b9d8f) — 加了 `onPress`
- Kbd (9f61495) — 导出 `KbdVariants` 类型
- Separator / Skeleton / Spinner / ProgressBar / ProgressCircle / Meter / Link
  - 12 个组件全部在 `apps/compare/` 里有 React ↔ Vue 对比页
- 修基础设施：`packages/vue/vitest.config.ts` + `jsdom` / `@testing-library/jest-dom` 提升到 vue 包 devDeps
- 附带产物：Input / Drawer / Modal / DisclosureGroup 测试也通了

### 2. Visual parity sandbox（09727d8）
- `apps/compare/` Vite + React 19 + Vue 3 双应用
- 12 个组件的对比页（左侧 React upstream，右侧 Vue port）
- 共享 styles（左边 `@heroui/styles`，右边 `@misaki-mei/heroui-vue-styles`）
- Build 通过（1845 modules，888KB CSS，494KB JS）
- 用户**还没在本地 dev 看过视觉差异**

## 待用户回滚 / 决策

- Button 加的 `onPress` + scoped slot 是否回退？（用户表达过"功能上保持 Vue 特性"——可能想让 Button 也回退到 `@click`）
- CloseButton 加的 `onPress` 是否回退？

## 待办（Phase 2 起点）

### Phase 2: 表单组件（13 个）
- Input
- TextArea
- TextField (Root / Label / Input / Description / FieldError)
- InputGroup (Root / Prefix / Suffix)
- Checkbox (Root / Indicator / Label)
- CheckboxGroup (Root / Label / Description / Items / ErrorMessage)
- RadioGroup (Root / Items / Indicator / Label / Description)
- Switch (Root / Thumb / Indicator)
- SearchField (Root / Label / Input / StartIcon / EndIcon)
- NumberField (Root / Label / Group / Input / Stepper / Description)
- Fieldset (Root / Legend / Actions / Group / Label / Description)
- InputOTP (Root / Group / Slot)
- Form (Root)

### 已知问题（**新会话第一件事**）

1. **样式 token 差异**：本仓库 `packages/styles/src/themes/shared/theme.css` 用 `--color-accent`、`--color-accent-soft-foreground` 双层结构；React v3.2.x 已统一为 `--accent`、`--accent-soft`、`--accent-soft-foreground` 单层结构。需要决定：
   - (A) 全量重写 `packages/styles/` 以同 `@heroui/styles` 的 token 命名
   - (B) 在 `@misaki-mei/heroui-vue-styles` 里加映射别名（`--accent: var(--color-accent)` 等），保留双层但暴露单层 API
   - (C) 直接换 `@heroui/styles` 替换本仓库的 `packages/styles`
2. **每个组件 CSS 对比**：用 `heroui-react_get_component_source_styles` 与 `packages/styles/src/components/*.css` 逐个 diff
4. **Vue 端口 API 风格**：保持 Vue 习惯（`@click`、`v-model`、`v-slot`）而非 React 的 `onPress` / render prop

## 工作模式

- 每个组件一个 conventional commit
- 修改完 push 到 master（已确认 OK）
- 跑 `pnpm lint` / `pnpm test` / `pnpm build` 验证
- 修完 push 之前让用户 review

## 关键文件路径速查

```
packages/styles/src/components/*.css         # 样式源（与 React 上游有差异）
packages/styles/src/themes/shared/theme.css # token 定义（双层 → 需改）
packages/vue/src/components/<name>/*.vue   # Vue 组件实现
packages/vue/src/components/<name>/*.ts    # 子组件 + context + index
apps/compare/src/components/<Name>.react.tsx # React 对比页
apps/compare/src/components/<Name>.vue     # Vue 对比页
apps/compare/src/App.tsx                  # 对比页注册表（添加新组件要改这里）
packages/vue/vitest.config.ts             # 测试环境配置
REFACTOR_PLAN.md                          # 原始计划（与新目标有偏差，按新目标走）
CHANGELOG.md                              # Unreleased 段已有 Phase 1 条目
```

## 新会话开场建议

```
继续 Phase 2，从 styles 包 token 差异修起：先让 Phase 1 现有组件在 compare 站点里两边一样，再做表单组件。
```