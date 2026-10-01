<template>
  <div class="demo-number-field-stack">
    <NumberField :default-value="0" :max-value="100" :min-value="0" name="step1" :step="1">
      <Label>Step: 1</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <Description>Increments by 1</Description>
    </NumberField>
    <NumberField :default-value="0" :max-value="100" :min-value="0" name="step5" :step="5">
      <Label>Step: 5</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <Description>Increments by 5</Description>
    </NumberField>
    <NumberField :default-value="0" :max-value="100" :min-value="0" name="step10" :step="10">
      <Label>Step: 10</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <Description>Increments by 10</Description>
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
