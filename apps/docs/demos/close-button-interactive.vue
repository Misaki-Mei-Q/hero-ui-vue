<template>
  <div class="demo-close-button-stack">
    <CloseButton
      :aria-label="`Close (clicked ${count} times)`"
      @on-press="count += 1"
    />
    <span class="demo-close-button-label">Clicked: {{ count }} times</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CloseButton } from '@misaki-mei/heroui-vue'

const count = ref(0)
</script>

<style lang="less">
.demo-close-button-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.demo-close-button-label {
  color: var(--color-muted-foreground);
  font-size: 0.75rem;
}
</style>
