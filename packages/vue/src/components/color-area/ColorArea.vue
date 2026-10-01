<script setup lang="ts">
import { computed } from 'vue'
import { colorAreaVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'

interface ColorAreaProps {
  class?: string
  hue?: number
  saturation?: number
  lightness?: number
  xChannel?: 'saturation' | 'lightness'
  yChannel?: 'lightness' | 'saturation'
  isDisabled?: boolean
}

const props = withDefaults(defineProps<ColorAreaProps>(), {
  hue: 0,
  saturation: 100,
  lightness: 50,
  xChannel: 'saturation',
  yChannel: 'lightness',
  isDisabled: undefined,
})

const emit = defineEmits<{
  'update:saturation': [value: number]
  'update:lightness': [value: number]
  change: [saturation: number, lightness: number]
}>()

const slots = computed(() => colorAreaVariants({ showDots: false }))
const baseClass = computed(() => composeTwClasses(props.class, (slots.value as unknown as { base: () => string }).base()))
const thumbClass = computed(() => (slots.value as unknown as { thumb: () => string }).thumb())

const gradient = computed(() => {
  const hueColor = `hsl(${props.hue}, 100%, 50%)`
  return `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, ${hueColor})`
})

function onMove(event: PointerEvent) {
  if (props.isDisabled) return
  const el = event.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width))
  const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height))
  const saturation = Math.round(x * 100)
  const lightness = Math.round((1 - y) * 100)
  emit('update:saturation', saturation)
  emit('update:lightness', lightness)
  emit('change', saturation, lightness)
}

function onPointerMove(event: PointerEvent) {
  if (event.buttons === 1) onMove(event)
}
</script>

<template>
  <div
    :class="baseClass"
    :data-disabled="dataAttr(props.isDisabled || undefined)"
    data-slot="color-area"
    :style="{ background: gradient }"
    role="slider"
    aria-valuemin="0"
    aria-valuemax="100"
    @pointerdown.prevent="onMove"
    @pointermove="onPointerMove"
  >
    <span
      :class="thumbClass"
      data-slot="color-area-thumb"
      :style="{
        left: `${props.saturation}%`,
        top: `${100 - props.lightness}%`,
        backgroundColor: `hsl(${props.hue}, ${props.saturation}%, ${props.lightness}%)`,
      }"
    />
  </div>
</template>