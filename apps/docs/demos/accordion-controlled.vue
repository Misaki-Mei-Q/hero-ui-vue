<template>
  <div class="demo-accordion-controlled">
    <div class="demo-accordion-controlled__bar">
      <p class="demo-accordion-controlled__state">
        Expanded: <strong>{{ expandedKey || 'none' }}</strong>
      </p>
      <div class="demo-accordion-controlled__actions">
        <Button
          aria-label="Previous item"
          :is-disabled="previousDisabled"
          is-icon-only
          size="sm"
          variant="secondary"
          @click="selectPrevious"
        >
          <DemoIcon name="chevron-up" />
        </Button>
        <Button
          aria-label="Next item"
          :is-disabled="nextDisabled"
          is-icon-only
          size="sm"
          variant="secondary"
          @click="selectNext"
        >
          <DemoIcon name="chevron-down" />
        </Button>
      </div>
    </div>

    <Accordion v-model="expandedKey" class="demo-accordion">
      <AccordionItem v-for="item in items" :key="item.id" :value="item.id">
        <AccordionHeading>
          <AccordionTrigger>
            {{ item.title }}
            <AccordionIndicator />
          </AccordionTrigger>
        </AccordionHeading>
        <AccordionPanel>
          <AccordionBody>{{ item.content }}</AccordionBody>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, h, ref } from 'vue'
import {
  Accordion,
  AccordionBody,
  AccordionHeading,
  AccordionIndicator,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
  Button,
} from '@misaki-mei/heroui-vue'

const items = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    content:
      'Learn the basics of HeroUI and how to integrate it into your Vue project. This section covers installation, setup, and your first component.',
  },
  {
    id: 'core-concepts',
    title: 'Core Concepts',
    content:
      'Understand the fundamental concepts behind HeroUI, including the compound component pattern, styling with Tailwind CSS, and accessibility features.',
  },
  {
    id: 'advanced-usage',
    title: 'Advanced Usage',
    content:
      'Explore advanced features like custom variants, theme customization, and integration with other libraries in your Vue ecosystem.',
  },
]

const expandedKey = ref<string | undefined>('getting-started')
const currentIndex = computed(() => items.findIndex((item) => item.id === expandedKey.value))
const previousDisabled = computed(() => currentIndex.value <= 0)
const nextDisabled = computed(() => currentIndex.value === -1 || currentIndex.value >= items.length - 1)

const selectPrevious = () => {
  if (previousDisabled.value) return
  expandedKey.value = items[currentIndex.value - 1]?.id
}

const selectNext = () => {
  if (nextDisabled.value) return
  expandedKey.value = items[currentIndex.value + 1]?.id
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
          class: 'demo-accordion-controlled__icon',
        },
        [h('path', { d: props.name === 'chevron-up' ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6' })],
      )
  },
})
</script>

<style lang="less">
.demo-accordion-controlled {
  width: 100%;
  max-width: 28rem;
  text-align: left;
}

.demo-accordion-controlled__bar {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.demo-accordion-controlled__state {
  margin: 0;
  color: var(--color-muted-foreground);
  font-size: 0.875rem;
}

.demo-accordion-controlled__actions {
  display: flex;
  gap: 0.5rem;
}

.demo-accordion-controlled__icon {
  width: 1rem;
  height: 1rem;
}

.demo-accordion {
  width: 100%;
  max-width: 28rem;
}
</style>
