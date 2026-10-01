<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import { TabsRoot } from 'radix-vue'
import { tabsVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'
import { TABS_CONTEXT_KEY } from './context'

interface TabsProps {
  class?: string
  defaultValue?: string
  disabled?: boolean
  isDisabled?: boolean
  orientation?: 'horizontal' | 'vertical'
  value?: string
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<TabsProps>(), {
  disabled: undefined,
  isDisabled: undefined,
  orientation: 'horizontal',
})

const emit = defineEmits<{
  'update:value': [value: string]
}>()

const internalValue = ref(props.defaultValue)
const selectedValue = computed(() => props.value ?? internalValue.value)
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const slots = computed(() => tabsVariants({ variant: props.variant }))

watch(
  () => props.defaultValue,
  (value) => {
    if (props.value === undefined) internalValue.value = value
  },
)

provide(TABS_CONTEXT_KEY, {
  selectedValue,
  slots: slots.value,
})

const tabsClass = computed(() => composeTwClasses(props.class, slots.value.base()))

const handleValueChange = (value: string | number) => {
  const nextValue = String(value)
  internalValue.value = nextValue
  emit('update:value', nextValue)
}
</script>

<template>
  <TabsRoot
    :class="tabsClass"
    :disabled="finalIsDisabled"
    :model-value="selectedValue"
    :orientation="props.orientation"
    data-slot="tabs"
    @update:model-value="handleValueChange"
  >
    <slot />
  </TabsRoot>
</template>
