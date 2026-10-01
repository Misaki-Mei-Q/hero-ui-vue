<template>
  <Accordion class="demo-accordion-custom" variant="surface">
    <AccordionItem v-for="item in items" :key="item.title" class="demo-accordion-custom__item" :value="item.title">
      <AccordionHeading>
        <AccordionTrigger class="demo-accordion-custom__trigger">
          <img :alt="item.title" class="demo-accordion-custom__image" :src="item.iconUrl">
          <div class="demo-accordion-custom__content">
            <span class="demo-accordion-custom__title">{{ item.title }}</span>
            <span class="demo-accordion-custom__subtitle">{{ item.subtitle }}</span>
          </div>
          <AccordionIndicator class="demo-accordion-custom__indicator" />
        </AccordionTrigger>
      </AccordionHeading>
      <AccordionPanel>
        <AccordionBody class="demo-accordion-custom__body">{{ item.content }}</AccordionBody>
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
    title: 'Set Up Notifications',
    subtitle: 'Receive account activity updates',
    content: 'Stay informed about your account activity with real-time notifications.',
    iconUrl: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/bell-small.png',
  },
  {
    title: 'Set up Browser Extension',
    subtitle: 'Connect you browser to your account',
    content: 'Enhance your browsing experience by installing our official browser extension.',
    iconUrl: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/compass-small.png',
  },
  {
    title: 'Mint Collectible',
    subtitle: 'Create your first collectible',
    content: 'Begin your journey into the world of digital collectibles by creating your first NFT.',
    iconUrl: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/3dicons/mint-collective-small.png',
  },
]
</script>

<style lang="less">
.demo-accordion-custom {
  width: 100%;
  max-width: 28rem;
  border-radius: 1rem;
  background: color-mix(in oklab, var(--color-surface) 10%, transparent);
  text-align: left;
}

.demo-accordion-custom__item {
  &:first-child [data-slot='accordion-trigger'] {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  &:last-child:not(:has([data-slot='accordion-trigger'][aria-expanded='true'])) [data-slot='accordion-trigger'] {
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
}

.demo-accordion-custom__trigger {
  gap: 0.5rem;
  transition: none;
}

.demo-accordion-custom__image {
  width: 2.75rem;
  height: 2.75rem;
  transition:
    scale 300ms var(--ease-out),
    rotate 300ms var(--ease-out),
    filter 300ms var(--ease-out);
}

.demo-accordion-custom__item:hover .demo-accordion-custom__image {
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 12%));
  rotate: -10deg;
  scale: 1.2;
}

.demo-accordion-custom__content {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.demo-accordion-custom__title {
  font-weight: 500;
  line-height: 1.25rem;
}

.demo-accordion-custom__subtitle,
.demo-accordion-custom__body {
  color: color-mix(in oklab, var(--color-muted-foreground) 80%, transparent);
}

.demo-accordion-custom__subtitle {
  font-weight: 400;
  line-height: 1.5rem;
}

.demo-accordion-custom__indicator {
  color: color-mix(in oklab, var(--color-muted-foreground) 50%, transparent);
}
</style>
