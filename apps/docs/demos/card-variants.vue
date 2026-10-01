<template>
  <div class="demo-card-stack">
    <Card
      v-for="item in variants"
      :key="item.variant"
      :variant="item.variant"
    >
      <CardHeader>
        <CardTitle>{{ item.title }}</CardTitle>
        <CardDescription>{{ item.description }}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{{ item.content }}</p>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@misaki-mei/heroui-vue'

const variants = [
  {
    variant: 'transparent',
    title: 'Transparent',
    description: 'Minimal prominence with transparent background',
    content: 'Use for less important content or nested cards',
  },
  {
    variant: 'default',
    title: 'Default',
    description: 'Standard card appearance',
    content: 'The default card variant for most use cases',
  },
  {
    variant: 'secondary',
    title: 'Secondary',
    description: 'Medium prominence',
    content: 'Use to draw moderate attention',
  },
  {
    variant: 'tertiary',
    title: 'Tertiary',
    description: 'Higher prominence',
    content: 'Use for primary or featured content',
  },
] as const
</script>

<style lang="less">
.demo-card-stack {
  display: flex;
  width: min(100%, 24rem);
  flex-direction: column;
  gap: 1rem;
  text-align: left;
}
</style>
