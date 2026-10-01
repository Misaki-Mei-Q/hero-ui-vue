<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { toggleButtonGroupVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { TOGGLE_BUTTON_GROUP_CONTEXT_KEY } from './context'

interface ToggleButtonGroupProps {
  class?: string
  defaultSelectedKeys?: Array<string | number>
  disabled?: boolean
  fullWidth?: boolean
  isDetached?: boolean
  isDisabled?: boolean
  modelValue?: Array<string | number>
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<ToggleButtonGroupProps>(), {
  defaultSelectedKeys: () => [],
  disabled: undefined,
  fullWidth: false,
  isDetached: false,
  isDisabled: undefined,
  orientation: 'horizontal',
})

const emit = defineEmits<{
  'update:modelValue': [keys: Array<string | number>]
}>()

const internalSelectedKeys = ref<Array<string | number>>([...props.defaultSelectedKeys])
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const selectedKeys = computed(() => props.modelValue ?? internalSelectedKeys.value)

const slots = computed(() =>
  toggleButtonGroupVariants({
    fullWidth: props.fullWidth,
    isDetached: props.isDetached,
    orientation: props.orientation,
  }),
)

provide(TOGGLE_BUTTON_GROUP_CONTEXT_KEY, {
  isDisabled: finalIsDisabled.value,
  size: props.size,
  slots: slots.value,
})

const groupClass = computed(() => composeTwClasses(props.class, slots.value.base()))

const toggleKey = (key: string | number) => {
  if (finalIsDisabled.value) return

  const next = selectedKeys.value.includes(key)
    ? selectedKeys.value.filter((item) => item !== key)
    : [...selectedKeys.value, key]

  internalSelectedKeys.value = next
  emit('update:modelValue', next)
}

defineExpose({
  selectedKeys,
  toggleKey,
})
</script>

<template>
  <div
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-orientation="props.orientation"
    :class="groupClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-orientation="props.orientation"
    data-slot="toggle-button-group"
    role="group"
  >
    <slot :selected-keys="selectedKeys" :toggle-key="toggleKey" />
  </div>
</template>
