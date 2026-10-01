<template>
  <div class="demo-number-field-stack">
    <NumberField :default-value="1024" :min-value="0" name="width">
      <Label>Width</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <Description>Enter the width in pixels</Description>
    </NumberField>
    <NumberField
      :default-value="0.5"
      :format-options="{ style: 'percent' }"
      :max-value="1"
      :min-value="0"
      :step="0.1"
      name="percentage"
    >
      <Label>Percentage</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <Description>Value must be between 0 and 100</Description>
    </NumberField>
  </div>
</template>

<script setup lang="ts">
import { Description, Label, NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from '@misaki-mei-q/heroui-vue'
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
