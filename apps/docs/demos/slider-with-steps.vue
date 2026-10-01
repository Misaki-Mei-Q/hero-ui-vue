<script setup lang="ts">
import { Slider } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div class="grid w-full max-w-md gap-4">
    <Slider
      label="Network quality"
      :default-value="[60]"
      :step="8"
      show-steps
    />
    <Slider
      label="Frame budget"
      :default-value="[50]"
      :marks="[
        { value: 0, label: '0' },
        { value: 25, label: '25' },
        { value: 50, label: '50' },
        { value: 75, label: '75' },
        { value: 100, label: '100' },
      ]"
    />
  </div>
</template>