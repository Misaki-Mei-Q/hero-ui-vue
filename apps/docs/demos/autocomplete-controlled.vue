<template>
  <div class="demo-autocomplete-with-state">
    <Autocomplete
      v-model="selectedState"
      label="State (controlled)"
      placeholder="Select a state"
      search-placeholder="Search states..."
      :items="states"
    />

    <p class="demo-autocomplete-note">
      Selected: {{ selectedStateLabel }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Autocomplete } from '@misaki-mei/heroui-vue'

const selectedState = ref<string | number | null>('california')

const states = [
  { id: 'california', label: 'California' },
  { id: 'texas', label: 'Texas' },
  { id: 'florida', label: 'Florida' },
  { id: 'new-york', label: 'New York' },
  { id: 'illinois', label: 'Illinois' },
  { id: 'pennsylvania', label: 'Pennsylvania' },
]

const selectedStateLabel = computed(
  () => states.find((state) => state.id === selectedState.value)?.label ?? 'None',
)
</script>

<style lang="less">
.demo-autocomplete-with-state {
  display: flex;
  width: 16rem;
  flex-direction: column;
  gap: 0.5rem;
}

.demo-autocomplete-note {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.875rem;
}
</style>
