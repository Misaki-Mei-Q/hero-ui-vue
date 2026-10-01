<template>
  <Surface class="demo-autocomplete-in-surface">
    <Autocomplete
      v-model="selectedFramework"
      full-width
      label="Framework"
      placeholder="Select framework"
      search-placeholder="Search frameworks..."
      variant="secondary"
      :items="frameworks"
    />
  </Surface>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autocomplete, Surface } from '@misaki-mei/heroui-vue'

const selectedFramework = ref<string | number | null>(null)

const frameworks = [
  { id: 'vue', label: 'Vue' },
  { id: 'react', label: 'React' },
  { id: 'svelte', label: 'Svelte' },
  { id: 'solid', label: 'Solid' },
  { id: 'angular', label: 'Angular' },
]
</script>

<style lang="less">
.demo-autocomplete-in-surface {
  width: 23.75rem;
  max-width: 100%;
  padding: 1.5rem;
  border-radius: 1.5rem;
  text-align: left;
}
</style>
