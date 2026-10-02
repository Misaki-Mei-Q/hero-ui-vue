<script setup lang="ts">
import { computed, getCurrentInstance, provide, ref, useId, watch } from 'vue'
import { numberFieldVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { NUMBER_FIELD_CONTEXT_KEY } from './context'

interface NumberFieldProps {
  class?: string
  defaultValue?: number
  disabled?: boolean
  formatOptions?: Intl.NumberFormatOptions
  fullWidth?: boolean
  id?: string
  isDisabled?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  locale?: string
  maxValue?: number
  minValue?: number
  modelValue?: number
  name?: string
  required?: boolean
  step?: number
  value?: number
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<NumberFieldProps>(), {
  defaultValue: undefined,
  disabled: undefined,
  fullWidth: false,
  isDisabled: undefined,
  isInvalid: undefined,
  isRequired: undefined,
  locale: undefined,
  maxValue: undefined,
  minValue: undefined,
  modelValue: undefined,
  required: undefined,
  step: 1,
  value: undefined,
  variant: 'primary',
})

const emit = defineEmits<{
  change: [value: number | undefined]
  'update:modelValue': [value: number | undefined]
  'update:value': [value: number | undefined]
}>()

const instance = getCurrentInstance()
const hasProp = (name: string) => {
  const rawProps = instance?.vnode.props ?? {}
  const kebabName = name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)

  return name in rawProps || kebabName in rawProps
}

const internalValue = ref<number | undefined>(props.defaultValue)
const inputRef = ref<HTMLInputElement | null>(null)
const isFocused = ref(false)
const inputDraft = ref('')

const value = computed(() =>
  hasProp('modelValue')
    ? props.modelValue
    : hasProp('value')
      ? props.value
      : internalValue.value,
)
const generatedId = useId()
const id = computed(() => props.id || `number-field-${generatedId}`)
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const finalIsInvalid = computed(() => props.isInvalid)
const finalIsRequired = computed(() => props.required ?? props.isRequired)
const minValue = computed(() => props.minValue)
const maxValue = computed(() => props.maxValue)
const step = computed(() => props.step)
const slots = computed(() =>
  numberFieldVariants({
    fullWidth: props.fullWidth,
    variant: props.variant,
  }),
)
const numberFieldClass = computed(() => composeTwClasses(props.class, slots.value.base()))

const numberFormatter = computed(() => {
  if (!props.formatOptions) return undefined

  return new Intl.NumberFormat(props.locale, props.formatOptions)
})
const isPercentFormat = computed(() => props.formatOptions?.style === 'percent')

const getEditableValue = (nextValue: number | undefined) => {
  if (nextValue === undefined) return ''
  if (props.formatOptions) return formatValue(nextValue)

  return String(nextValue)
}

const normalizeNumber = (nextValue: number | undefined) => {
  if (nextValue === undefined || Number.isNaN(nextValue)) return undefined

  return nextValue
}

const normalizeStepValue = (nextValue: number) => {
  const precision = String(step.value).split('.')[1]?.length ?? 0

  return Number(nextValue.toFixed(Math.min(Math.max(precision, 0), 12)))
}

const setValue = (nextValue: number | undefined) => {
  const normalizedValue = normalizeNumber(nextValue)

  internalValue.value = normalizedValue
  emit('update:modelValue', normalizedValue)
  emit('update:value', normalizedValue)
  emit('change', normalizedValue)
}

const clampValue = (nextValue: number) => {
  let clampedValue = nextValue

  if (minValue.value !== undefined) clampedValue = Math.max(clampedValue, minValue.value)
  if (maxValue.value !== undefined) clampedValue = Math.min(clampedValue, maxValue.value)

  return clampedValue
}

const parseInput = (nextText: string) => {
  const numericText = nextText
    .replace(/,/g, '')
    .replace(/[^\d.-]/g, '')
    .replace(/(?!^)-/g, '')
    .replace(/(\..*)\./g, '$1')

  inputDraft.value = props.formatOptions ? nextText : numericText

  if (numericText.trim() === '' || numericText === '-' || numericText === '.') {
    setValue(undefined)
    return
  }

  const parsedValue = Number(numericText)

  if (!Number.isNaN(parsedValue)) {
    const nextValue = isPercentFormat.value ? parsedValue / 100 : parsedValue

    setValue(nextValue)
  }
}

const formatValue = (nextValue: number | undefined) => {
  if (nextValue === undefined) return ''

  return numberFormatter.value?.format(nextValue) ?? String(nextValue)
}

const inputText = computed(() => {
  if (isFocused.value) return inputDraft.value

  return formatValue(value.value)
})

const isIncrementDisabled = computed(() =>
  Boolean(finalIsDisabled.value || (maxValue.value !== undefined && (value.value ?? 0) >= maxValue.value)),
)
const isDecrementDisabled = computed(() =>
  Boolean(finalIsDisabled.value || (minValue.value !== undefined && (value.value ?? 0) <= minValue.value)),
)

const increment = () => {
  if (isIncrementDisabled.value) return
  setValue(clampValue(normalizeStepValue((value.value ?? 0) + step.value)))
}

const decrement = () => {
  if (isDecrementDisabled.value) return
  setValue(clampValue(normalizeStepValue((value.value ?? 0) - step.value)))
}

const setFocused = (focused: boolean) => {
  isFocused.value = focused
  inputDraft.value = focused ? getEditableValue(value.value) : ''
}

watch(
  () => props.defaultValue,
  (defaultValue) => {
    if (!hasProp('modelValue') && !hasProp('value')) {
      internalValue.value = defaultValue
    }
  },
)

watch(
  () => (hasProp('modelValue') ? props.modelValue : hasProp('value') ? props.value : undefined),
  (nextValue) => {
    if (isFocused.value) inputDraft.value = getEditableValue(nextValue)
  },
)

provide(NUMBER_FIELD_CONTEXT_KEY, {
  decrement,
  formatValue,
  id,
  increment,
  inputRef,
  inputText,
  isDecrementDisabled,
  isDisabled: finalIsDisabled,
  isFocused,
  isIncrementDisabled,
  isInvalid: finalIsInvalid,
  isRequired: finalIsRequired,
  maxValue,
  minValue,
  name: computed(() => props.name),
  parseInput,
  setFocused,
  slots,
  step,
  value,
})
</script>

<template>
  <div
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-invalid="dataAttr(finalIsInvalid)"
    :class="numberFieldClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-invalid="dataAttr(finalIsInvalid)"
    :data-required="dataAttr(finalIsRequired)"
    data-slot="number-field"
  >
    <slot
      :value="value"
      :increment="increment"
      :decrement="decrement"
      :is-invalid="finalIsInvalid"
      :is-disabled="finalIsDisabled"
    />
  </div>
</template>
