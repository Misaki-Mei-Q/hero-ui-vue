<script setup lang="ts">
/* global Event, FocusEvent, HTMLInputElement */
import { computed, ref, watch } from 'vue'
import { inputVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses, dataAttr, useInteractionStates } from '../../utils'

interface InputProps {
  class?: string
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number'
  placeholder?: string
  modelValue?: string | number
  disabled?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  required?: boolean
  isRequired?: boolean
  name?: string
  id?: string
}

const props = withDefaults(defineProps<InputProps>(), {
  disabled: undefined,
  fullWidth: false,
  isDisabled: undefined,
  isInvalid: undefined,
  isRequired: undefined,
  required: undefined,
  type: 'text',
  variant: 'primary',
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  input: [event: Event]
}>()

const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const isControlled = computed(() => props.modelValue !== undefined)
const internalValue = ref<string | number>(props.modelValue ?? '')
const inputValue = computed(() => props.modelValue ?? internalValue.value)
const { interactionAttrs, interactionHandlers } = useInteractionStates(() => finalIsDisabled.value)

watch(
  () => props.modelValue,
  (value) => {
    if (isControlled.value) internalValue.value = value ?? ''
  },
)

const inputClass = computed(() => {
  const styles = inputVariants({
    variant: props.variant,
    fullWidth: props.fullWidth,
  })
  return composeTwClasses(props.class, styles)
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value

  if (!isControlled.value) internalValue.value = value
  emit('update:modelValue', value)
  emit('input', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}
</script>

<template>
  <input
    :id="props.id"
    :class="inputClass"
    :type="props.type"
    :placeholder="props.placeholder"
    :value="inputValue"
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-invalid="dataAttr(props.isInvalid)"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-invalid="dataAttr(props.isInvalid)"
    :data-required="dataAttr(props.required ?? props.isRequired)"
    :disabled="finalIsDisabled"
    :required="props.required ?? props.isRequired"
    :name="props.name"
    data-slot="input"
    v-bind="interactionAttrs"
    v-on="interactionHandlers"
    @input="handleInput"
    @blur="handleBlur"
    @focus="handleFocus"
  />
</template>
