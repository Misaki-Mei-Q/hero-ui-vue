<template>
  <div class="grid max-w-md gap-3">
    <Surface class="rounded-3xl p-5">
      <Text>Default surface keeps content on the same theme tokens as React HeroUI.</Text>
    </Surface>
    <Surface class="rounded-3xl p-5" variant="secondary">
      <Text variant="muted">Secondary surface</Text>
    </Surface>
  </div>
</template>

<script setup>
import { Surface, Text } from '@misaki-mei-q/heroui-vue'
</script>
