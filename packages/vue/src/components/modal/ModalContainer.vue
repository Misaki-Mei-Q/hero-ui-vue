<script setup lang="ts">
import { computed, inject, provide, watchEffect } from 'vue'
import { modalVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import {
  MODAL_CONTEXT_KEY,
  type ModalPlacement,
  type ModalScroll,
  type ModalSize,
} from './context'

interface ModalContainerProps {
  class?: string
  placement?: ModalPlacement
  scroll?: ModalScroll
  size?: ModalSize
}

const props = withDefaults(defineProps<ModalContainerProps>(), {
  placement: 'auto',
  scroll: 'inside',
  size: 'md',
})

const context = inject(MODAL_CONTEXT_KEY, null)
const slots = computed(() => modalVariants({ scroll: props.scroll, size: props.size }))
const containerClass = computed(() => composeTwClasses(props.class, slots.value.container()))

watchEffect(() => {
  context?.setPlacement(props.placement)
})

if (context) {
  provide(MODAL_CONTEXT_KEY, {
    ...context,
    slots,
  })
}
</script>

<template>
  <div
    :class="containerClass"
    :data-entering="dataAttr(context?.isEntering.value ?? true)"
    :data-exiting="dataAttr(context?.isExiting.value)"
    :data-placement="placement"
    data-slot="modal-container"
  >
    <slot :close="context?.close" />
  </div>
</template>
