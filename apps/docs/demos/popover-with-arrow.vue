<script setup lang="ts">
import { ref } from 'vue'
import { Popover, Button, Input } from '@misaki-mei/heroui-vue'

const value = ref('')
</script>

<template>
  <Popover title="Quick search" arrow>
    <div class="flex flex-col gap-2">
      <Input v-model="value" placeholder="Type to search..." />
      <Text class="text-default-500 text-xs">
        Press Enter to confirm.
      </Text>
    </div>
    <template #trigger>
      <Button variant="secondary">Filter</Button>
    </template>
  </Popover>
</template>