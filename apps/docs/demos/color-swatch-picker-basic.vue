<script setup lang="ts">
import { ref } from 'vue'
import { ColorSwatch, ColorSwatchPicker } from '@misaki-mei/heroui-vue'

const palette = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#3b82f6', '#a855f7']
const value = ref('#3b82f6')
</script>

<template>
  <ColorSwatchPicker v-model="value" :colors="palette" />
</template>