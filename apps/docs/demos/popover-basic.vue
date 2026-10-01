<script setup lang="ts">
import { Popover, Button, Text } from '@misaki-mei/heroui-vue'
</script>

<template>
  <Popover title="About this action">
    <Text>
      Popovers are great for surfacing additional information or quick actions
      without leaving the current context.
    </Text>
    <template #trigger>
      <Button>Open popover</Button>
    </template>
  </Popover>
</template>