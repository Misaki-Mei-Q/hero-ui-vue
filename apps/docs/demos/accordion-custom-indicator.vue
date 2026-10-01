<template>
  <Accordion v-model="expandedKey" class="demo-accordion" variant="surface">
    <AccordionItem value="1">
      <AccordionHeading>
        <AccordionTrigger>
          Using Plus/Minus Icon
          <AccordionIndicator>
            <DemoIcon :name="expandedKey === '1' ? 'minus' : 'plus'" />
          </AccordionIndicator>
        </AccordionTrigger>
      </AccordionHeading>
      <AccordionPanel>
        <AccordionBody>
          This accordion uses a plus icon that changes when expanded.
        </AccordionBody>
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem value="2">
      <AccordionHeading>
        <AccordionTrigger>
          Using Caret Icon
          <AccordionIndicator>
            <DemoIcon name="circle-chevron-down" />
          </AccordionIndicator>
        </AccordionTrigger>
      </AccordionHeading>
      <AccordionPanel>
        <AccordionBody>
          This item uses a caret icon for the indicator. The rotation animation is applied automatically.
        </AccordionBody>
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem value="3">
      <AccordionHeading>
        <AccordionTrigger>
          Using Arrow Icon
          <AccordionIndicator>
            <DemoIcon name="chevrons-down" />
          </AccordionIndicator>
        </AccordionTrigger>
      </AccordionHeading>
      <AccordionPanel>
        <AccordionBody>
          This item uses an arrow icon. Any icon you pass receives the expanded state styles.
        </AccordionBody>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
</template>

<script setup lang="ts">
import { defineComponent, h, ref } from 'vue'
import {
  Accordion,
  AccordionBody,
  AccordionHeading,
  AccordionIndicator,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@misaki-mei/heroui-vue'

const expandedKey = ref<string | undefined>()

const paths: Record<string, string[]> = {
  'chevrons-down': ['m7 6 5 5 5-5', 'm7 13 5 5 5-5'],
  'circle-chevron-down': ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'm8 10 4 4 4-4'],
  minus: ['M5 12h14'],
  plus: ['M12 5v14', 'M5 12h14'],
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
        paths[props.name]?.map((d) => h('path', { d })) ?? [],
      )
  },
})
</script>

<style lang="less">
.demo-accordion {
  width: 100%;
  max-width: 28rem;
  text-align: left;
}
</style>
