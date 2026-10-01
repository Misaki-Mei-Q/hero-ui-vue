<script setup lang="ts">
import { Tooltip, Button } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <Tooltip content="Tooltip on top" placement="top">
      <Button variant="secondary">Top</Button>
    </Tooltip>
    <Tooltip content="Tooltip on right" placement="right">
      <Button variant="secondary">Right</Button>
    </Tooltip>
    <Tooltip content="Tooltip on bottom" placement="bottom">
      <Button variant="secondary">Bottom</Button>
    </Tooltip>
    <Tooltip content="Tooltip on left" placement="left">
      <Button variant="secondary">Left</Button>
    </Tooltip>
  </div>
</template>