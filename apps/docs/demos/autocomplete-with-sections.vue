<template>
  <div class="demo-autocomplete-width">
    <Autocomplete
      v-model="selectedCountry"
      label="Country"
      placeholder="Select a country"
      search-placeholder="Search countries..."
      :items="countries"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autocomplete } from '@misaki-mei-q/heroui-vue'

const selectedCountry = ref<string | number | null>(null)

const countries = [
  { id: 'usa', label: 'United States', section: 'North America' },
  { id: 'canada', label: 'Canada', section: 'North America' },
  { id: 'mexico', label: 'Mexico', section: 'North America' },
  { id: 'uk', label: 'United Kingdom', section: 'Europe' },
  { id: 'france', label: 'France', section: 'Europe' },
  { id: 'germany', label: 'Germany', section: 'Europe' },
  { id: 'spain', label: 'Spain', section: 'Europe' },
  { id: 'italy', label: 'Italy', section: 'Europe' },
  { id: 'japan', label: 'Japan', section: 'Asia' },
  { id: 'china', label: 'China', section: 'Asia' },
  { id: 'india', label: 'India', section: 'Asia' },
  { id: 'south-korea', label: 'South Korea', section: 'Asia' },
]
</script>

<style lang="less">
.demo-autocomplete-width {
  width: 16rem;
}
</style>
