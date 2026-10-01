<template>
  <div class="demo-button-group-row">
    <div class="demo-button-group-field">
      <p class="demo-button-group-label">
        Horizontal
      </p>
      <ButtonGroup
        orientation="horizontal"
        variant="tertiary"
      >
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

    <div class="demo-button-group-field">
      <p class="demo-button-group-label">
        Vertical
      </p>
      <ButtonGroup
        orientation="vertical"
        variant="tertiary"
      >
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
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { Button, ButtonGroup, ButtonGroupSeparator } from '@misaki-mei/heroui-vue'

const alignment = ['left', 'center', 'right', 'justify'] as const

const iconPaths: Record<string, string[]> = {
  left: ['M4 6h16', 'M4 10h10', 'M4 14h16', 'M4 18h10'],
  center: ['M4 6h16', 'M7 10h10', 'M4 14h16', 'M7 18h10'],
  right: ['M4 6h16', 'M10 10h10', 'M4 14h16', 'M10 18h10'],
  justify: ['M4 6h16', 'M4 10h16', 'M4 14h16', 'M4 18h16'],
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
.demo-button-group-row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
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
