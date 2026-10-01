<script setup lang="ts">
import { ref } from 'vue'
import { ComboBox, ListBoxItem, ListBoxSection } from '@misaki-mei/heroui-vue'

const value = ref<string | null>(null)

const items = [
  {
    title: 'Fruits',
    children: [
      { key: 'apple', label: 'Apple' },
      { key: 'banana', label: 'Banana' },
      { key: 'cherry', label: 'Cherry' },
    ],
  },
  {
    title: 'Vegetables',
    children: [
      { key: 'carrot', label: 'Carrot' },
      { key: 'lettuce', label: 'Lettuce' },
      { key: 'tomato', label: 'Tomato' },
    ],
  },
]
</script>

<template>
  <ComboBox v-model="value" label="Food" :items="items">
    <ListBoxSection v-for="section in items" :key="section.title" :title="section.title">
      <ListBoxItem v-for="item in section.children" :key="item.key" :value="item.key">
        {{ item.label }}
      </ListBoxItem>
    </ListBoxSection>
  </ComboBox>
</template>