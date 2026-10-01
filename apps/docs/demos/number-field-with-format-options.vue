<template>
  <div class="demo-number-field-stack">
    <NumberField :default-value="99" :format-options="{ currency: 'EUR', currencySign: 'accounting', style: 'currency' }" :min-value="0" name="currency-eur">
      <Label>Currency (EUR - Accounting)</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <Description>Accounting format with EUR currency</Description>
    </NumberField>
    <NumberField :default-value="99.99" :format-options="{ currency: 'USD', style: 'currency' }" :min-value="0" name="currency-usd">
      <Label>Currency (USD)</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <Description>Standard USD currency format</Description>
    </NumberField>
    <NumberField :default-value="0.5" :format-options="{ style: 'percent' }" :max-value="1" :min-value="0" name="percentage" :step="0.01">
      <Label>Percentage</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <Description>Percentage format (0-1, where 0.5 = 50%)</Description>
    </NumberField>
    <NumberField :default-value="1234.56" :format-options="{ maximumFractionDigits: 2, minimumFractionDigits: 2, style: 'decimal' }" :min-value="0" name="decimal">
      <Label>Decimal (2 decimal places)</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <Description>Decimal format with 2 decimal places</Description>
    </NumberField>
    <NumberField :default-value="1000" :format-options="{ style: 'unit', unit: 'kilogram', unitDisplay: 'short' }" :min-value="0" name="unit">
      <Label>Unit (Kilograms)</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <Description>Unit format with kilograms</Description>
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
