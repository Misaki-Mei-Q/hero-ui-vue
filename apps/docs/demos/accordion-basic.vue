<template>
  <Accordion class="demo-accordion">
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
  {
    title: 'How much does shipping cost?',
    icon: 'box',
    content:
      'Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.',
  },
  {
    title: 'Do you ship internationally?',
    icon: 'globe',
    content:
      'Yes, we ship to most countries. Please check our shipping rates and policies for more information.',
  },
  {
    title: 'How do I request a refund?',
    icon: 'refresh',
    content:
      "If you're not satisfied with your purchase, you can request a refund within 30 days of purchase. Please contact our customer support team for assistance.",
  },
]

const iconPaths: Record<string, string[]> = {
  box: ['M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z', 'M3.3 7 12 12l8.7-5', 'M12 22V12'],
  'credit-card': ['M3 6h18v12H3z', 'M3 10h18', 'M7 15h3'],
  globe: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'M2 12h20', 'M12 2a15.3 15.3 0 0 1 0 20', 'M12 2a15.3 15.3 0 0 0 0 20'],
  receipt: ['M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2Z', 'M8 7h8', 'M8 11h8', 'M8 15h5'],
  refresh: ['M3 12a9 9 0 0 1 15-6.7L21 8', 'M21 3v5h-5', 'M21 12a9 9 0 0 1-15 6.7L3 16', 'M3 21v-5h5'],
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
