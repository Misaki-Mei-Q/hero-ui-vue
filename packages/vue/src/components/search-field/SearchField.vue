<script setup lang="ts">
import { computed, getCurrentInstance, provide, ref, watch } from 'vue'
import { searchFieldVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { SEARCH_FIELD_CONTEXT_KEY } from './context'

interface SearchFieldProps {
  class?: string
  defaultValue?: string
  disabled?: boolean
  fullWidth?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  modelValue?: string
  name?: string
  required?: boolean
  value?: string
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<SearchFieldProps>(), {
  defaultValue: '',
  disabled: undefined,
  fullWidth: false,
  isDisabled: undefined,
  isInvalid: undefined,
  isRequired: undefined,
  modelValue: undefined,
  required: undefined,
  value: undefined,
  variant: 'primary',
})

const emit = defineEmits<{
  change: [value: string]
  clear: []
  submit: [value: string]
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
const isFocused = ref(false)
const value = computed(() =>
  hasProp('modelValue')
    ? (props.modelValue ?? '')
    : hasProp('value')
      ? (props.value ?? '')
      : internalValue.value,
)
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const finalIsRequired = computed(() => props.required ?? props.isRequired)
const finalIsInvalid = computed(() => props.isInvalid)
const isEmpty = computed(() => value.value.length === 0)
const slots = computed(() =>
  searchFieldVariants({
    fullWidth: props.fullWidth,
    variant: props.variant,
  }),
)
const searchFieldClass = computed(() => composeTwClasses(props.class, slots.value.base()))

const updateValue = (nextValue: string) => {
  internalValue.value = nextValue
  emit('update:modelValue', nextValue)
  emit('update:value', nextValue)
  emit('change', nextValue)
}

const clear = () => {
  if (finalIsDisabled.value) return
  updateValue('')
  emit('clear')
  inputRef.value?.focus()
}

const setFocused = (focused: boolean) => {
  isFocused.value = focused
}

const submit = () => {
  emit('submit', value.value)
}

watch(
  () => props.defaultValue,
  (defaultValue) => {
    if (!hasProp('modelValue') && !hasProp('value')) {
      internalValue.value = defaultValue
    }
  },
)

provide(SEARCH_FIELD_CONTEXT_KEY, {
  clear,
  inputRef,
  isDisabled: finalIsDisabled,
  isFocused,
  isInvalid: finalIsInvalid,
  isRequired: finalIsRequired,
  name: computed(() => props.name),
  setFocused,
  slots,
  submit,
  updateValue,
  value,
})
</script>

<template>
  <div
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-invalid="dataAttr(finalIsInvalid)"
    :class="searchFieldClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-empty="dataAttr(isEmpty)"
    :data-focus-within="dataAttr(isFocused)"
    :data-invalid="dataAttr(finalIsInvalid)"
    :data-required="dataAttr(finalIsRequired)"
    data-slot="search-field"
  >
    <slot :value="value" :is-empty="isEmpty" :is-focused="isFocused" :clear="clear" />
  </div>
</template>
