<template>
  <div class="flex gap-3">
    <ToggleButton default-selected>Bold</ToggleButton>
    <ToggleButton variant="ghost">Italic</ToggleButton>
    <ToggleButton :is-icon-only="true" aria-label="Star">
⭐
    </ToggleButton>
  </div>
</template>

<script setup>
import { ToggleButton } from '@misaki-mei-q/heroui-vue'
</script>
