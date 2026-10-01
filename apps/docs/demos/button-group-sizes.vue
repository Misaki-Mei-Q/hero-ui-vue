<template>
  <div class="demo-button-group-stack">
    <div
      v-for="size in sizes"
      :key="size.value"
      class="demo-button-group-field"
    >
      <p class="demo-button-group-label">
        {{ size.label }}
      </p>
      <ButtonGroup
        :size="size.value"
        variant="secondary"
      >
        <Button>First</Button>
        <Button>
          <ButtonGroupSeparator />
          Second
        </Button>
        <Button>
          <ButtonGroupSeparator />
          Third
        </Button>
      </ButtonGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, ButtonGroup, ButtonGroupSeparator } from '@misaki-mei/heroui-vue'

const sizes = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium (default)', value: 'md' },
  { label: 'Large', value: 'lg' },
] as const
</script>

<style lang="less">
.demo-button-group-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  text-align: left;
}

.demo-button-group-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  text-align: left;
}

.demo-button-group-label {
  margin: 0;
  color: var(--color-muted-foreground);
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: left;
}
</style>
