<template>
  <div class="demo-button-group-stack">
    <div class="demo-button-group-field">
      <p class="demo-button-group-label">
        With icons
      </p>
      <ButtonGroup variant="secondary">
        <Button>
          <DemoIcon name="globe" />
          Search
        </Button>
        <Button>
          <ButtonGroupSeparator />
          <DemoIcon name="plus" />
          Add
        </Button>
        <Button>
          <ButtonGroupSeparator />
          <DemoIcon name="trash" />
          Delete
        </Button>
      </ButtonGroup>
    </div>

    <div class="demo-button-group-field">
      <p class="demo-button-group-label">
        Icon only buttons
      </p>
      <ButtonGroup variant="tertiary">
        <Button is-icon-only aria-label="Search">
          <DemoIcon name="globe" />
        </Button>
        <Button is-icon-only aria-label="Add">
          <ButtonGroupSeparator />
          <DemoIcon name="plus" />
        </Button>
        <Button is-icon-only aria-label="Delete">
          <ButtonGroupSeparator />
          <DemoIcon name="trash" />
        </Button>
      </ButtonGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { Button, ButtonGroup, ButtonGroupSeparator } from '@misaki-mei/heroui-vue'

const iconPaths: Record<string, string[]> = {
  globe: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M3.6 9h16.8', 'M3.6 15h16.8', 'M12 3a14 14 0 0 1 0 18', 'M12 3a14 14 0 0 0 0 18'],
  plus: ['M12 5v14', 'M5 12h14'],
  trash: ['M4 7h16', 'M10 11v6', 'M14 11v6', 'M6 7l1 13h10l1-13', 'M9 7V4h6v3'],
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
