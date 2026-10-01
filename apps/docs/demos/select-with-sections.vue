<script setup lang="ts">
import { ref } from 'vue'
import {
  Select,
  ListBoxItem,
  ListBoxSection,
} from '@misaki-mei/heroui-vue'

const value = ref<string | null>(null)
</script>

<template>
  <Select v-model="value" label="Framework" placeholder="Pick a framework">
    <ListBoxSection title="Front-end">
      <ListBoxItem value="vue">Vue</ListBoxItem>
      <ListBoxItem value="react">React</ListBoxItem>
      <ListBoxItem value="svelte">Svelte</ListBoxItem>
    </ListBoxSection>
    <ListBoxSection title="Back-end">
      <ListBoxItem value="node">Node.js</ListBoxItem>
      <ListBoxItem value="go">Go</ListBoxItem>
      <ListBoxItem value="python">Python</ListBoxItem>
    </ListBoxSection>
  </Select>
</template>