<script setup lang="ts">
import { ref } from 'vue'
import {
  ColorPicker,
  ColorArea,
  ColorSlider,
  ColorField,
} from '@misaki-mei/heroui-vue'

const value = ref('#5b21b6')
const hue = ref(266)
const saturation = ref(75)
const lightness = ref(42)
</script>

<template>
  <div class="flex flex-col gap-4">
    <ColorPicker v-model="value" label="Theme color" />
    <ColorField v-model="value" label="Hex value" />
    <div class="flex flex-col gap-3 w-full max-w-sm">
      <ColorSlider channel="hue" v-model="hue" :max="360" />
      <ColorArea :hue="hue" />
    </div>
  </div>
</template>