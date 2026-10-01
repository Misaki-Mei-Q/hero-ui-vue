<template>
  <div class="demo-autocomplete-states">
    <Autocomplete
      label="Invalid"
      placeholder="Pick a country"
      search-placeholder="Search countries..."
      is-invalid
      :items="countries"
    />

    <Autocomplete
      label="Disabled"
      placeholder="Unavailable"
      is-disabled
      :items="countries"
    />
  </div>
</template>

<script setup lang="ts">
import { Autocomplete } from '@misaki-mei/heroui-vue'

const countries = [
  { id: 'us', label: 'United States' },
  { id: 'jp', label: 'Japan' },
  { id: 'sg', label: 'Singapore' },
  { id: 'de', label: 'Germany' },
]
</script>

<style lang="less">
.demo-autocomplete-states {
  display: grid;
  width: min(100%, 34rem);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 640px) {
  .demo-autocomplete-states {
    grid-template-columns: 1fr;
  }
}
</style>
