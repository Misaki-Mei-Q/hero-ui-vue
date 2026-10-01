<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { Toast as ToastNS } from 'radix-vue/namespaced'
import { toastVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'
import { TOAST_API_KEY } from './context'
import type { ToastApi, ToastEntry, ToastPlacement } from './context'
import ToastItem from './ToastItem.vue'

interface ToastProviderProps {
  class?: string
  placement?: ToastPlacement
  duration?: number
}

const props = withDefaults(defineProps<ToastProviderProps>(), {
  placement: 'bottom end',
  duration: 5000,
})

const slots = computed(() => toastVariants({ placement: props.placement }))
const viewportClass = computed(() => composeTwClasses(props.class, (slots.value as unknown as { region: () => string }).region()))

const toasts = ref<ToastEntry[]>([])

function generateId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return (crypto as { randomUUID?: () => string }).randomUUID!()
  }
  return `toast-${Math.random().toString(36).slice(2, 10)}`
}

function show(entry: Omit<ToastEntry, 'id'> & { id?: string }): string {
  const id = entry.id ?? generateId()
  toasts.value = [
    ...toasts.value,
    { ...entry, id, duration: entry.duration ?? props.duration },
  ]
  return id
}

function update(id: string, patch: Partial<Omit<ToastEntry, 'id'>>) {
  toasts.value = toasts.value.map((t) => (t.id === id ? { ...t, ...patch } : t))
}

function close(id?: string) {
  if (!id) {
    toasts.value = []
    return
  }
  toasts.value = toasts.value.filter((t) => t.id !== id)
}

function closeAll() {
  toasts.value = []
}

const api: ToastApi = { toasts, show, update, close, closeAll }

provide(TOAST_API_KEY, api)
</script>

<template>
  <ToastNS.Provider swipe-direction="right" :duration="props.duration">
    <slot />
    <ToastNS.Viewport :class="viewportClass" data-slot="toast-region">
      <ToastItem
        v-for="toast in toasts"
        :key="toast.id"
        :toast="toast"
        :placement="props.placement"
        @close="() => close(toast.id)"
      />
    </ToastNS.Viewport>
  </ToastNS.Provider>
</template>