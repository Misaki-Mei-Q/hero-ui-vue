<script setup lang="ts">
import { computed, getCurrentInstance, nextTick, provide, ref, watch, type ComponentPublicInstance } from 'vue'
import { inputOTPVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { INPUT_OTP_CONTEXT_KEY } from './context'

interface InputOTPProps {
  class?: string
  defaultValue?: string
  disabled?: boolean
  id?: string
  isDisabled?: boolean
  isInvalid?: boolean
  maxLength?: number
  modelValue?: string
  name?: string
  pattern?: RegExp | string
  value?: string
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<InputOTPProps>(), {
  defaultValue: '',
  disabled: undefined,
  isDisabled: undefined,
  isInvalid: undefined,
  maxLength: 6,
  modelValue: undefined,
  pattern: undefined,
  value: undefined,
  variant: 'primary',
})

const emit = defineEmits<{
  change: [value: string]
  complete: [value: string]
  'update:modelValue': [value: string]
  'update:value': [value: string]
}>()

const instance = getCurrentInstance()
const hasProp = (name: string) => {
  const rawProps = instance?.vnode.props ?? {}
  const kebabName = name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)

  return name in rawProps || kebabName in rawProps
}

const internalValue = ref(props.defaultValue)
const inputRef = ref<HTMLInputElement | null>(null)
const activeIndex = ref(0)
const isFocused = ref(false)

const value = computed(() =>
  hasProp('modelValue')
    ? (props.modelValue ?? '')
    : hasProp('value')
      ? (props.value ?? '')
      : internalValue.value,
)
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const finalIsInvalid = computed(() => props.isInvalid)
const maxLength = computed(() => props.maxLength)
const slots = computed(() => inputOTPVariants({ variant: props.variant }))
const inputOTPClass = computed(() => composeTwClasses(props.class, slots.value.base()))

const isAllowedCharacter = (character: string) => {
  if (!props.pattern) return true

  if (typeof props.pattern === 'string') {
    return new RegExp(props.pattern).test(character)
  }

  props.pattern.lastIndex = 0
  return props.pattern.test(character)
}

const sanitizeValue = (nextValue: string) =>
  Array.from(nextValue)
    .filter(isAllowedCharacter)
    .join('')
    .slice(0, maxLength.value)

const setValue = (nextValue: string) => {
  if (finalIsDisabled.value) return

  const sanitizedValue = sanitizeValue(nextValue)
  const wasComplete = value.value.length === maxLength.value

  internalValue.value = sanitizedValue
  activeIndex.value = Math.min(sanitizedValue.length, maxLength.value - 1)
  emit('update:modelValue', sanitizedValue)
  emit('update:value', sanitizedValue)
  emit('change', sanitizedValue)

  if (!wasComplete && sanitizedValue.length === maxLength.value) {
    emit('complete', sanitizedValue)
  }
}

const focusAt = async (index: number) => {
  if (finalIsDisabled.value) return

  const insertionIndex = Math.min(Math.max(index, 0), maxLength.value)

  activeIndex.value = Math.min(insertionIndex, maxLength.value - 1)
  await nextTick()
  inputRef.value?.focus()
  inputRef.value?.setSelectionRange(insertionIndex, insertionIndex)
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  setValue(target.value)
}

const handleFocus = () => {
  isFocused.value = true
}

const handleBlur = () => {
  isFocused.value = false
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Backspace' && value.value.length > 0) {
    event.preventDefault()
    const nextValue = value.value.slice(0, -1)

    setValue(nextValue)
    void focusAt(nextValue.length)
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    focusAt(activeIndex.value - 1)
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault()
    focusAt(activeIndex.value + 1)
  }
}

const setInputRef = (element: Element | ComponentPublicInstance | null) => {
  inputRef.value = element instanceof HTMLInputElement ? element : null
}

watch(
  () => props.defaultValue,
  (defaultValue) => {
    if (!hasProp('modelValue') && !hasProp('value')) {
      internalValue.value = sanitizeValue(defaultValue)
    }
  },
)

provide(INPUT_OTP_CONTEXT_KEY, {
  activeIndex,
  focusAt,
  inputRef,
  isDisabled: finalIsDisabled,
  isFocused,
  isInvalid: finalIsInvalid,
  maxLength,
  name: computed(() => props.name),
  setValue,
  slots,
  value,
})
</script>

<template>
  <div
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-invalid="dataAttr(finalIsInvalid)"
    :class="inputOTPClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-focus-within="dataAttr(isFocused)"
    :data-invalid="dataAttr(finalIsInvalid)"
    data-slot="input-otp"
    @click="focusAt(value.length)"
  >
    <input
      :id="props.id"
      :ref="setInputRef"
      :aria-disabled="dataAttr(finalIsDisabled)"
      :aria-invalid="dataAttr(finalIsInvalid)"
      :disabled="finalIsDisabled"
      :maxlength="maxLength"
      :name="props.name"
      :value="value"
      autocomplete="one-time-code"
      class="input-otp__native"
      data-slot="input-otp-input"
      inputmode="numeric"
      type="text"
      @blur="handleBlur"
      @focus="handleFocus"
      @input="handleInput"
      @keydown="handleKeydown"
    >
    <slot :value="value" :active-index="activeIndex" />
  </div>
</template>
