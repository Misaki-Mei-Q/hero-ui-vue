<template>
  <div class="demo-number-field-stack">
    <NumberField :default-value="1024" :min-value="0" name="width">
      <Label>Width (Custom Icons)</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton>
          <SearchMinusIcon />
        </NumberFieldDecrementButton>
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton>
          <SearchPlusIcon />
        </NumberFieldIncrementButton>
      </NumberFieldGroup>
      <Description>Custom icon children</Description>
    </NumberField>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { Description, Label, NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from '@misaki-mei-q/heroui-vue'

const SearchMinusIcon = defineComponent({
  setup: () => () => h('svg', { height: 16, viewBox: '0 0 16 16', width: 16 }, [
    h('path', {
      d: 'M6.75 11a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5m0 1.5a5.73 5.73 0 0 0 3.501-1.188l2.719 2.718a.75.75 0 1 0 1.06-1.06l-2.718-2.719A5.75 5.75 0 1 0 6.75 12.5m-2-6.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z',
      fill: 'currentColor',
      'fill-rule': 'evenodd',
    }),
  ]),
})

const SearchPlusIcon = defineComponent({
  setup: () => () => h('svg', { height: 16, viewBox: '0 0 16 16', width: 16 }, [
    h('path', {
      d: 'M6.75 11a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5m0 1.5a5.73 5.73 0 0 0 3.501-1.188l2.719 2.718a.75.75 0 1 0 1.06-1.06l-2.718-2.719A5.75 5.75 0 1 0 6.75 12.5m.75-7.75a.75.75 0 0 0-1.5 0V6H4.75a.75.75 0 0 0 0 1.5H6v1.25a.75.75 0 0 0 1.5 0V7.5h1.25a.75.75 0 0 0 0-1.5H7.5z',
      fill: 'currentColor',
      'fill-rule': 'evenodd',
    }),
  ]),
})
</script>

<style lang="less">
.demo-number-field-stack {
  display: flex;
  width: 100%;
  max-width: 16rem;
  flex-direction: column;
  gap: 1rem;
}

.demo-number-field-input {
  width: 120px;
}
</style>
