<template>
  <div class="demo-number-field-stack">
    <NumberField is-required :min-value="0" name="quantity">
      <Label is-required>Quantity</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
    </NumberField>
    <NumberField is-required :default-value="1" :max-value="10" :min-value="1" name="rating">
      <Label is-required>Rating</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <Description>Rate from 1 to 10</Description>
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
