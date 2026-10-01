<script setup lang="ts">
import { computed, inject, type ButtonHTMLAttributes } from 'vue'
import { buttonVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr, useInteractionStates } from '../../utils'
import { BUTTON_GROUP_CONTEXT_KEY, type ButtonGroupContext } from '../button-group/context'

interface ButtonProps {
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
}

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  disabled: undefined,
  fullWidth: undefined,
  isDisabled: undefined,
  type: 'button',
})

const buttonGroupContext = inject<ButtonGroupContext | null>(
  BUTTON_GROUP_CONTEXT_KEY,
  null,
)

const finalSize = computed(() => props.size ?? buttonGroupContext?.size)
const finalVariant = computed(() => props.variant ?? buttonGroupContext?.variant)
const finalIsDisabled = computed(
  () => props.disabled ?? props.isDisabled ?? buttonGroupContext?.isDisabled,
)
const finalFullWidth = computed(
  () => props.fullWidth ?? buttonGroupContext?.fullWidth,
)

const { interactionAttrs, interactionHandlers } = useInteractionStates(
  () => finalIsDisabled.value || props.isPending,
)

const buttonClass = computed(() => {
  const styles = buttonVariants({
    fullWidth: finalFullWidth.value,
    isIconOnly: props.isIconOnly,
    size: finalSize.value,
    variant: finalVariant.value,
  })

  return composeTwClasses(props.class, styles)
})
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
    v-on="interactionHandlers"
  >
    <slot />
  </component>
</template>
