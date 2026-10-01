import type { InjectionKey } from 'vue'
import type { Ref } from 'vue'

export type ToastVariant = 'default' | 'accent' | 'success' | 'warning' | 'danger'
export type ToastPlacement =
  | 'top'
  | 'top start'
  | 'top end'
  | 'bottom'
  | 'bottom start'
  | 'bottom end'

export interface ToastEntry {
  id: string
  title?: string
  description?: string
  variant?: ToastVariant
  duration?: number
}

export interface ToastApi {
  toasts: Ref<ToastEntry[]>
  show: (entry: Omit<ToastEntry, 'id'> & { id?: string }) => string
  update: (id: string, patch: Partial<Omit<ToastEntry, 'id'>>) => void
  close: (id?: string) => void
  closeAll: () => void
}

export const TOAST_API_KEY: InjectionKey<ToastApi> = Symbol('HeroUIToastApi')