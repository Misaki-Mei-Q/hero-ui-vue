<template>
  <form class="demo-autocomplete-required" @submit.prevent="handleSubmit">
    <Autocomplete
      v-model="selectedState"
      full-width
      label="State"
      name="state"
      placeholder="Select one"
      required
      search-placeholder="Search states..."
      :items="states"
    />

    <Autocomplete
      v-model="selectedCountry"
      full-width
      label="Country"
      name="country"
      placeholder="Select a country"
      required
      search-placeholder="Search countries..."
      :items="countries"
    />

    <Button type="submit">Submit</Button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autocomplete, Button } from '@misaki-mei-q/heroui-vue'

const selectedState = ref<string | number | null>(null)
const selectedCountry = ref<string | number | null>(null)

const states = [
  { id: 'florida', label: 'Florida' },
  { id: 'delaware', label: 'Delaware' },
  { id: 'california', label: 'California' },
  { id: 'texas', label: 'Texas' },
  { id: 'new-york', label: 'New York' },
  { id: 'washington', label: 'Washington' },
]

const countries = [
  { id: 'usa', label: 'United States' },
  { id: 'canada', label: 'Canada' },
  { id: 'mexico', label: 'Mexico' },
  { id: 'uk', label: 'United Kingdom' },
  { id: 'france', label: 'France' },
  { id: 'germany', label: 'Germany' },
]

const handleSubmit = () => {
  window.alert('Form submitted successfully!')
}
</script>

<style lang="less">
.demo-autocomplete-required {
  display: flex;
  width: 16rem;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
}
</style>
