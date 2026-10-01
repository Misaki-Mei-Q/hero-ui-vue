<template>
  <Accordion allows-multiple-expanded class="demo-accordion">
    <AccordionItem v-for="item in items" :key="item.title" :value="item.title">
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
</template>

<script setup lang="ts">
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
    title: 'Getting Started',
    content:
      'Learn the basics of HeroUI and how to integrate it into your Vue project. This section covers installation, setup, and your first component.',
  },
  {
    title: 'Core Concepts',
    content:
      'Understand the fundamental concepts behind HeroUI, including the compound component pattern, styling with Tailwind CSS, and accessibility features.',
  },
  {
    title: 'Advanced Usage',
    content:
      'Explore advanced features like custom variants, theme customization, and integration with other libraries in your Vue ecosystem.',
  },
  {
    title: 'Best Practices',
    content:
      'Follow our recommended best practices for building performant, accessible, and maintainable applications with HeroUI components.',
  },
]
</script>

<style lang="less">
.demo-accordion {
  width: 100%;
  max-width: 28rem;
  text-align: left;
}
</style>
