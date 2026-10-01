<template>
  <div class="flex flex-wrap gap-3">
    <Button is-disabled>Primary</Button>
    <Button is-disabled variant="secondary">Secondary</Button>
    <Button is-disabled variant="tertiary">Tertiary</Button>
    <Button is-disabled variant="outline">Outline</Button>
    <Button is-disabled variant="ghost">Ghost</Button>
    <Button is-disabled variant="danger">Danger</Button>
  </div>
</template>

<script setup>
import { Button } from '@misaki-mei-q/heroui-vue'
</script>
