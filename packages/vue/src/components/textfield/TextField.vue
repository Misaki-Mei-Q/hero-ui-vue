<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { textFieldVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import Label from '../label/Label.vue'
import Description from '../description/Description.vue'
import FieldError from '../field-error/FieldError.vue'
import Input from '../input/Input.vue'

interface TextFieldProps {
  class?: string
  fullWidth?: boolean
  label?: string
  description?: string
  error?: string
  required?: boolean
  isRequired?: boolean
  disabled?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  variant?: 'primary' | 'secondary'
  // Input props
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number'
  placeholder?: string
  modelValue?: string | number
  name?: string
  id?: string
}

const props = withDefaults(defineProps<TextFieldProps>(), {
  disabled: undefined,
  fullWidth: false,
  isDisabled: undefined,
  isInvalid: undefined,
  isRequired: undefined,
  required: undefined,
  type: 'text',
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}>()

const slots = useSlots()

const textFieldClass = computed(() => {
  const styles = textFieldVariants({ fullWidth: props.fullWidth })
  return composeTwClasses(props.class, styles)
})

const finalIsRequired = computed(() => props.required ?? props.isRequired)
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const finalIsInvalid = computed(() => props.isInvalid ?? Boolean(props.error || slots.error))
const inputId = computed(() => props.id || `textfield-${Math.random().toString(36).substr(2, 9)}`)

const handleInput = (value: string | number) => {
  emit('update:modelValue', value)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}
</script>

<template>
  <div
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-invalid="dataAttr(finalIsInvalid)"
    :class="textFieldClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-invalid="dataAttr(finalIsInvalid)"
    :data-required="dataAttr(finalIsRequired)"
    data-slot="textfield"
  >
    <Label
      v-if="props.label || slots.label"
      :for="inputId"
      :is-disabled="finalIsDisabled"
      :is-invalid="finalIsInvalid"
      :is-required="finalIsRequired"
    >
      <slot name="label">{{ props.label }}</slot>
    </Label>

    <Input
      :id="inputId"
      :type="props.type"
      :placeholder="props.placeholder"
      :model-value="props.modelValue"
      :name="props.name"
      :is-disabled="finalIsDisabled"
      :is-invalid="finalIsInvalid"
      :required="finalIsRequired"
      :full-width="props.fullWidth"
      :variant="props.variant"
      @update:model-value="handleInput"
      @blur="handleBlur"
      @focus="handleFocus"
    />

    <Description v-if="props.description || slots.description">
      <slot name="description">{{ props.description }}</slot>
    </Description>

    <FieldError v-if="props.error || slots.error">
      <slot name="error">{{ props.error }}</slot>
    </FieldError>
  </div>
</template>
