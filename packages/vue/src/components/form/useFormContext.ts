import { inject } from 'vue'
import type { FormContextValue } from './context'

const FORM_CONTEXT_KEY = Symbol('HeroUIFormContext') as unknown as import('vue').InjectionKey<FormContextValue>

export default function useFormContext() {
  return inject(FORM_CONTEXT_KEY, null)
}