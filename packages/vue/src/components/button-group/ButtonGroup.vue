<script setup lang="ts">
import { computed, provide } from 'vue'
import { buttonGroupVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { BUTTON_GROUP_CONTEXT_KEY } from './context'

interface ButtonGroupProps {
  class?: string
  fullWidth?: boolean
  isDisabled?: boolean
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'danger-soft' | 'outline' | 'ghost'
}

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  fullWidth: undefined,
  isDisabled: undefined,
  orientation: 'horizontal',
})

const slots = computed(() =>
  buttonGroupVariants({
    orientation: props.orientation,
    fullWidth: props.fullWidth,
  }),
)

provide(BUTTON_GROUP_CONTEXT_KEY, {
  size: props.size,
  variant: props.variant,
  isDisabled: props.isDisabled,
  fullWidth: props.fullWidth,
  slots: slots.value,
})

const groupClass = computed(() => {
  return composeTwClasses(props.class, slots.value.base())
})
</script>

<template>
  <div
    :aria-disabled="dataAttr(props.isDisabled)"
    :aria-orientation="props.orientation"
    :class="groupClass"
    :data-disabled="dataAttr(props.isDisabled)"
    :data-orientation="props.orientation"
    data-slot="button-group"
    role="group"
  >
    <slot />
  </div>
</template>
