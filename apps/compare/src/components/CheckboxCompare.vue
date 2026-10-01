<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, FieldError } from '@misaki-mei/heroui-vue'

const selected = ref(false)
const selected2 = ref(true)
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">States</h3>
      <div class="compare-grid" style="flex-direction: column; align-items: flex-start">
        <Checkbox v-model="selected" name="basic">Unchecked</Checkbox>
        <Checkbox v-model="selected2" name="checked">Checked</Checkbox>
        <Checkbox is-indeterminate name="indeterminate">Indeterminate</Checkbox>
        <Checkbox is-disabled name="disabled">Disabled</Checkbox>
        <Checkbox is-disabled :model-value="true" name="disabled-checked">Disabled + checked</Checkbox>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Invalid</h3>
      <div class="compare-grid" style="flex-direction: column; align-items: flex-start; gap: 0.25rem">
        <Checkbox is-invalid is-required name="agreement">I agree to the terms</Checkbox>
        <FieldError>You must accept the terms to continue</FieldError>
      </div>
    </section>
  </div>
</template>