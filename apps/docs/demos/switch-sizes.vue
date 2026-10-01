<template>
  <div class="flex gap-6">
    <Switch size="sm">
      <Label class="text-xs">Small</Label>
    </Switch>
    <Switch size="md">
      <Label class="text-sm">Medium</Label>
    </Switch>
    <Switch size="lg">
      <Label class="text-base">Large</Label>
    </Switch>
  </div>
</template>

<script setup>
import { Label, Switch } from '@misaki-mei-q/heroui-vue'
</script>
