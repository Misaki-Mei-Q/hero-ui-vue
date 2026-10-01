<script setup lang="ts">
import {
  Description,
  Label as FormLabel,
  NumberField,
  NumberFieldDecrementButton,
  NumberFieldGroup,
  NumberFieldIncrementButton,
  NumberFieldInput,
} from '@misaki-mei/heroui-vue'
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Basic with min/max</h3>
      <div style="display: flex; flex-direction: column; gap: 0.25rem; max-width: 200px">
        <FormLabel>Width</FormLabel>
        <NumberField :default-value="0" :min-value="0" name="width">
          <NumberFieldGroup>
            <NumberFieldDecrementButton />
            <NumberFieldInput />
            <NumberFieldIncrementButton />
          </NumberFieldGroup>
        </NumberField>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Step + percent format</h3>
      <div style="display: flex; flex-direction: column; gap: 0.25rem; max-width: 200px">
        <FormLabel>Percentage</FormLabel>
        <NumberField
          :default-value="0.5"
          :format-options="{ style: 'percent' }"
          :max-value="1"
          :min-value="0"
          :step="0.1"
          name="percentage"
        >
          <NumberFieldGroup>
            <NumberFieldDecrementButton />
            <NumberFieldInput />
            <NumberFieldIncrementButton />
          </NumberFieldGroup>
        </NumberField>
        <Description>Value must be between 0 and 100</Description>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Disabled</h3>
      <div style="display: flex; flex-direction: column; gap: 0.25rem; max-width: 200px">
        <FormLabel>Quantity (locked)</FormLabel>
        <NumberField is-disabled :default-value="10" name="locked">
          <NumberFieldGroup>
            <NumberFieldDecrementButton />
            <NumberFieldInput />
            <NumberFieldIncrementButton />
          </NumberFieldGroup>
        </NumberField>
      </div>
    </section>
  </div>
</template>