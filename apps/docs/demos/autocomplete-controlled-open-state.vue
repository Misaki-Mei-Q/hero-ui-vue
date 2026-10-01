<template>
  <div class="demo-autocomplete-with-state">
    <Autocomplete
      v-model="selectedState"
      v-model:is-open="isOpen"
      label="State"
      placeholder="Select one"
      search-placeholder="Search states..."
      :items="states"
    />

    <Button @click="isOpen = !isOpen">
      {{ isOpen ? 'Close' : 'Open' }} Autocomplete
    </Button>

    <p class="demo-autocomplete-note">
      Autocomplete is {{ isOpen ? 'open' : 'closed' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autocomplete, Button } from '@misaki-mei/heroui-vue'

const isOpen = ref(false)
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
.demo-autocomplete-with-state {
  display: flex;
  width: 16rem;
  flex-direction: column;
  gap: 1rem;
}

.demo-autocomplete-note {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.875rem;
}
</style>
