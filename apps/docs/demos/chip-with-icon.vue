<template>
  <div class="demo-chip-row">
    <Chip>
      <DemoIcon name="dot" class="demo-chip-dot" />
      <ChipLabel>Information</ChipLabel>
    </Chip>
    <Chip color="success">
      <DemoIcon name="check" />
      <ChipLabel>Completed</ChipLabel>
    </Chip>
    <Chip color="warning">
      <DemoIcon name="clock" />
      <ChipLabel>Pending</ChipLabel>
    </Chip>
    <Chip color="danger">
      <DemoIcon name="x" />
      <ChipLabel>Failed</ChipLabel>
    </Chip>
    <Chip color="accent">
      <ChipLabel>Label</ChipLabel>
      <DemoIcon name="chevron-down" />
    </Chip>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { Chip, ChipLabel } from '@misaki-mei-q/heroui-vue'

const iconPaths: Record<string, string[]> = {
  dot: ['M12 12h.01'],
  check: ['M20 6 9 17l-5-5'],
  clock: ['M12 7v5l3 2', 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z'],
  x: ['M18 6 6 18', 'M6 6l12 12'],
  'chevron-down': ['M6 9l6 6 6-6'],
}

const DemoIcon = defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => {
      if (props.name === 'dot') {
        return h(
          'svg',
          {
            viewBox: '0 0 24 24',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          [h('circle', { cx: '12', cy: '12', r: '4' })],
        )
      }

      return h(
        'svg',
        {
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2.5',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'aria-hidden': 'true',
        },
        iconPaths[props.name]?.map((d) => h('path', { d })) ?? [],
      )
    }
  },
})
</script>

<style lang="less">
.demo-chip-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}

.chip svg {
  width: 0.875rem;
  height: 0.875rem;
  flex-shrink: 0;
}

.chip .demo-chip-dot {
  width: 0.375rem;
  height: 0.375rem;
}
</style>
