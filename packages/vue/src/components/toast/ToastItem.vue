<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Toast as ToastNS } from 'radix-vue/namespaced'
import { toastVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import type { ToastEntry, ToastPlacement } from './context'

interface ToastItemProps {
  toast: ToastEntry
  placement: ToastPlacement
  index: number
  expanded: boolean
  frontMost: boolean
  hidden: boolean
  offsetCollapsed: string
  offsetExpanded: string
  frontHeight: number
  scaleFactor: number
}

const props = defineProps<ToastItemProps>()

const emit = defineEmits<{
  close: []
  height: [value: number]
}>()

const slots = computed(() =>
  toastVariants({
    placement: props.placement,
    variant: props.toast.variant ?? 'default',
  }),
)

const toastClass = computed(() =>
  composeTwClasses('', (slots.value as unknown as { toast: () => string }).toast()),
)
const contentClass = computed(() => (slots.value as unknown as { content: () => string }).content())
const titleClass = computed(() => (slots.value as unknown as { title: () => string }).title())
const descriptionClass = computed(
  () => (slots.value as unknown as { description: () => string }).description(),
)
const indicatorClass = computed(
  () => (slots.value as unknown as { indicator: () => string }).indicator(),
)
const closeClass = computed(() => (slots.value as unknown as { close: () => string }).close())

const rootEl = ref<HTMLElement | null>(null)
let observer: ResizeObserver | null = null

function measure() {
  const el = rootEl.value
  if (!el) return
  emit('height', el.offsetHeight || 0)
}

function setRootEl(el: unknown) {
  const node =
    (el as { $el?: HTMLElement | null } | null)?.$el ?? (el as HTMLElement | null) ?? null
  rootEl.value = node
}

onMounted(() => {
  measure()
  if (typeof ResizeObserver !== 'undefined' && rootEl.value) {
    observer = new ResizeObserver(() => measure())
    observer.observe(rootEl.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})

const entering = ref(true)
onMounted(() => {
  if (typeof requestAnimationFrame === 'undefined') {
    entering.value = false
    return
  }
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      entering.value = false
    })
  })
})

const rootStyle = computed(() => ({
  '--offset-collapsed': props.offsetCollapsed,
  '--offset-expanded': props.offsetExpanded,
  '--scale-collapsed': String(1 - props.index * props.scaleFactor),
  '--front-height': `${props.frontHeight}px`,
}))

function onOpenChange(open: boolean) {
  if (!open) emit('close')
}
</script>

<template>
  <ToastNS.Root
    :ref="setRootEl"
    :duration="props.toast.duration ?? 5000"
    :class="toastClass"
    :style="rootStyle"
    :data-entering="dataAttr(entering)"
    :data-expanded="dataAttr(props.expanded)"
    :data-frontmost="dataAttr(props.frontMost)"
    :data-hidden="dataAttr(props.hidden)"
    :data-index="props.index"
    :data-placement="props.placement"
    data-slot="toast"
    @update:open="onOpenChange"
  >
    <span
      v-if="props.toast.variant && props.toast.variant !== 'default'"
      :class="indicatorClass"
      data-slot="toast-indicator"
      aria-hidden="true"
    />
    <div :class="contentClass" data-slot="toast-content">
      <div>
        <ToastNS.Title v-if="props.toast.title" :class="titleClass" data-slot="toast-title">
          {{ props.toast.title }}
        </ToastNS.Title>
        <ToastNS.Description
          v-if="props.toast.description"
          :class="descriptionClass"
          data-slot="toast-description"
        >
          {{ props.toast.description }}
        </ToastNS.Description>
      </div>
    </div>
    <ToastNS.Close :class="closeClass" data-slot="toast-close" aria-label="Close">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M4 4l8 8M12 4l-8 8" stroke-linecap="round" />
      </svg>
    </ToastNS.Close>
  </ToastNS.Root>
</template>
