<template>
  <div class="demo-autocomplete-width">
    <Autocomplete
      v-model="selectedState"
      description="Select your state of residence"
      label="State"
      placeholder="Select one"
      search-placeholder="Search states..."
      :items="states"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autocomplete } from '@misaki-mei/heroui-vue'

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
.demo-autocomplete-width {
  width: 16rem;
}
</style>
