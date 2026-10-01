<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import type { FormContextValue } from './context'

const FORM_CONTEXT_KEY = Symbol('HeroUIFormContext') as unknown as import('vue').InjectionKey<FormContextValue>

interface FormProps {
  class?: string
  errors?: Record<string, string>
  isSubmitting?: boolean
  validationBehavior?: 'native' | 'aria'
  omitResetFields?: string[]
}

const props = withDefaults(defineProps<FormProps>(), {
  errors: () => ({}),
  isSubmitting: false,
  validationBehavior: 'native',
  omitResetFields: () => [],
})

const emit = defineEmits<{
  submit: [event?: SubmitEvent]
  'submit-success': [event?: SubmitEvent]
  'submit-error': [event?: SubmitEvent]
  reset: [event?: Event]
}>()

const errors = ref<Record<string, string>>({ ...props.errors })
const isSubmitting = ref(props.isSubmitting)
const isSubmitted = ref(false)

watch(
  () => props.errors,
  (next) => {
    errors.value = { ...next }
  },
  { deep: true },
)

watch(
  () => props.isSubmitting,
  (next) => {
    isSubmitting.value = next
  },
)

function setFieldError(name: string, message: string) {
  errors.value = { ...errors.value, [name]: message }
}

function clearFieldError(name: string) {
  if (!(name in errors.value)) return
  const next = { ...errors.value }
  delete next[name]
  errors.value = next
}

function setErrors(next: Record<string, string>) {
  errors.value = { ...next }
}

function submit(event?: SubmitEvent | Event) {
  isSubmitted.value = true
  emit('submit', event as SubmitEvent | undefined)
}

function reset(event?: Event) {
  const next: Record<string, string> = {}
  for (const [name, message] of Object.entries(errors.value)) {
    if (!props.omitResetFields.includes(name)) {
      next[name] = message
    }
  }
  errors.value = next
  isSubmitted.value = false
  emit('reset', event)
}

provide(FORM_CONTEXT_KEY, {
  isSubmitting,
  isSubmitted,
  errors,
  setFieldError,
  clearFieldError,
  setErrors,
  submit,
  reset,
})

const formClasses = computed(() => props.class)
</script>

<template>
  <form
    :class="formClasses"
    :data-slot="formClasses ? 'form' : undefined"
    :data-submitting="isSubmitting ? 'true' : undefined"
    :data-submitted="isSubmitted ? 'true' : undefined"
    novalidate
    @submit.prevent="submit($event)"
    @reset.prevent="reset($event)"
  >
    <slot />
  </form>
</template>