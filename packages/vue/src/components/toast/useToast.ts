import { inject } from 'vue'
import { TOAST_API_KEY } from './context'
import type { ToastApi } from './context'

export function useToast(): ToastApi | null {
  return inject(TOAST_API_KEY, null)
}
