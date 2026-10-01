<template>
  <div class="demo-autocomplete-width">
    <Autocomplete
      v-model="selectedStates"
      label="States"
      placeholder="Select states"
      search-placeholder="Search states..."
      selection-mode="multiple"
      :items="states"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autocomplete } from '@misaki-mei-q/heroui-vue'

const selectedStates = ref<(string | number)[]>([])

const states = [
  { id: 'california', label: 'California' },
  { id: 'texas', label: 'Texas' },
  { id: 'florida', label: 'Florida' },
  { id: 'new-york', label: 'New York' },
  { id: 'illinois', label: 'Illinois' },
  { id: 'pennsylvania', label: 'Pennsylvania' },
]
</script>

<style lang="less">
.demo-autocomplete-width {
  width: 16rem;
}
</style>
