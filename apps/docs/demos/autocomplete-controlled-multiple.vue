<template>
  <div class="demo-autocomplete-with-state">
    <Autocomplete
      v-model="selectedStates"
      label="States (controlled)"
      placeholder="Select states"
      search-placeholder="Search states..."
      selection-mode="multiple"
      :items="states"
    />

    <p class="demo-autocomplete-note">
      Selected: {{ selectedStateLabels }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Autocomplete } from '@misaki-mei/heroui-vue'

const selectedStates = ref<(string | number)[]>(['california', 'texas'])

const states = [
  { id: 'california', label: 'California' },
  { id: 'texas', label: 'Texas' },
  { id: 'florida', label: 'Florida' },
  { id: 'new-york', label: 'New York' },
  { id: 'illinois', label: 'Illinois' },
  { id: 'pennsylvania', label: 'Pennsylvania' },
]

const selectedStateLabels = computed(() => {
  const labels = selectedStates.value
    .map((key) => states.find((state) => state.id === key)?.label)
    .filter(Boolean)

  return labels.length ? labels.join(', ') : 'None'
})
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
