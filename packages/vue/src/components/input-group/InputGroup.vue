<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { inputGroupVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { INPUT_GROUP_CONTEXT_KEY } from './context'

interface InputGroupProps {
  class?: string
  fullWidth?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<InputGroupProps>(), {
  fullWidth: false,
  isDisabled: undefined,
  isInvalid: undefined,
})

const groupRef = ref<HTMLDivElement | null>(null)
const slots = computed(() =>
  inputGroupVariants({
    fullWidth: props.fullWidth,
    variant: props.variant,
  }),
)

provide(INPUT_GROUP_CONTEXT_KEY, {
  slots: slots.value,
})

const groupClass = computed(() => composeTwClasses(props.class, slots.value.base()))

const handleClick = (event: MouseEvent) => {
  const target = event.target
  const input = groupRef.value?.querySelector<HTMLInputElement | HTMLTextAreaElement>(
    'input, textarea',
  )

  if (input && target instanceof HTMLElement && target !== input && !input.contains(target)) {
    input.focus()
  }
}
</script>

<template>
  <div
    ref="groupRef"
    :aria-disabled="dataAttr(props.isDisabled)"
    :aria-invalid="dataAttr(props.isInvalid)"
    :class="groupClass"
    :data-disabled="dataAttr(props.isDisabled)"
    :data-invalid="dataAttr(props.isInvalid)"
    data-slot="input-group"
    @click="handleClick"
  >
    <slot />
  </div>
</template>
