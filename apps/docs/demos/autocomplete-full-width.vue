<template>
  <Surface class="demo-autocomplete-surface">
    <Autocomplete
      v-model="selectedState"
      full-width
      label="State"
      placeholder="Select one"
      search-placeholder="Search states..."
      variant="secondary"
      :items="states"
    />
  </Surface>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autocomplete, Surface } from '@misaki-mei-q/heroui-vue'

const selectedState = ref<string | number | null>(null)

const states = [
  { id: 'florida', label: 'Florida' },
  { id: 'delaware', label: 'Delaware' },
  { id: 'california', label: 'California' },
  { id: 'texas', label: 'Texas' },
  { id: 'new-york', label: 'New York' },
  { id: 'washington', label: 'Washington' },
]
</script>

<style lang="less">
.demo-autocomplete-surface {
  width: 23.75rem;
  max-width: 100%;
  padding: 1.5rem;
  border-radius: 1.5rem;
}
</style>
