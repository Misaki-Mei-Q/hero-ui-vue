<template>
  <div class="demo-autocomplete-width">
    <Autocomplete
      v-model="selectedAnimal"
      label="Animal"
      placeholder="Select an animal"
      search-placeholder="Search animals..."
      :disabled-keys="['cat', 'kangaroo']"
      :items="animals"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autocomplete } from '@misaki-mei/heroui-vue'

const selectedAnimal = ref<string | number | null>(null)

const animals = [
  { id: 'dog', label: 'Dog' },
  { id: 'cat', label: 'Cat' },
  { id: 'bird', label: 'Bird' },
  { id: 'kangaroo', label: 'Kangaroo' },
  { id: 'elephant', label: 'Elephant' },
  { id: 'tiger', label: 'Tiger' },
]
</script>

<style lang="less">
.demo-autocomplete-width {
  width: 16rem;
}
</style>
