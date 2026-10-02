<script setup lang="ts">
import { computed, ref } from 'vue'
import { colorAreaVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'

type ColorAreaChannel = 'saturation' | 'lightness'

interface ColorAreaProps {
  class?: string
  hue?: number
  saturation?: number
  lightness?: number
  xChannel?: ColorAreaChannel
  yChannel?: ColorAreaChannel
  isDisabled?: boolean
  label?: string
  step?: number
}

const props = withDefaults(defineProps<ColorAreaProps>(), {
  hue: 0,
  saturation: undefined,
  lightness: undefined,
  xChannel: 'saturation',
  yChannel: 'lightness',
  isDisabled: undefined,
  label: 'Color area',
  step: 1,
})

const emit = defineEmits<{
  'update:saturation': [value: number]
  'update:lightness': [value: number]
  change: [saturation: number, lightness: number]
}>()

const internal = ref({ saturation: 100, lightness: 50 })
const currentSaturation = computed(() => props.saturation ?? internal.value.saturation)
const currentLightness = computed(() => props.lightness ?? internal.value.lightness)

const slots = computed(() => colorAreaVariants({ showDots: false }))
const baseClass = computed(() =>
  composeTwClasses(
    props.class,
    (slots.value as unknown as { base: () => string }).base(),
  ),
)
const thumbClass = computed(
  () => (slots.value as unknown as { thumb: () => string }).thumb(),
)

function clampPercent(value: number) {
  return Math.max(0, Math.min(100, value))
}

function channelColor(channel: ColorAreaChannel, value: number) {
  const saturation = channel === 'saturation' ? value : currentSaturation.value
  const lightness = channel === 'lightness' ? value : currentLightness.value
  return `hsl(${props.hue}, ${saturation}%, ${lightness}%)`
}

const gradient = computed(() => {
  const xMin = channelColor(props.xChannel, 0)
  const xMax = channelColor(props.xChannel, 100)
  const yMin = channelColor(props.yChannel, 0)
  const yMax = channelColor(props.yChannel, 100)
  return `linear-gradient(to right, ${xMin}, ${xMax}), linear-gradient(to bottom, ${yMax}, ${yMin})`
})

const rootStyle = computed(() => ({ '--color-area-background': gradient.value }))

const xValue = computed(() =>
  props.xChannel === 'saturation' ? currentSaturation.value : currentLightness.value,
)
const yValue = computed(() =>
  props.yChannel === 'saturation' ? currentSaturation.value : currentLightness.value,
)

const thumbStyle = computed(() => ({
  left: `${xValue.value}%`,
  top: `${100 - yValue.value}%`,
  '--color-area-thumb-color': `hsl(${props.hue}, ${currentSaturation.value}%, ${currentLightness.value}%)`,
}))

const ariaValueText = computed(
  () => `Saturation ${currentSaturation.value}%, Lightness ${currentLightness.value}%`,
)

const dragging = ref(false)

function pointFromEvent(event: PointerEvent) {
  const el = event.currentTarget as HTMLElement | null
  if (!el) return null
  const rect = el.getBoundingClientRect()
  if (!rect.width || !rect.height) return null
  const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width))
  const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height))
  return { x: Math.round(x * 100), y: Math.round((1 - y) * 100) }
}

function applyPoint(x: number, y: number) {
  const next = {
    saturation: currentSaturation.value,
    lightness: currentLightness.value,
    [props.xChannel]: x,
    [props.yChannel]: y,
  }
  if (props.saturation === undefined) internal.value.saturation = next.saturation
  if (props.lightness === undefined) internal.value.lightness = next.lightness
  emit('update:saturation', next.saturation)
  emit('update:lightness', next.lightness)
  emit('change', next.saturation, next.lightness)
}

function onPointerDown(event: PointerEvent) {
  if (props.isDisabled) return
  const point = pointFromEvent(event)
  if (!point) return
  dragging.value = true
  ;(event.currentTarget as HTMLElement).setPointerCapture?.(event.pointerId)
  applyPoint(point.x, point.y)
}

function onPointerMove(event: PointerEvent) {
  if (!dragging.value || props.isDisabled) return
  const point = pointFromEvent(event)
  if (!point) return
  applyPoint(point.x, point.y)
}

function endDrag(event: PointerEvent) {
  dragging.value = false
  ;(event.currentTarget as HTMLElement).releasePointerCapture?.(event.pointerId)
}

function onKeydown(event: KeyboardEvent) {
  if (props.isDisabled) return
  const step = event.shiftKey ? props.step * 10 : props.step
  const next = { saturation: currentSaturation.value, lightness: currentLightness.value }
  switch (event.key) {
    case 'ArrowLeft':
      next[props.xChannel] -= step
      break
    case 'ArrowRight':
      next[props.xChannel] += step
      break
    case 'ArrowUp':
      next[props.yChannel] += step
      break
    case 'ArrowDown':
      next[props.yChannel] -= step
      break
    default:
      return
  }
  event.preventDefault()
  applyPoint(clampPercent(next[props.xChannel]), clampPercent(next[props.yChannel]))
}
</script>

<template>
  <div
    :class="baseClass"
    :data-disabled="dataAttr(props.isDisabled || undefined)"
    :data-dragging="dataAttr(dragging)"
    data-slot="color-area"
    :style="rootStyle"
    role="slider"
    tabindex="0"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-valuetext="ariaValueText"
    :aria-label="props.label"
    :aria-disabled="props.isDisabled || undefined"
    @pointerdown.prevent="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="endDrag"
    @pointercancel="endDrag"
    @keydown="onKeydown"
  >
    <span
      :class="thumbClass"
      data-slot="color-area-thumb"
      :data-dragging="dataAttr(dragging)"
      :data-disabled="dataAttr(props.isDisabled || undefined)"
      :style="thumbStyle"
    />
  </div>
</template>
