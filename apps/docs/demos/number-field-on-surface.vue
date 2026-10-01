<template>
  <Surface class="demo-number-field-surface">
    <NumberField :default-value="1024" :min-value="0" name="width" variant="secondary">
      <Label>Width</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <Description>Enter the width in pixels</Description>
    </NumberField>
    <NumberField
      :default-value="0.5"
      :format-options="{ style: 'percent' }"
      :max-value="1"
      :min-value="0"
      name="percentage"
      :step="0.1"
      variant="secondary"
    >
      <Label>Percentage</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <Description>Value must be between 0 and 100</Description>
    </NumberField>
  </Surface>
</template>

<script setup lang="ts">
import { Description, Label, NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput, Surface } from '@misaki-mei-q/heroui-vue'
</script>

<style lang="less">
.demo-number-field-surface {
  display: flex;
  width: 100%;
  max-width: 280px;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1.5rem;
  padding: 1.5rem;
}
</style>
