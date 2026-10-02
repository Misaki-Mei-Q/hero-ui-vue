import { inject } from 'vue'
import { TOAST_API_KEY } from './context'
import type { ToastApi } from './context'
import { toastQueue } from './queue'

export function useToast(): ToastApi {
  return inject(TOAST_API_KEY, toastQueue)
}
