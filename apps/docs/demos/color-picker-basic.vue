<script setup lang="ts">
import { ref } from 'vue'
import {
  ColorPicker,
  ColorArea,
  ColorSlider,
  ColorField,
} from '@misaki-mei/heroui-vue'

const hue = ref(266)
const saturation = ref(75)
const lightness = ref(42)

function hslToHex(h: number, s: number, l: number) {
  const a = (s / 100) * Math.min(l / 100, 1 - l / 100)
  const channel = (n: number) => {
    const k = (n + h / 30) % 12
    const value = l / 100 - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * value)
      .toString(16)
      .padStart(2, '0')
  }
  return `#${channel(0)}${channel(8)}${channel(4)}`
}

const value = ref(hslToHex(hue.value, saturation.value, lightness.value))

function syncFromArea() {
  value.value = hslToHex(hue.value, saturation.value, lightness.value)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <ColorPicker v-model="value" label="Theme color">
      <div class="flex w-64 flex-col gap-3 pt-1">
        <ColorSlider v-model="hue" channel="hue" :max="360" @change="syncFromArea" />
        <ColorArea
          :hue="hue"
          :saturation="saturation"
          :lightness="lightness"
          @update:saturation="(v: number) => { saturation = v; syncFromArea() }"
          @update:lightness="(v: number) => { lightness = v; syncFromArea() }"
        />
      </div>
    </ColorPicker>
    <ColorField v-model="value" label="Hex value" />
  </div>
</template>
