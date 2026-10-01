<template>
  <div class="demo-number-field-full">
    <NumberField full-width :default-value="1024" :min-value="0" name="width">
      <Label>Width</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
    </NumberField>
  </div>
</template>

<script setup lang="ts">
import { Label, NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from '@misaki-mei-q/heroui-vue'
</script>

<style lang="less">
.demo-number-field-full {
  width: 400px;
}
</style>
