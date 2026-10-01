<template>
  <div class="demo-number-field-stack">
    <NumberField v-model="value" :min-value="0" name="width">
      <Label>Width</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput class="demo-number-field-input" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
      <Description>Current value: {{ value }}</Description>
    </NumberField>
    <div class="demo-number-field-actions">
      <Button variant="tertiary" @click="value = 0">
        Reset to 0
      </Button>
      <Button variant="tertiary" @click="value = 2048">
        Set to 2048
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Description, Label, NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from '@misaki-mei/heroui-vue'

const value = ref(1024)
</script>

<style lang="less">
.demo-number-field-stack {
  display: flex;
  width: 100%;
  max-width: 16rem;
  flex-direction: column;
  gap: 1rem;
}

.demo-number-field-actions {
  display: flex;
  gap: 0.5rem;
}

.demo-number-field-input {
  width: 120px;
}
</style>
