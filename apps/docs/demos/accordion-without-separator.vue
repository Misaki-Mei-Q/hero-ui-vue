<template>
  <Accordion hide-separator class="demo-accordion">
    <AccordionItem v-for="item in items" :key="item.title" :value="item.title">
      <AccordionHeading>
        <AccordionTrigger>
          <DemoIcon :name="item.icon" class="demo-accordion-icon" />
          {{ item.title }}
          <AccordionIndicator />
        </AccordionTrigger>
      </AccordionHeading>
      <AccordionPanel>
        <AccordionBody>{{ item.content }}</AccordionBody>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import {
  Accordion,
  AccordionBody,
  AccordionHeading,
  AccordionIndicator,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@misaki-mei/heroui-vue'

const items = [
  {
    title: 'How do I place an order?',
    icon: 'shopping-bag',
    content:
      "Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase.",
  },
  {
    title: 'Can I modify or cancel my order?',
    icon: 'receipt',
    content:
      "Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes.",
  },
  {
    title: 'What payment methods do you accept?',
    icon: 'credit-card',
    content: 'We accept all major credit cards, including Visa, Mastercard, and American Express.',
  },
]

const iconPaths: Record<string, string[]> = {
  'credit-card': ['M3 6h18v12H3z', 'M3 10h18', 'M7 15h3'],
  receipt: ['M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2Z', 'M8 7h8', 'M8 11h8', 'M8 15h5'],
  'shopping-bag': ['M6 8h12l-1 13H7L6 8Z', 'M9 8a3 3 0 0 1 6 0'],
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
.demo-accordion {
  width: 100%;
  max-width: 28rem;
  text-align: left;
}

.demo-accordion-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.75rem;
  flex-shrink: 0;
  color: var(--color-muted-foreground);
}
</style>
