<template>
  <NumberField class="demo-number-field-width" data-custom="foo" :default-value="1024" :min-value="0" name="width">
    <Label>Width</Label>
    <NumberFieldGroup>
      <NumberFieldDecrementButton />
      <NumberFieldInput class="demo-number-field-input" />
      <NumberFieldIncrementButton />
    </NumberFieldGroup>
  </NumberField>
</template>

<script setup lang="ts">
import { Label, NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from '@misaki-mei/heroui-vue'
</script>

<style lang="less">
.demo-number-field-width {
  width: 100%;
  max-width: 16rem;
}

.demo-number-field-input {
  width: 120px;
}
</style>
