<script setup lang="ts">
import { computed, inject, provide, watchEffect } from 'vue'
import { alertDialogVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import {
  ALERT_DIALOG_CONTEXT_KEY,
  type AlertDialogPlacement,
  type AlertDialogSize,
} from './context'

interface AlertDialogContainerProps {
  class?: string
  placement?: AlertDialogPlacement
  size?: AlertDialogSize
}

const props = withDefaults(defineProps<AlertDialogContainerProps>(), {
  placement: 'auto',
  size: 'md',
})

const context = inject(ALERT_DIALOG_CONTEXT_KEY, null)
const slots = computed(() => alertDialogVariants({ size: props.size }))
const containerClass = computed(() => composeTwClasses(props.class, slots.value.container()))

watchEffect(() => {
  context?.setPlacement(props.placement)
})

if (context) {
  provide(ALERT_DIALOG_CONTEXT_KEY, {
    ...context,
    slots,
  })
}
</script>

<template>
  <div
    :class="containerClass"
    :data-entering="dataAttr(true)"
    :data-placement="placement"
    data-slot="alert-dialog-container"
  >
    <slot />
  </div>
</template>
