<script setup lang="ts">
import { ref } from 'vue'
import { ComboBox, ListBoxItem } from '@misaki-mei/heroui-vue'

const value = ref<string | null>(null)

const items = [
  { key: 'apple', label: 'Apple' },
  { key: 'banana', label: 'Banana' },
  { key: 'cherry', label: 'Cherry' },
  { key: 'date', label: 'Date' },
  { key: 'elderberry', label: 'Elderberry' },
  { key: 'fig', label: 'Fig' },
  { key: 'grape', label: 'Grape' },
]
</script>

<template>
  <ComboBox
    v-model="value"
    label="Favorite fruit"
    placeholder="Pick a fruit"
    description="Search and pick one."
    :items="items"
  >
    <template #item-apple="{ item }">{{ item.label }} 🍎</template>
    <template #item-banana="{ item }">{{ item.label }} 🍌</template>
    <template #item-cherry="{ item }">{{ item.label }} 🍒</template>
  </ComboBox>
</template>