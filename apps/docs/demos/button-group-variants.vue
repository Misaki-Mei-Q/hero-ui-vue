<template>
  <div class="demo-button-group-stack">
    <div
      v-for="variant in variants"
      :key="variant"
      class="demo-button-group-field"
    >
      <p class="demo-button-group-label">
        {{ labels[variant] }}
      </p>
      <ButtonGroup :variant="variant">
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

type Variant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | 'danger'

const variants: Variant[] = ['primary', 'secondary', 'tertiary', 'outline', 'ghost', 'danger']

const labels: Record<Variant, string> = {
  primary: 'Primary',
  secondary: 'Secondary',
  tertiary: 'Tertiary',
  outline: 'Outline',
  ghost: 'Ghost',
  danger: 'Danger',
}
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
