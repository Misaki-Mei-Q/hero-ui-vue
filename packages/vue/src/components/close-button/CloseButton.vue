<script setup lang="ts">
import { computed } from 'vue'
import { closeButtonVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr, useInteractionStates } from '../../utils'

export interface CloseButtonProps {
  class?: string
  variant?: 'default'
  disabled?: boolean
  isDisabled?: boolean
  ariaLabel?: string
  onPress?: (event: MouseEvent | KeyboardEvent) => void
}

const props = withDefaults(defineProps<CloseButtonProps>(), {
  ariaLabel: 'Close',
  disabled: undefined,
  isDisabled: undefined,
})

const slots = defineSlots<{
  default?: () => any
}>()

const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const { interactionAttrs, interactionHandlers } = useInteractionStates(() => finalIsDisabled.value)

const closeButtonClass = computed(() => {
  const styles = closeButtonVariants({
    variant: props.variant,
  })
  return composeTwClasses(props.class, styles)
})

const handleClick = (event: MouseEvent) => {
  if (finalIsDisabled.value) return
  props.onPress?.(event)
}

const handleKeyDown = (event: KeyboardEvent) => {
  interactionHandlers.keydown(event)
  if ((event.key === 'Enter' || event.key === ' ') && !finalIsDisabled.value) {
    props.onPress?.(event)
  }
}
</script>

<template>
  <button
    :aria-label="props.ariaLabel"
    :aria-disabled="dataAttr(finalIsDisabled)"
    :class="closeButtonClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    :disabled="finalIsDisabled"
    data-slot="close-button"
    type="button"
    v-bind="interactionAttrs"
    @blur="interactionHandlers.blur"
    @click="handleClick"
    @focus="interactionHandlers.focus"
    @keydown="handleKeyDown"
    @keyup="interactionHandlers.keyup"
    @pointercancel="interactionHandlers.pointercancel"
    @pointerdown="interactionHandlers.pointerdown"
    @pointerenter="interactionHandlers.pointerenter"
    @pointerleave="interactionHandlers.pointerleave"
    @pointerup="interactionHandlers.pointerup"
  >
    <slot v-if="slots.default" />
    <svg
      v-else
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      data-slot="close-button-icon"
      role="presentation"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="1em"
    >
      <line x1="18" x2="6" y1="6" y2="18"></line>
      <line x1="6" x2="18" y1="6" y2="18"></line>
    </svg>
  </button>
</template>
