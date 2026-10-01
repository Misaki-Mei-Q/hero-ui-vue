<script setup lang="ts">
import { Tooltip, Button } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div class="flex items-center gap-3">
    <Tooltip content="Save changes to disk">
      <Button>Save</Button>
    </Tooltip>
    <Tooltip content="This action cannot be undone">
      <Button variant="danger">Delete</Button>
    </Tooltip>
  </div>
</template>