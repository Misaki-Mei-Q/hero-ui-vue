<template>
  <NumberField
    class="demo-number-field-width"
    :default-value="99"
    :format-options="{ currency: 'EUR', currencySign: 'accounting', style: 'currency' }"
    :min-value="0"
    name="amount"
  >
    <Label>Number field with chevrons</Label>
    <NumberFieldGroup class="demo-number-field-chevron-group">
      <NumberFieldInput />
      <div class="demo-number-field-chevron-buttons">
        <NumberFieldIncrementButton class="demo-number-field-chevron-button">
          <ChevronUpIcon />
        </NumberFieldIncrementButton>
        <NumberFieldDecrementButton class="demo-number-field-chevron-button">
          <ChevronDownIcon />
        </NumberFieldDecrementButton>
      </div>
    </NumberFieldGroup>
  </NumberField>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { Label, NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from '@misaki-mei/heroui-vue'

const ChevronUpIcon = defineComponent({
  setup: () => () => h('svg', { 'aria-hidden': 'true', height: 11, viewBox: '0 0 16 16', width: 11 }, [
    h('path', {
      d: 'M13.03 10.53a.75.75 0 0 1-1.06 0L8 6.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06',
      fill: 'currentColor',
      'fill-rule': 'evenodd',
    }),
  ]),
})

const ChevronDownIcon = defineComponent({
  setup: () => () => h('svg', { 'aria-hidden': 'true', height: 11, viewBox: '0 0 16 16', width: 11 }, [
    h('path', {
      d: 'M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06',
      fill: 'currentColor',
      'fill-rule': 'evenodd',
    }),
  ]),
})
</script>

<style lang="less">
.demo-number-field-width {
  width: 100%;
  max-width: 16rem;
}

.demo-number-field-chevron-group {
  grid-template-columns: 1fr 1.5rem;
}

.demo-number-field-chevron-buttons {
  display: flex;
  height: calc(100% + 2px);
  flex-direction: column;
  border-left: 1px solid color-mix(in oklab, var(--color-field-placeholder) 15%, transparent);
}

.demo-number-field-chevron-button {
  width: 1.5rem;
  height: 50%;
  min-height: 0;
  flex: 1;
  border-right: 0;
  border-left: 0;
  border-radius: 0;
  padding: 0;
}
</style>
