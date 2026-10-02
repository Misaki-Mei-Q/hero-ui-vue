import { ref } from 'vue'
import type { ToastApi, ToastEntry } from './context'

const DEFAULT_DURATION = 5000

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
    { ...entry, id, duration: entry.duration ?? DEFAULT_DURATION },
  ]
  return id
}

function update(id: string, patch: Partial<Omit<ToastEntry, 'id'>>) {
  toasts.value = toasts.value.map((toast) => (toast.id === id ? { ...toast, ...patch } : toast))
}

function close(id?: string) {
  if (!id) {
    toasts.value = []
    return
  }
  toasts.value = toasts.value.filter((toast) => toast.id !== id)
}

function closeAll() {
  toasts.value = []
}

export const toastQueue: ToastApi = { toasts, show, update, close, closeAll }
