<template>
  <div class="demo-button-group-stack demo-button-group-fixed">
    <ButtonGroup full-width>
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

    <ButtonGroup full-width>
      <Button
        v-for="item in alignment"
        :key="item"
        is-icon-only
        :aria-label="item"
      >
        <ButtonGroupSeparator v-if="item !== 'left'" />
        <DemoIcon :name="item" />
      </Button>
    </ButtonGroup>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { Button, ButtonGroup, ButtonGroupSeparator } from '@misaki-mei/heroui-vue'

const alignment = ['left', 'center', 'right'] as const

const iconPaths: Record<string, string[]> = {
  left: ['M4 6h16', 'M4 10h10', 'M4 14h16', 'M4 18h10'],
  center: ['M4 6h16', 'M7 10h10', 'M4 14h16', 'M7 18h10'],
  right: ['M4 6h16', 'M10 10h10', 'M4 14h16', 'M10 18h10'],
}

const DemoIcon = defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
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
        iconPaths[props.name]?.map((d) => h('path', { d })) ?? [],
      )
  },
})
</script>

<style lang="less">
.demo-button-group-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  text-align: left;
}

.demo-button-group-fixed {
  width: 25rem;
  max-width: 100%;
}
</style>
