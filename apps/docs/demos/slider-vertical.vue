<script setup lang="ts">
import { Slider } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div class="flex h-64 gap-6">
    <Slider orientation="vertical" label="Gain" :default-value="[40]" />
    <Slider orientation="vertical" label="Bass" :default-value="[70]" />
    <Slider orientation="vertical" label="Treble" :default-value="[55]" />
  </div>
</template>