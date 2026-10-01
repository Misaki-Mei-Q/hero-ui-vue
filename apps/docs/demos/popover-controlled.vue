<script setup lang="ts">
import { ref } from 'vue'
import { Popover, Button, Text } from '@misaki-mei/heroui-vue'

const open = ref(false)
</script>

<template>
  <Popover v-model:open="open" title="Delete this project?">
    <Text>This action cannot be undone.</Text>
    <template #close>
      <Button variant="danger" @click="open = false">
        Confirm delete
      </Button>
    </template>
    <template #trigger>
      <Button>Open controlled</Button>
    </template>
  </Popover>
</template>