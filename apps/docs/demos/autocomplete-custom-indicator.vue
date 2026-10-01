<template>
  <div class="demo-autocomplete-width">
    <Autocomplete
      v-model="selectedAnimal"
      label="Animal"
      placeholder="Select an animal"
      search-placeholder="Search animals..."
      :items="animals"
    >
      <template #indicator="{ className, isOpen }">
        <svg
          :class="[className, 'demo-autocomplete-indicator']"
          :data-open="isOpen"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M8 3v10M3 8h10" />
        </svg>
      </template>
    </Autocomplete>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autocomplete } from '@misaki-mei-q/heroui-vue'

const selectedAnimal = ref<string | number | null>(null)

const animals = [
  { id: 'cat', label: 'Cat' },
  { id: 'dog', label: 'Dog' },
  { id: 'elephant', label: 'Elephant' },
  { id: 'lion', label: 'Lion' },
  { id: 'tiger', label: 'Tiger' },
]
</script>

<style lang="less">
.demo-autocomplete-width {
  width: 16rem;
}

.demo-autocomplete-indicator {
  width: 0.75rem;
  height: 0.75rem;
}
</style>
