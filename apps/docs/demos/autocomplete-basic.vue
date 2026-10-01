<template>
  <div class="demo-autocomplete-width">
    <Autocomplete
      v-model="selectedAnimal"
      label="Favorite Animal"
      placeholder="Select an animal"
      search-placeholder="Search animals..."
      :items="animals"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autocomplete } from '@misaki-mei/heroui-vue'

const selectedAnimal = ref<string | number | null>(null)

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
.demo-autocomplete-width {
  width: 16rem;
}
</style>
