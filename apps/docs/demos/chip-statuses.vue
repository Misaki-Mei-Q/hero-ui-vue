<template>
  <div class="demo-chip-stack">
    <div class="demo-chip-row">
      <Chip variant="primary">
        <DemoIcon name="dot" class="demo-chip-dot" />
        <ChipLabel>Default</ChipLabel>
      </Chip>
      <Chip color="success" variant="primary">
        <DemoIcon name="dot" class="demo-chip-dot" />
        <ChipLabel>Active</ChipLabel>
      </Chip>
      <Chip color="warning" variant="primary">
        <DemoIcon name="dot" class="demo-chip-dot" />
        <ChipLabel>Pending</ChipLabel>
      </Chip>
      <Chip color="danger" variant="primary">
        <DemoIcon name="dot" class="demo-chip-dot" />
        <ChipLabel>Inactive</ChipLabel>
      </Chip>
    </div>

    <div class="demo-chip-row">
      <Chip>
        <DemoIcon name="info" />
        <ChipLabel>New Feature</ChipLabel>
      </Chip>
      <Chip color="success">
        <DemoIcon name="check" />
        <ChipLabel>Available</ChipLabel>
      </Chip>
      <Chip color="warning">
        <DemoIcon name="warning" />
        <ChipLabel>Beta</ChipLabel>
      </Chip>
      <Chip color="danger">
        <DemoIcon name="ban" />
        <ChipLabel>Deprecated</ChipLabel>
      </Chip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { Chip, ChipLabel } from '@misaki-mei-q/heroui-vue'

const iconPaths: Record<string, string[]> = {
  dot: ['M12 12h.01'],
  info: ['M12 16v-4', 'M12 8h.01', 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z'],
  check: ['M20 6 9 17l-5-5'],
  warning: ['M12 9v4', 'M12 17h.01', 'M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z'],
  ban: ['M4.9 4.9 19.1 19.1', 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z'],
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
.demo-chip-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

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
