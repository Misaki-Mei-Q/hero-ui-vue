# Tabs

Tabbed content navigation.

## Import

```ts
import { Tab, TabIndicator, TabList, TabPanel, Tabs } from '@misaki-mei/heroui-vue'
```

## Usage

:::preview

demo-preview=../demos/tabs-basic.vue

:::

Place `<TabIndicator />` inside each `Tab` to render the animated active tab pill (primary variant) or underline (secondary variant).

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `undefined` | Controlled selected tab |
| `defaultValue` | `string` | `undefined` | Initial selected tab |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Tab layout direction |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style |
| `disabled` | `boolean` | `undefined` | Disable all tabs |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:value` | `string` | Emitted when the selected tab changes |
