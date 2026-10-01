export interface FormContextValue {
  isSubmitting: import('vue').Ref<boolean>
  isSubmitted: import('vue').Ref<boolean>
  errors: import('vue').Ref<Record<string, string>>
  setFieldError: (name: string, message: string) => void
  clearFieldError: (name: string) => void
  setErrors: (errors: Record<string, string>) => void
  submit: (event?: Event) => void
  reset: () => void
}