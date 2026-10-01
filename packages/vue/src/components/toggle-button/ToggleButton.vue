<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Toggle } from 'radix-vue'
import { toggleButtonVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr, useInteractionStates } from '../../utils'

interface ToggleButtonProps {
  class?: string
  defaultSelected?: boolean
  disabled?: boolean
  isDisabled?: boolean
  isIconOnly?: boolean
  selected?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'ghost'
}

const props = withDefaults(defineProps<ToggleButtonProps>(), {
  defaultSelected: false,
  disabled: undefined,
  isDisabled: undefined,
  isIconOnly: false,
})

const emit = defineEmits<{
  'update:selected': [selected: boolean]
}>()

const internalSelected = ref(props.defaultSelected)
const isSelected = computed(() => props.selected ?? internalSelected.value)
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const { interactionAttrs, interactionHandlers } = useInteractionStates(() => finalIsDisabled.value)

watch(
  () => props.defaultSelected,
  (value) => {
    if (props.selected === undefined) internalSelected.value = value
  },
)

const toggleClass = computed(() =>
  composeTwClasses(
    props.class,
    toggleButtonVariants({
      isIconOnly: props.isIconOnly,
      size: props.size,
      variant: props.variant,
    }),
  ),
)

const handlePressedChange = (pressed: boolean) => {
  internalSelected.value = pressed
  emit('update:selected', pressed)
}
</script>

<template>
  <Toggle
    :class="toggleClass"
    :disabled="finalIsDisabled"
    :pressed="isSelected"
    :aria-disabled="dataAttr(finalIsDisabled)"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-selected="dataAttr(isSelected)"
    data-slot="toggle-button"
    v-bind="interactionAttrs"
    v-on="interactionHandlers"
    @update:pressed="handlePressedChange"
  >
    <slot />
  </Toggle>
</template>
