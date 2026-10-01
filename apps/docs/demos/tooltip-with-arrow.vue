<script setup lang="ts">
import { Tooltip, Button } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div class="flex items-center gap-3">
    <Tooltip content="With a directional arrow" arrow>
      <Button>Hover me</Button>
    </Tooltip>
    <Tooltip content="Custom offset" arrow :offset="14">
      <Button variant="secondary">Larger offset</Button>
    </Tooltip>
  </div>
</template>