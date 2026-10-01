<template>
  <div class="demo-number-field-stack">
    <NumberField :default-value="100" :min-value="0" name="primary-width" variant="primary">
      <Label>Primary variant</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
    </NumberField>
    <NumberField :default-value="100" :min-value="0" name="secondary-width" variant="secondary">
      <Label>Secondary variant</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
    </NumberField>
  </div>
</template>

<script setup lang="ts">
import { Label, NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from '@misaki-mei/heroui-vue'
</script>

<style lang="less">
.demo-number-field-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-number-field-input {
  width: 120px;
}
</style>
