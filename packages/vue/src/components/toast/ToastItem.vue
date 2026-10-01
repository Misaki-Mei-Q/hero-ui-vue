<script setup lang="ts">
import { computed } from 'vue'
import { Toast as ToastNS } from 'radix-vue/namespaced'
import { toastVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'
import type { ToastEntry, ToastPlacement } from './context'

interface ToastItemProps {
  toast: ToastEntry
  placement: ToastPlacement
}

const props = defineProps<ToastItemProps>()

const emit = defineEmits<{
  close: []
}>()

const slots = computed(() =>
  toastVariants({
    placement: props.placement,
    variant: props.toast.variant ?? 'default',
  }),
)

const toastClass = computed(() => composeTwClasses('', (slots.value as unknown as { toast: () => string }).toast()))
const contentClass = computed(() => (slots.value as unknown as { content: () => string }).content())
const titleClass = computed(() => (slots.value as unknown as { title: () => string }).title())
const descriptionClass = computed(() => (slots.value as unknown as { description: () => string }).description())
const indicatorClass = computed(() => (slots.value as unknown as { indicator: () => string }).indicator())
const closeClass = computed(() => (slots.value as unknown as { close: () => string }).close())

function onOpenChange(open: boolean) {
  if (!open) emit('close')
}
</script>

<template>
  <ToastNS.Root
    :duration="props.toast.duration ?? 5000"
    :class="toastClass"
    :data-variant="props.toast.variant ?? 'default'"
    data-slot="toast"
    @update:open="onOpenChange"
  >
    <div :class="contentClass" data-slot="toast-content">
      <span
        v-if="props.toast.variant && props.toast.variant !== 'default'"
        :class="indicatorClass"
        data-slot="toast-indicator"
        aria-hidden="true"
      />
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