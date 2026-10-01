<template>
  <div class="flex flex-col gap-4">
    <Switch v-model="isSelected">
      <Label class="text-sm">Enable notifications</Label>
    </Switch>
    <p class="m-0 text-sm text-muted">Switch is {{ isSelected ? 'on' : 'off' }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Label, Switch } from '@misaki-mei-q/heroui-vue'

const isSelected = ref(false)
</script>
