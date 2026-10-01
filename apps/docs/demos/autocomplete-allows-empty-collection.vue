<template>
  <div class="demo-autocomplete-width">
    <Autocomplete
      v-model="selectedState"
      label="State"
      placeholder="Select one"
      search-placeholder="Search states..."
      empty-text="No results found"
      :items="states"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autocomplete } from '@misaki-mei/heroui-vue'

const selectedState = ref<string | number | null>(null)
const states: Array<{ id: string; label: string }> = []
</script>

<style lang="less">
.demo-autocomplete-width {
  width: 16rem;
}
</style>
