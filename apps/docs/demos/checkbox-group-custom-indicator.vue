<template>
  <CheckboxGroup v-model="selectedFeatures" name="features">
    <Label>Features</Label>
    <Description>Select the features you want</Description>

    <Checkbox value="notifications">
      <template #indicator="{ isSelected }">
        <svg
          v-if="isSelected"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </template>
      <Label>Email notifications</Label>
      <Description>Receive updates via email</Description>
    </Checkbox>

    <Checkbox value="newsletter">
      <template #indicator="{ isSelected }">
        <svg
          v-if="isSelected"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </template>
      <Label>Newsletter</Label>
      <Description>Get weekly newsletters</Description>
    </Checkbox>
  </CheckboxGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, CheckboxGroup, Description, Label } from '@misaki-mei-q/heroui-vue'

const selectedFeatures = ref<string[]>(['newsletter'])
</script>
