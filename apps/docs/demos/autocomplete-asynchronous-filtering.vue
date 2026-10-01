<template>
  <div class="demo-autocomplete-width">
    <Autocomplete
      v-model="selectedCharacter"
      label="Search a Star Wars character"
      placeholder="Search..."
      search-placeholder="Search characters..."
      empty-text="No results found"
      :items="filteredCharacters"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Autocomplete } from '@misaki-mei/heroui-vue'

const selectedCharacter = ref<string | number | null>(null)

const characters = [
  { id: 'luke', label: 'Luke Skywalker' },
  { id: 'leia', label: 'Leia Organa' },
  { id: 'han', label: 'Han Solo' },
  { id: 'vader', label: 'Darth Vader' },
  { id: 'obi-wan', label: 'Obi-Wan Kenobi' },
]

const filteredCharacters = computed(() => characters)
</script>

<style lang="less">
.demo-autocomplete-width {
  width: 16rem;
}
</style>
