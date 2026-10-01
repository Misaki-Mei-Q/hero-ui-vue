<script setup lang="ts">
import { computed, getCurrentInstance, provide, ref, watch } from 'vue'
import { checkboxGroupVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { CHECKBOX_GROUP_CONTEXT_KEY } from './context'

interface CheckboxGroupProps {
  class?: string
  defaultValue?: string[]
  disabled?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  modelValue?: string[]
  name?: string
  required?: boolean
  value?: string[]
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  defaultValue: () => [],
  disabled: undefined,
  isDisabled: undefined,
  isInvalid: undefined,
  isRequired: undefined,
  modelValue: undefined,
  required: undefined,
  value: undefined,
  variant: 'primary',
})

const emit = defineEmits<{
  change: [value: string[]]
  invalid: [event: Event]
  'update:modelValue': [value: string[]]
  'update:value': [value: string[]]
}>()

const instance = getCurrentInstance()
const hasProp = (name: string) => {
  const rawProps = instance?.vnode.props ?? {}
  const kebabName = name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)

  return name in rawProps || kebabName in rawProps
}

const internalValue = ref<string[]>([...props.defaultValue])
const selectedValues = computed(() =>
  hasProp('modelValue')
    ? (props.modelValue ?? [])
    : hasProp('value')
      ? (props.value ?? [])
      : internalValue.value,
)
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const finalIsRequired = computed(() => props.required ?? props.isRequired)
const internalIsInvalid = ref(false)
const validationMessage = ref('')
const validationProxyRef = ref<HTMLInputElement | null>(null)
const finalIsInvalid = computed(() => props.isInvalid || internalIsInvalid.value)
const groupClass = computed(() =>
  composeTwClasses(props.class, checkboxGroupVariants({ variant: props.variant })),
)

const setSelectedValues = (nextValue: string[]) => {
  internalValue.value = nextValue
  if (nextValue.length > 0) {
    internalIsInvalid.value = false
    validationMessage.value = ''
  }
  emit('update:modelValue', nextValue)
  emit('update:value', nextValue)
  emit('change', nextValue)
}

const toggleValue = (value: string, isSelected: boolean) => {
  const nextSet = new Set(selectedValues.value)

  if (isSelected) {
    nextSet.add(value)
  } else {
    nextSet.delete(value)
  }

  setSelectedValues([...nextSet])
}

const handleInvalid = (event: Event) => {
  event.preventDefault()
  internalIsInvalid.value = true
  validationMessage.value =
    validationProxyRef.value?.validationMessage || 'Please select at least one option.'
  emit('invalid', event)
}

watch(
  () => props.defaultValue,
  (defaultValue) => {
    if (!hasProp('modelValue') && !hasProp('value')) {
      internalValue.value = [...defaultValue]
    }
  },
)

watch(selectedValues, (value) => {
  if (value.length > 0) {
    internalIsInvalid.value = false
    validationMessage.value = ''
  }
})

provide(CHECKBOX_GROUP_CONTEXT_KEY, {
  isDisabled: finalIsDisabled,
  isInvalid: finalIsInvalid,
  isRequired: finalIsRequired,
  name: computed(() => props.name),
  selectedValues,
  toggleValue,
  variant: computed(() => props.variant),
})
</script>

<template>
  <div
    :class="groupClass"
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-invalid="dataAttr(finalIsInvalid)"
    :aria-required="dataAttr(finalIsRequired)"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-invalid="dataAttr(finalIsInvalid)"
    :data-required="dataAttr(finalIsRequired)"
    role="group"
    data-slot="checkbox-group"
  >
    <input
      v-if="finalIsRequired"
      ref="validationProxyRef"
      class="checkbox-group__validation-proxy"
      type="checkbox"
      :checked="selectedValues.length > 0"
      required
      tabindex="-1"
      aria-hidden="true"
      @click.prevent
      @invalid="handleInvalid"
      @keydown.prevent
    >
    <slot :value="selectedValues" :is-invalid="finalIsInvalid" :validation-message="validationMessage" />
  </div>
</template>
