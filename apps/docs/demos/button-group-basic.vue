<template>
  <div class="demo-button-group-stack">
    <ButtonGroup>
      <Button>Merge pull request</Button>
      <Button is-icon-only aria-label="More options">
        <ButtonGroupSeparator />
        <DemoIcon name="chevron-down" />
      </Button>
    </ButtonGroup>

    <div class="demo-button-group-row">
      <ButtonGroup variant="tertiary">
        <Button>
          <DemoIcon name="fork" />
          Fork
        </Button>
        <Button is-icon-only aria-label="Fork options">
          <ButtonGroupSeparator />
          <DemoIcon name="chevron-down" />
        </Button>
      </ButtonGroup>

      <ButtonGroup variant="tertiary">
        <Button is-icon-only aria-label="QR code">
          <DemoIcon name="qr" />
        </Button>
        <Button>
          <ButtonGroupSeparator />
          Scan to pay
        </Button>
      </ButtonGroup>

      <ButtonGroup variant="tertiary">
        <Button>
          <DemoIcon name="thumb-up" />
          2.4K
        </Button>
        <Button is-icon-only aria-label="Dislike">
          <ButtonGroupSeparator />
          <DemoIcon name="thumb-down" />
        </Button>
      </ButtonGroup>

      <ButtonGroup variant="tertiary">
        <Button>
          <DemoIcon name="star" />
          Star
        </Button>
        <Button>
          <ButtonGroupSeparator />
          104
        </Button>
      </ButtonGroup>
    </div>

    <ButtonGroup variant="tertiary">
      <Button>
        <DemoIcon name="chevron-left" />
        Previous
      </Button>
      <Button>
        <ButtonGroupSeparator />
        Next
        <DemoIcon name="chevron-right" />
      </Button>
    </ButtonGroup>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { Button, ButtonGroup, ButtonGroupSeparator } from '@misaki-mei/heroui-vue'

const iconPaths: Record<string, string[]> = {
  'chevron-down': ['M6 9l6 6 6-6'],
  'chevron-left': ['M15 18l-6-6 6-6'],
  'chevron-right': ['M9 18l6-6-6-6'],
  fork: ['M7 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z', 'M17 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z', 'M7 9v2a4 4 0 0 0 4 4h2a4 4 0 0 1 4 4v0', 'M17 9v10'],
  qr: ['M4 4h6v6H4z', 'M14 4h6v6h-6z', 'M4 14h6v6H4z', 'M14 14h2v2h-2z', 'M18 14h2v6h-4v-2h2z'],
  'thumb-up': ['M7 10v10', 'M11 10l1-5a2 2 0 0 1 3 1.8V10h4a2 2 0 0 1 2 2l-1 6a2 2 0 0 1-2 2h-7a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4Z'],
  'thumb-down': ['M17 14V4', 'M13 14l-1 5a2 2 0 0 1-3-1.8V14H5a2 2 0 0 1-2-2l1-6a2 2 0 0 1 2-2h7a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4Z'],
  star: ['M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9z'],
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

.demo-button-group-row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
  text-align: left;
}
</style>
