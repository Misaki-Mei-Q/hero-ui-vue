<template>
  <div class="demo-number-field-stack">
    <NumberField is-invalid is-required :min-value="0" name="quantity" :value="-5">
      <Label is-invalid is-required>Quantity</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <FieldError>Quantity must be greater than or equal to 0</FieldError>
    </NumberField>
    <NumberField
      is-invalid
      :format-options="{ style: 'percent' }"
      :max-value="1"
      :min-value="0"
      name="percentage"
      :step="0.1"
      :value="1.5"
    >
      <Label is-invalid>Percentage</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <FieldError>Percentage must be between 0 and 100</FieldError>
    </NumberField>
  </div>
</template>

<script setup lang="ts">
import { FieldError, Label, NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from '@misaki-mei-q/heroui-vue'
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
