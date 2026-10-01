<template>
  <div class="demo-number-field-stack">
    <NumberField
      v-model="value"
      is-required
      :format-options="{ style: 'percent' }"
      :is-invalid="isInvalid"
      :max-value="1"
      :min-value="0"
      name="percentage"
      :step="0.1"
    >
      <Label :is-invalid="isInvalid" is-required>Percentage</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <FieldError v-if="isInvalid">Percentage must be between 0 and 100</FieldError>
      <Description v-else>Enter a value between 0 and 100</Description>
    </NumberField>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Description, FieldError, Label, NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from '@misaki-mei-q/heroui-vue'

const value = ref<number | undefined>()
const isInvalid = computed(() => value.value !== undefined && (value.value < 0 || value.value > 100))
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
