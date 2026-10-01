<script setup lang="ts">
import { ref } from 'vue'
import {
  Select,
  ListBoxItem,
} from '@misaki-mei/heroui-vue'

const value = ref<string[]>([])
</script>

<template>
  <Select
    v-model="value"
    selection-mode="multiple"
    label="Tags"
    placeholder="Select tags"
  >
    <ListBoxItem value="vue">Vue</ListBoxItem>
    <ListBoxItem value="ts">TypeScript</ListBoxItem>
    <ListBoxItem value="js">JavaScript</ListBoxItem>
    <ListBoxItem value="css">CSS</ListBoxItem>
  </Select>
</template>