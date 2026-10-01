<template>
  <div class="demo-autocomplete-disabled">
    <Autocomplete
      default-selected-key="california"
      is-disabled
      label="State"
      placeholder="Select one"
      :items="states"
    />

    <Autocomplete
      :default-selected-keys="['argentina', 'japan', 'france']"
      is-disabled
      label="Countries to Visit"
      placeholder="Select countries"
      selection-mode="multiple"
      :items="countries"
    />
  </div>
</template>

<script setup lang="ts">
import { Autocomplete } from '@misaki-mei-q/heroui-vue'

const states = [
  { id: 'florida', label: 'Florida' },
  { id: 'delaware', label: 'Delaware' },
  { id: 'california', label: 'California' },
  { id: 'texas', label: 'Texas' },
  { id: 'new-york', label: 'New York' },
  { id: 'washington', label: 'Washington' },
]

const countries = [
  { id: 'argentina', label: 'Argentina' },
  { id: 'venezuela', label: 'Venezuela' },
  { id: 'japan', label: 'Japan' },
  { id: 'france', label: 'France' },
  { id: 'italy', label: 'Italy' },
  { id: 'spain', label: 'Spain' },
]
</script>

<style lang="less">
.demo-autocomplete-disabled {
  display: flex;
  width: 16rem;
  flex-direction: column;
  gap: 1rem;
}
</style>
