<template>
  <div class="demo-close-button-row">
    <div class="demo-close-button-field">
      <CloseButton aria-label="Close with circle icon">
        <CircleXIcon />
      </CloseButton>
      <span class="demo-close-button-label">Custom Icon</span>
    </div>
    <div class="demo-close-button-field">
      <CloseButton aria-label="Close with alternative icon">
        <XIcon />
      </CloseButton>
      <span class="demo-close-button-label">Alternative Icon</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { CloseButton } from '@misaki-mei/heroui-vue'

const XIcon = defineComponent({
  setup() {
    return () =>
      h(
        'svg',
        {
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'aria-hidden': 'true',
        },
        [h('path', { d: 'M18 6 6 18' }), h('path', { d: 'M6 6l12 12' })],
      )
  },
})

const CircleXIcon = defineComponent({
  setup() {
    return () =>
      h(
        'svg',
        {
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'aria-hidden': 'true',
        },
        [
          h('circle', { cx: '12', cy: '12', r: '10' }),
          h('path', { d: 'M15 9 9 15' }),
          h('path', { d: 'M9 9l6 6' }),
        ],
      )
  },
})
</script>

<style lang="less">
.demo-close-button-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.demo-close-button-field {
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
