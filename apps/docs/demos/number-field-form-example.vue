<template>
  <form class="demo-number-field-form" @submit.prevent="handleSubmit">
    <NumberField
      v-model="value"
      is-required
      :is-invalid="isOutOfStock"
      :max-value="5"
      :min-value="1"
      name="quantity"
    >
      <Label :is-invalid="isOutOfStock" is-required>Order quantity</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <FieldError v-if="isOutOfStock">Only {{ stockAvailable }} items left in stock</FieldError>
      <Description v-else>Only {{ stockAvailable }} items available</Description>
    </NumberField>
    <Button class="demo-number-field-submit" :is-disabled="!canSubmit" :is-pending="isSubmitting" type="submit" variant="primary">
      <Spinner v-if="isSubmitting" color="current" size="sm" />
      {{ isSubmitting ? 'Processing...' : 'Place Order' }}
    </Button>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Button, Description, FieldError, Label, NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput, Spinner } from '@misaki-mei/heroui-vue'

const stockAvailable = 3
const value = ref<number | undefined>()
const isSubmitting = ref(false)
const isOutOfStock = computed(() => value.value !== undefined && value.value > stockAvailable)
const canSubmit = computed(() => value.value !== undefined && value.value >= 1 && value.value <= stockAvailable)

const handleSubmit = () => {
  if (!canSubmit.value) return

  isSubmitting.value = true
  window.setTimeout(() => {
    value.value = undefined
    isSubmitting.value = false
  }, 1200)
}
</script>

<style lang="less">
.demo-number-field-form {
  display: flex;
  width: 280px;
  flex-direction: column;
  gap: 1rem;
}

.demo-number-field-input {
  width: 120px;
}

.demo-number-field-submit {
  width: 100%;
}
</style>
