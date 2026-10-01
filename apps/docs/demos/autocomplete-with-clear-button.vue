<template>
  <div class="demo-autocomplete-with-state">
    <Autocomplete
      v-model="selectedAnimal"
      label="Favorite Animal"
      placeholder="Select an animal"
      search-placeholder="Search animals..."
      :items="animals"
      @clear="clearCount += 1"
    />

    <p class="demo-autocomplete-note">
      Clear pressed: {{ clearCount }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autocomplete } from '@misaki-mei/heroui-vue'

const selectedAnimal = ref<string | number | null>('dog')
const clearCount = ref(0)

const animals = [
  { id: 'cat', label: 'Cat' },
  { id: 'dog', label: 'Dog' },
  { id: 'elephant', label: 'Elephant' },
  { id: 'lion', label: 'Lion' },
  { id: 'tiger', label: 'Tiger' },
  { id: 'giraffe', label: 'Giraffe' },
]
</script>

<style lang="less">
.demo-autocomplete-with-state {
  display: flex;
  width: 16rem;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
}

.demo-autocomplete-note {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.875rem;
}
</style>
