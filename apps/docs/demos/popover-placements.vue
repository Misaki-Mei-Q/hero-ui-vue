<script setup lang="ts">
import { Popover, Button } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <Popover title="Top" placement="top">
      <p>Content on top.</p>
      <template #trigger>
        <Button variant="secondary">Top</Button>
      </template>
    </Popover>
    <Popover title="Right" placement="right">
      <p>Content on the right.</p>
      <template #trigger>
        <Button variant="secondary">Right</Button>
      </template>
    </Popover>
    <Popover title="Bottom" placement="bottom">
      <p>Content on the bottom.</p>
      <template #trigger>
        <Button variant="secondary">Bottom</Button>
      </template>
    </Popover>
    <Popover title="Left" placement="left">
      <p>Content on the left.</p>
      <template #trigger>
        <Button variant="secondary">Left</Button>
      </template>
    </Popover>
  </div>
</template>