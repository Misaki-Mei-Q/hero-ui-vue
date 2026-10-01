<script setup lang="ts">
import { computed } from 'vue'
import { textAreaVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr, useInteractionStates } from '../../utils'

interface TextareaProps {
  class?: string
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  value?: string
  placeholder?: string
  disabled?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  readonly?: boolean
  required?: boolean
  isRequired?: boolean
  rows?: number
  cols?: number
  name?: string
  id?: string
}

const props = withDefaults(defineProps<TextareaProps>(), {
  disabled: undefined,
  fullWidth: false,
  isDisabled: undefined,
  isInvalid: undefined,
  isRequired: undefined,
  readonly: undefined,
  required: undefined,
  variant: 'primary',
})

const emit = defineEmits<{
  'update:value': [value: string]
  input: [event: Event]
  change: [event: Event]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const { interactionAttrs, interactionHandlers } = useInteractionStates(() => finalIsDisabled.value)

const textareaClass = computed(() => {
  const styles = textAreaVariants({
    variant: props.variant,
    fullWidth: props.fullWidth,
  })
  return composeTwClasses(props.class, styles)
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:value', target.value)
  emit('input', event)
}
</script>

<template>
  <textarea
    :class="textareaClass"
    :value="value"
    :placeholder="placeholder"
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-invalid="dataAttr(isInvalid)"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-invalid="dataAttr(isInvalid)"
    :data-required="dataAttr(required ?? isRequired)"
    :disabled="finalIsDisabled"
    :readonly="readonly"
    :required="required ?? isRequired"
    :rows="rows"
    :cols="cols"
    :name="name"
    :id="id"
    data-slot="textarea"
    v-bind="interactionAttrs"
    v-on="interactionHandlers"
    @input="handleInput"
    @change="emit('change', $event)"
    @focus="emit('focus', $event)"
    @blur="emit('blur', $event)"
  />
</template>
