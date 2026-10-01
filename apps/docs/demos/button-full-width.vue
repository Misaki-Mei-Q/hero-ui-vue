<template>
  <div class="w-full max-w-sm space-y-3">
    <Button full-width>Primary Button</Button>
    <Button full-width>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
      With Icon
    </Button>
  </div>
</template>

<script setup>
import { Button } from '@misaki-mei/heroui-vue'
</script>
