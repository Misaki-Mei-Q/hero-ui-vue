<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { Toast as ToastNS } from 'radix-vue/namespaced'
import { toastVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { TOAST_API_KEY } from './context'
import type { ToastPlacement } from './context'
import { toastQueue } from './queue'
import ToastItem from './ToastItem.vue'

interface ToastProviderProps {
  class?: string
  placement?: ToastPlacement
  duration?: number
  gap?: number
  maxVisibleToasts?: number
  scaleFactor?: number
  width?: number | string
}

const props = withDefaults(defineProps<ToastProviderProps>(), {
  placement: 'bottom end',
  duration: 5000,
  gap: 12,
  maxVisibleToasts: 3,
  scaleFactor: 0.05,
  width: 460,
})

const slots = computed(() => toastVariants({ placement: props.placement }))
const viewportClass = computed(() =>
  composeTwClasses(
    props.class,
    (slots.value as unknown as { region: () => string }).region(),
  ),
)

provide(TOAST_API_KEY, toastQueue)

const heights = ref<Record<string, number>>({})

function setHeight(id: string, height: number) {
  if (heights.value[id] === height) return
  heights.value = { ...heights.value, [id]: height }
}

function removeHeight(id: string) {
  if (!(id in heights.value)) return
  const next = { ...heights.value }
  delete next[id]
  heights.value = next
}

const expandedByInteraction = ref(false)
const isExpanded = computed(
  () => expandedByInteraction.value && toastQueue.toasts.value.length > 1,
)

const regionStyle = computed(() => ({
  '--gap': `${props.gap}px`,
  '--placement': props.placement,
  '--scale-factor': String(props.scaleFactor),
  '--toast-width': typeof props.width === 'number' ? `${props.width}px` : props.width,
}))

const orderedToasts = computed(() => [...toastQueue.toasts.value].reverse())

function frontHeight() {
  const frontId = orderedToasts.value[0]?.id
  return (frontId ? heights.value[frontId] : undefined) ?? 0
}

function offsetCollapsed(index: number) {
  return `${index * props.gap}px`
}

function offsetExpanded(index: number) {
  const list = orderedToasts.value
  const collapsedFront = frontHeight()
  let before = 0
  for (let i = 0; i < index; i += 1) {
    const id = list[i]?.id
    before += (id ? heights.value[id] : undefined) ?? collapsedFront
  }
  return `${before + index * props.gap}px`
}

function onClose(id: string) {
  removeHeight(id)
  toastQueue.close(id)
}
</script>

<template>
  <ToastNS.Provider swipe-direction="right" :duration="props.duration">
    <slot />
    <ToastNS.Viewport
      :class="viewportClass"
      :style="regionStyle"
      :data-expanded="dataAttr(isExpanded)"
      data-slot="toast-region"
      @pointerenter="expandedByInteraction = true"
      @pointermove="expandedByInteraction = true"
      @pointerleave="expandedByInteraction = false"
      @focusin="expandedByInteraction = true"
      @focusout="expandedByInteraction = false"
    >
      <ToastItem
        v-for="(toast, index) in orderedToasts"
        :key="toast.id"
        :toast="toast"
        :placement="props.placement"
        :index="index"
        :expanded="isExpanded"
        :front-most="index === 0"
        :hidden="index >= props.maxVisibleToasts"
        :offset-collapsed="offsetCollapsed(index)"
        :offset-expanded="offsetExpanded(index)"
        :front-height="frontHeight()"
        :scale-factor="props.scaleFactor"
        @close="() => onClose(toast.id)"
        @height="(height) => setHeight(toast.id, height)"
      />
    </ToastNS.Viewport>
  </ToastNS.Provider>
</template>
