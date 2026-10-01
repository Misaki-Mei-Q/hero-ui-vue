<script setup lang="ts">
import { computed, inject, type ButtonHTMLAttributes } from 'vue'
import { buttonVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr, useInteractionStates } from '../../utils'
import { BUTTON_GROUP_CONTEXT_KEY, type ButtonGroupContext } from '../button-group/context'

export interface ButtonRenderProps {
  isPending: boolean
  isPressed: boolean
  isHovered: boolean
  isFocused: boolean
  isFocusVisible: boolean
  isDisabled: boolean
}

export interface ButtonProps {
  as?: string
  disabled?: boolean
  isDisabled?: boolean
  type?: ButtonHTMLAttributes['type']
  class?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'danger-soft' | 'outline' | 'ghost'
  fullWidth?: boolean
  isIconOnly?: boolean
  isPending?: boolean
  onPress?: (event: MouseEvent | KeyboardEvent) => void
}

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  disabled: undefined,
  fullWidth: undefined,
  isDisabled: undefined,
  isPending: false,
  type: 'button',
})

const buttonGroupContext = inject<ButtonGroupContext | null>(
  BUTTON_GROUP_CONTEXT_KEY,
  null,
)

const finalSize = computed(() => props.size ?? buttonGroupContext?.size)
const finalVariant = computed(() => props.variant ?? buttonGroupContext?.variant)
const finalIsDisabled = computed<boolean>(
  () => Boolean(props.disabled ?? props.isDisabled ?? buttonGroupContext?.isDisabled),
)
const finalFullWidth = computed(
  () => props.fullWidth ?? buttonGroupContext?.fullWidth,
)

const { interactionAttrs, interactionHandlers, isPressed, isHovered, isFocused, isFocusVisible } =
  useInteractionStates(() => finalIsDisabled.value || props.isPending)

const buttonClass = computed(() => {
  const styles = buttonVariants({
    fullWidth: finalFullWidth.value,
    isIconOnly: props.isIconOnly,
    size: finalSize.value,
    variant: finalVariant.value,
  })

  return composeTwClasses(props.class, styles)
})

const handleClick = (event: MouseEvent) => {
  if (finalIsDisabled.value || props.isPending) return
  props.onPress?.(event)
}

const handleKeyDown = (event: KeyboardEvent) => {
  interactionHandlers.keydown(event)
  if ((event.key === 'Enter' || event.key === ' ') && !finalIsDisabled.value && !props.isPending) {
    props.onPress?.(event)
  }
}

const renderProps = computed<ButtonRenderProps>(() => ({
  isPending: props.isPending,
  isPressed: isPressed.value,
  isHovered: isHovered.value,
  isFocused: isFocused.value,
  isFocusVisible: isFocusVisible.value,
  isDisabled: finalIsDisabled.value,
}))
</script>

<template>
  <component
    :is="props.as"
    :class="buttonClass"
    :aria-disabled="dataAttr(finalIsDisabled)"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-pending="dataAttr(props.isPending)"
    :disabled="finalIsDisabled"
    :type="props.type"
    data-slot="button"
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
    <slot :is-pending="renderProps.isPending" :is-pressed="renderProps.isPressed" :is-hovered="renderProps.isHovered" :is-focused="renderProps.isFocused" :is-focus-visible="renderProps.isFocusVisible" :is-disabled="renderProps.isDisabled" />
  </component>
</template>