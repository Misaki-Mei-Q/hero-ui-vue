<script setup lang="ts">
import { ref } from 'vue'
import {
  Select,
  ListBoxItem,
  ListBoxItemIndicator,
  Description,
} from '@misaki-mei/heroui-vue'

const value = ref<string | null>(null)
</script>

<template>
  <Select
    v-model="value"
    label="Country"
    placeholder="Select a country"
    description="Where do you live?"
  >
    <ListBoxItem value="us">United States</ListBoxItem>
    <ListBoxItem value="ca">Canada</ListBoxItem>
    <ListBoxItem value="uk">United Kingdom</ListBoxItem>
    <ListBoxItem value="de">Germany</ListBoxItem>
    <template #value="{ selectedKeys }">
      <span v-if="selectedKeys.length">
        {{ ['us', 'ca', 'uk', 'de'].includes(String(selectedKeys[0])) ? selectedKeys[0]?.toString().toUpperCase() : selectedKeys[0] }}
      </span>
    </template>
  </Select>
</template>