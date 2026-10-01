<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import { RadioGroupRoot } from 'radix-vue'
import { radioGroupVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { RADIO_GROUP_CONTEXT_KEY } from './context'

interface RadioGroupProps {
  class?: string
  variant?: 'primary' | 'secondary'
  modelValue?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  isDisabled?: boolean
  readonly?: boolean
  isReadOnly?: boolean
  isInvalid?: boolean
  required?: boolean
  isRequired?: boolean
  name?: string
  orientation?: 'horizontal' | 'vertical'
  loop?: boolean
}

const props = withDefaults(defineProps<RadioGroupProps>(), {
  disabled: undefined,
  isDisabled: undefined,
  isInvalid: undefined,
  isReadOnly: undefined,
  isRequired: undefined,
  orientation: 'vertical',
  readonly: undefined,
  loop: true,
  required: undefined,
  variant: 'primary',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:value': [value: string]
  change: [value: string]
}>()

const internalValue = ref(props.defaultValue)
const selectedValue = computed(() => props.modelValue ?? props.value ?? internalValue.value)
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const finalIsReadOnly = computed(() => props.readonly ?? props.isReadOnly)
const finalIsInvalid = computed(() => props.isInvalid)

watch(
  () => props.defaultValue,
  (value) => {
    if (props.modelValue === undefined && props.value === undefined) internalValue.value = value
  },
)

provide(RADIO_GROUP_CONTEXT_KEY, {
  isDisabled: finalIsDisabled,
  isInvalid: finalIsInvalid,
  isReadOnly: finalIsReadOnly,
  selectedValue,
})

const radioGroupClass = computed(() => {
  const styles = radioGroupVariants({ variant: props.variant })
  return composeTwClasses(props.class, styles)
})

const handleValueChange = (value: string) => {
  if (finalIsReadOnly.value) return

  internalValue.value = value
  emit('update:modelValue', value)
  emit('update:value', value)
  emit('change', value)
}
</script>

<template>
  <RadioGroupRoot
    :class="radioGroupClass"
    :model-value="selectedValue"
    :default-value="defaultValue"
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-invalid="dataAttr(finalIsInvalid)"
    :aria-readonly="dataAttr(finalIsReadOnly)"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-invalid="dataAttr(finalIsInvalid)"
    :data-readonly="dataAttr(finalIsReadOnly)"
    :data-required="dataAttr(required ?? isRequired)"
    :disabled="finalIsDisabled"
    :required="required ?? isRequired"
    :name="name"
    :orientation="orientation"
    :loop="loop"
    data-slot="radio-group"
    @update:model-value="handleValueChange"
  >
    <slot />
  </RadioGroupRoot>
</template>
