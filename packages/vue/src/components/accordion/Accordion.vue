<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import { accordionVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { ACCORDION_CONTEXT_KEY } from './context'

interface AccordionProps {
  allowsMultipleExpanded?: boolean
  class?: string
  collapsible?: boolean
  defaultValue?: string | string[]
  disabled?: boolean
  hideSeparator?: boolean
  isDisabled?: boolean
  modelValue?: string | string[]
  orientation?: 'horizontal' | 'vertical'
  type?: 'single' | 'multiple'
  value?: string | string[]
  variant?: 'default' | 'surface'
}

const props = withDefaults(defineProps<AccordionProps>(), {
  allowsMultipleExpanded: undefined,
  collapsible: true,
  disabled: undefined,
  hideSeparator: undefined,
  isDisabled: undefined,
  orientation: 'vertical',
  type: undefined,
  variant: 'default',
})

const emit = defineEmits<{
  'update:modelValue': [value: string | string[] | undefined]
  'update:value': [value: string | string[] | undefined]
  change: [value: string | string[] | undefined]
}>()

const isMultiple = computed(() => props.type === 'multiple' || props.allowsMultipleExpanded)
const internalValue = ref<string | string[] | undefined>(props.defaultValue ?? (isMultiple.value ? [] : undefined))
const currentValue = computed(() => props.modelValue ?? props.value ?? internalValue.value)
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const slots = computed(() => accordionVariants({ variant: props.variant }))
const accordionClass = computed(() => composeTwClasses(props.class, slots.value.base()))

watch(
  () => props.defaultValue,
  (value) => {
    if (props.modelValue === undefined && props.value === undefined) internalValue.value = value
  },
)

const isExpanded = (value: string) => {
  const selected = currentValue.value
  return Array.isArray(selected) ? selected.includes(value) : selected === value
}

const commitValue = (value: string | string[] | undefined) => {
  internalValue.value = value
  emit('update:modelValue', value)
  emit('update:value', value)
  emit('change', value)
}

const toggle = (value: string) => {
  if (finalIsDisabled.value) return

  if (isMultiple.value) {
    const selected = Array.isArray(currentValue.value) ? currentValue.value : []
    commitValue(selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value])
    return
  }

  commitValue(isExpanded(value) && props.collapsible ? undefined : value)
}

provide(ACCORDION_CONTEXT_KEY, {
  disabled: finalIsDisabled,
  hideSeparator: computed(() => props.hideSeparator),
  isExpanded,
  slots: slots.value,
  toggle,
})
</script>

<template>
  <div
    :class="accordionClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-orientation="orientation"
    data-slot="accordion"
  >
    <slot :model-value="currentValue" />
  </div>
</template>
