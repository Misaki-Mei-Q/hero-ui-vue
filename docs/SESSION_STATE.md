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

### 3. Phase 2/3 compare pages（041baef）
- 在 `apps/compare/src/components/` 新增 13 对 React ↔ Vue 对比页 + 注册到 `App.tsx`：
  Input / Textarea / TextField / InputGroup /
  Checkbox / CheckboxGroup / RadioGroup / Switch /
  SearchField / NumberField / Fieldset / InputOTP / Form
- 验证：`pnpm -r build` 通过；`pnpm test --run` 91/91 通过；`pnpm dev` 启动成功（端口 5174）
- 已知差异（已在 commit message 注明）：
  - **Form** 在 Vue 包里**未实现**——compare 页用裸 `<form>` + `TextField.error` 手动校验，并在 Vue 端页脚提示
  - Vue `TextField` 是 all-in-one（`label` / `description` / `error` props），React 是 compound（`<Label>` / `<Input>` / `<Description>` / `<FieldError>` 子节点）；两边按 idiomatic 写法渲染
  - Vue `Fieldset` 的 bio 字段改用裸 `Textarea`（Vue `TextField` 固定渲染 `<input>`）
  - Vue `Checkbox` 没有 error slot，FieldError 渲染在同容器相邻位置
  - Vue `Input` 没有 readOnly 段，只展示 disabled
- 用户**还没在本地 dev 看过 Phase 2/3 视觉差异**

## 待用户回滚 / 决策

- Button 加的 `onPress` + scoped slot 是否回退？（用户表达过"功能上保持 Vue 特性"——可能想让 Button 也回退到 `@click`）
- CloseButton 加的 `onPress` 是否回退？

## 待办（Phase 2 起点 → 已部分完成 compare 页）

### Phase 2: 表单组件（13 个）— compare 页 ✅
- Input / TextArea / TextField / InputGroup
- Checkbox / CheckboxGroup / RadioGroup / Switch
- SearchField / NumberField / Fieldset / InputOTP / Form
  - 全部 13 对 React/Vue 对比页已写完（commit 041baef）
  - **剩余**：用户视觉 review；CSS token / 样式 class 逐个 diff 修

### Phase 3 起点的实际形态
- 顺序建议：**先做 styles token 收口**（`--color-accent` 双层 → `--accent` 单层），不然新增组件越多越难对齐
- 再做：每个组件 CSS 与 React 上游 `packages/styles/src/components/*.css` 逐个 diff
- 最后：补 `Form` 组件到 Vue 包（让 compare Vue 端不再用裸 `<form>`）

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
继续 Phase 2/3：从 styles token 收口开始。
建议路径：
  1. 决定 token 方案 A/B/C（双层 vs 单层 vs 直接换上游 styles）
  2. 重写 packages/styles/src/themes/shared/theme.css（或加映射别名）
  3. 跑 apps/compare dev，挨个核对 13 个新组件的 CSS 与 React 上游的差异
  4. 补 Form 组件到 Vue 包，消除对比页里的裸 <form> 占位
```