# Refactor Plan: Migrating HeroUI Vue to v3.2.x API

## Goal

Bring `hero-ui-vue` into alignment with `@heroui/react@3.2.x` so the Vue port
tracks the React upstream rather than the now-stale `rysinal/hero-ui-vue`
fork. Components should expose the same prop names, variant values, slots,
events, and behavioural semantics as the React source. Existing Vue users
keep their working code through a documented deprecation path.

## Tracking Tooling

The plan assumes the HeroUI React MCP server is installed and reachable
(`mcp__heroui-react__*` tools). On every component migration the worker
session should:

1. Call `mcp__heroui-react__get_component_docs` with the component name to
   pull the API table, demos, and source link.
2. Call `mcp__heroui-react__get_component_source_code` if implementation
   details are ambiguous.
3. Call `mcp__heroui-react__get_component_source_styles` to retrieve the
   BEM CSS that the component should emit on its root element.

## Conventions for the Vue Port

These conventions apply to every migration in this plan. Document them in
`MAINTENANCE.md` so future contributors pick them up.

### Sub-component Style

Vue does not support React's dot notation natively. We expose sub-parts as
**separately-imported PascalCase identifiers**, not as `Button.Root` slots.

- **React** `<Button.Label>` / `Button.StartIcon` -> **Vue**
  `<ButtonLabel>` / `<ButtonStartIcon>`. All named exports of the component
  package.
- A single-name component (Button, Badge, Chip, ...) stays as
  `<Button>` / `<Badge>`.
- A multi-part component (TextField, InputGroup, Select, ColorField,
  ColorPicker, ...) is exported as a namespace object **only for tree
  shaking**, never for template use:
  ```ts
  export { TextFieldRoot as TextField }
  export { TextFieldLabel } from './TextFieldLabel'
  export { TextFieldDescription } from './TextFieldDescription'
  // ... etc
  ```
  Templates use `<TextField>`/`<TextFieldLabel>`. The "Root" alias only
  exists so that `import { TextField } from '@misaki-mei/heroui-vue'` keeps
  working.

### Prop Names

Match React exactly, even when the spelling differs from the Vue community.
For example React uses `isDisabled`, `isPending`, `isIconOnly`,
`onPress`. Vue keeps these names verbatim and adapts the Vue convention
elsewhere (e.g. `class` not `className`, `v-model` for two two
  binding instead of `value`/`onChange` pairs).

### Event Names

For events that map to React's Press/Change/Focus patterns, Vue emits
the `update:` and `on*` names with a thin mapping layer inside the
component. The public prop names stay React-flavoured (`onPress`,
`onChange`), so docs copy-pasted from React works in Vue.

### Variants and Sizes

The `buttonVariants` (and equivalent per-component variants) live in
`packages/styles`. They are imported by both the React and Vue
implementations and must not diverge. When upgrading, the worker session
runs `pnpm -F @misaki-mei/heroui-vue-styles build` after editing and
re-imports the typed variants to verify the types still match.

### Animations

React uses `framer-motion`. Vue uses `@vueuse/motion` (already available
through Vue's animation ecosystem). Where the React component relies on
`framer-motion` for entrance/exit transitions, the Vue port uses
`<Transition>` with the same keyframes derived from the CSS classes
emitted by the styles package. No JS animation library is added to
`packages/vue` dependencies; the styles package is the single source of
truth for motion CSS.

### Composition Utilities

The React port uses `@react-aria/...` primitives. The Vue port uses
`radix-vue` (already a dependency). For primitives that radix-vue does
not cover (`Calendar`, `ColorArea`, `ColorSlider`, `ColorField`,
`ColorSwatchPicker`) we wrap the native HTML element directly in a small
composable that mirrors the React Aria behaviour. These composables
live in `packages/vue/src/composables/` and are named
`useFocusRing.ts`, `usePress.ts`, `useColorAreaState.ts`, etc.

## Phase 1: Simple Components (target: 8-12 components)

These are single-name components with no sub-parts. Work proceeds one
component per worker session; each session lands a single conventional
commit on `master`.

### Component 1.1: Button

**Read source from MCP, then align:**

1. Open `packages/vue/src/components/button/Button.vue` and
   `packages/vue/src/components/button/index.ts`. Compare prop surface to
   the React API: `variant`, `size`, `fullWidth`, `isDisabled`,
   `isPending`, `isIconOnly`, `onPress`, `children`, `class`.
2. Replace the current `<Button>` implementation so that:
   - `variant` accepts `'primary' | 'secondary' | 'tertiary' |
     'outline' | 'ghost' | 'danger' | 'danger-soft'`. The existing
     `light` / `shadow` variants are removed and the deprecation is
     called out in the migration section of `MAINTENANCE.md`.
   - `size` is `'sm' | 'md' | 'lg'`. Drop `tiny`/`huge` if present.
   - `isIconOnly` swaps to the `.button--icon-only` modifier that
     already exists in the styles package.
   - `isPending` adds `data-pending="true"` so the CSS handles the
     loading state via attribute selector (the React port does this too).
   - `onPress` is wired through a `usePress` composable that mirrors
     react-aria's Press event semantics (pointer + keyboard + hover
     state) and is reusable in Phase 3.
3. Update `apps/docs/components/button.md` so every demo matches the new
   API. The `Loading` demo must use the `({isPending}) => ...` render
   prop pattern shown in the React docs.
4. Add a `packages/vue/src/components/button/__tests__/Button.test.ts`
   that covers `isPending`, `isDisabled`, `onPress`, variant/size
   combinations, and `isIconOnly`.
5. Verify with:
   ```
   pnpm -F @misaki-mei/heroui-vue lint
   pnpm -F @misaki-mei/heroui-vue test --run
   pnpm -F @misaki-mei/heroui-vue build
   ```
6. Update the `Component Coverage` section of `README.md` if the
   component status changes.

Commit message: `refactor(button): align with @heroui/react v3.2.x API`.

### Components 1.2-1.12

Apply the same template to:

| # | Component | Notes |
| | ---------- | ----- |
| 1.2 | Badge | Drop `flat` variant if present, add `outline`/`shadow`. |
| 1.3 | Chip | Single-name, no sub-parts. |
| 1.4 | CloseButton | Already aligns. Confirm. |
| 1.5 | Kbd | Already aligns. Confirm. |
| 1.6 | Link | Confirm prop names. |
| 1.7 | Separator | `orientation` prop, no children. |
| 1.8 | Skeleton | Confirms no children. |
| 1.9 | Spinner | `color` and `size` props. |
| 1.10 | ProgressBar | Single-name. |
| 1.11 | ProgressCircle | Single-name. |
| 1.12 | Meter | Single-name. |

For each component, the worker session:

1. Reads the React docs/source via MCP.
2. Maps the existing Vue implementation onto the React API surface.
3. Updates the component, the demo docs, and the test file.
4. Adds a `Changelog` entry.

## Phase 2: Form Components (target: 15 components)

These bring in the dot-subcomponent pattern and the `Field` /
`Label` / `Description` / `FieldError` / `ErrorMessage` utility set.

### Pre-work

- Extract `Field`/`Label`/`Description`/`FieldError`/`ErrorMessage` as
  reusable utilities in `packages/vue/src/utils/field.ts` if they are
  are not already shared.
- Confirm `Label`/`Description`/`FieldError`/`ErrorMessage` match the
  React API.

### Components

| # | Component | Sub-parts |
| | ---------- | --------- |
| 2.1 | Input | none |
| 2.2 | TextArea | none |
| 2.3 | TextField | Root, Label, Input, Description, FieldError |
| 2.4 | InputGroup | Root, Prefix, Suffix, |
| 2.5 | Checkbox | Root, Indicator, Label |
| 2.6 | CheckboxGroup | Root, Label, Description, Items, ErrorMessage |
| 2.7 | RadioGroup | Root, Items, Indicator, Label, Description |
| 2.8 | Switch | Root, Thumb, Indicator |
| 2.9 | SearchField | Root, Label, Input, StartIcon, EndIcon |
| 2.10 | NumberField | Root, Label, Group, Input, Stepper, Description |
| 2.11 | Fieldset | Root, Legend, Actions, Group, Label, Description |
| 2.12 | InputOTP | Root, Group, Slot |
| 2.13 | Form | Root (uses native form) |

## Phase 3: Composite Interaction Components (target: 15 components)

Modal/Drawer/Popover/Dropdown/Select/Autocomplete need focus-trap and
portal infrastructure. The work split:

1. Land `composables/useFocusTrap.ts` and `composables/usePortal.ts`.
2. Land `Modal` and `Drawer` (they share the focus-trap layer).
3. Land `Popover` and `Dropdown` (positioning layer uses
   `@floating-ui/dom`).
4. Land `Select`, `Autocomplete`, `Toast`, `Tabs`, `Toolbar`,
   `Pagination`, `AlertDialog`, `Accordion`, `Breadcrumbs`, `Avatar`,
   `ListBox`, `TagGroup`.

## Phase 4: Color and Surface (target: 7 components)

These depend on the `Color` object and `parseColor` utility.

1. Land `composables/useColor.ts` and `utils/parseColor.ts` (port of
   `@react-types/color`).
2. Land `ColorSwatch`, `ColorField`, `ColorSlider`, `ColorArea`,
   `ColorSwatchPicker`, `ColorPicker`.
3. Land `Surface` and `Text` utility components.

## Phase 5: Documentation, Migration Guide, Release

1. Update `apps/docs/components/*.md` so every demo matches the new
   API.
2. Add a `MIGRATION.md` with a per-component v3.0.x -> v3.2.x change
   table.
3. Cut a release candidate `0.2.0-rc.1`, run a public smoke test.
4. Cut `0.2.0` once the release candidate looks healthy.

## Cross-cutting Rules

- **Do not regress `lint`, `test`, `build`.** A green local run is
  required before pushing.
- **Update `README.md` `Component Coverage`** in the same commit if
  the component's status changed.
- **Update `CHANGELOG.md`** under a fresh `## Unreleased` section for
  every component migration. Group entries under `### Refactored`
  when multiple components are in one PR.
- **Match the React API exactly**, including prop casing, even where
  Vue community convention would prefer otherwise. The whole point
  this refactor is that docs that work in React also work in Vue.
- **Avoid new dependencies.** Add `@floating-ui/dom` only when Phase 3
  needs it, and add it once for the whole phase rather than per
  component.
- **Prefer the styles package as the source of truth** for classes.
  Do not duplicate Tailwind variants inside `packages/vue`.

## Session-Start Checklist (for new sessions)

A worker session picking this plan up fresh should run, in order:

1. `git pull --rebase origin master` to make sure local is current.
2. `pnpm install --prefer-offline` to confirm tooling still works.
3. Pick the next component from the Phase table.
4. Call `mcp__heroui-react__get_component_docs` with that name.
5. Open the existing `packages/vue/src/components/<name>/` files.
6. Open the existing `apps/docs/components/<name>.md` and `apps/docs/demos/<name>-*.vue` files.
7. Refactor the component, demo, and tests together.
8. Run `pnpm -F @misaki-mei/heroui-vue lint test build` and fix until green.
9. Update `README.md` and `CHANGELOG.md`.
10. Commit with the conventional message and push.

## Out of Scope

- Adopting `framer-motion` (Vue keeps CSS transitions).
- Adopting React Aria Components directly (we use `radix-vue`).
- Re-shipping the `0.0.x` line of API changes.
- Dropping components that exist in v3.0.x but are no longer present in
  v3.2.x. We deprecate them and keep them working until v1.0.

## Open Questions

- Should we keep Vue's existing `light` / `shadow` variants as a
  non-breaking extension or remove them? The plan above assumes
  removal but the team should decide.
- Should `Button` add a `radius` prop on top of the React surface to
  address the community use case for pill buttons? Plan assumes no,
  because the React port covers that via custom variants.
- How aggressively do we deprecate `SwitchGroup`, `Tag`, `Radio` (single
  not group), `EmptyState`, `Header`, `ScrollShadow`? Plan keeps
  them but marks as deprecated.