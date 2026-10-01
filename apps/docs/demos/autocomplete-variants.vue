<template>
  <div class="demo-autocomplete-variants">
    <div class="demo-autocomplete-variant-section">
      <h3>Single Select Variants</h3>
      <Autocomplete
        v-model="selectedPrimary"
        label="Primary variant"
        placeholder="Select one"
        search-placeholder="Search..."
        :items="items"
      />
      <Autocomplete
        v-model="selectedSecondary"
        label="Secondary variant"
        placeholder="Select one"
        search-placeholder="Search..."
        variant="secondary"
        :items="items"
      />
    </div>

    <div class="demo-autocomplete-variant-section">
      <h3>Multiple Select Variants</h3>
      <Autocomplete
        v-model="selectedPrimaryMultiple"
        label="Primary variant"
        placeholder="Select multiple"
        search-placeholder="Search..."
        selection-mode="multiple"
        :items="items"
      />
      <Autocomplete
        v-model="selectedSecondaryMultiple"
        label="Secondary variant"
        placeholder="Select multiple"
        search-placeholder="Search..."
        selection-mode="multiple"
        variant="secondary"
        :items="items"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autocomplete } from '@misaki-mei/heroui-vue'

const selectedPrimary = ref<string | number | null>(null)
const selectedSecondary = ref<string | number | null>(null)
const selectedPrimaryMultiple = ref<(string | number)[]>([])
const selectedSecondaryMultiple = ref<(string | number)[]>([])

const items = [
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
  { id: 'option4', label: 'Option 4' },
]
</script>

<style lang="less">
.demo-autocomplete-variants {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.demo-autocomplete-variant-section {
  display: flex;
  width: 16rem;
  flex-direction: column;
  gap: 1rem;
}

.demo-autocomplete-variants .demo-autocomplete-variant-section h3 {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
}
</style>
