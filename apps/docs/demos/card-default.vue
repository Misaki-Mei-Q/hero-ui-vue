<template>
  <Card class="demo-card-standard">
    <DollarIcon class="demo-card-icon" />
    <CardHeader>
      <CardTitle>Become an Acme Creator!</CardTitle>
      <CardDescription>
        Visit the Acme Creator Hub to sign up today and start earning credits from your fans and followers.
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Link
        aria-label="Go to Acme Creator Hub"
        href="https://heroui.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Creator Hub
        <LinkIcon />
      </Link>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle, Link, LinkIcon } from '@misaki-mei/heroui-vue'

const DollarIcon = defineComponent({
  setup() {
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
          'aria-label': 'Dollar sign icon',
          role: 'img',
        },
        [
          h('path', { d: 'M12 2v20' }),
          h('path', { d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6' }),
          h('circle', { cx: '12', cy: '12', r: '10' }),
        ],
      )
  },
})
</script>

<style lang="less">
.demo-card-standard {
  width: min(100%, 25rem);
  text-align: left;
}

.demo-card-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-accent);
}
</style>
