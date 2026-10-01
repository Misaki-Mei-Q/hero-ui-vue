<script setup lang="ts">
import { computed, inject, onBeforeUnmount, watch } from 'vue'
import { alertDialogVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { ALERT_DIALOG_CONTEXT_KEY, type AlertDialogBackdropVariant } from './context'

interface AlertDialogBackdropProps {
  class?: string
  isDismissable?: boolean
  isKeyboardDismissDisabled?: boolean
  variant?: AlertDialogBackdropVariant
}

const props = withDefaults(defineProps<AlertDialogBackdropProps>(), {
  isDismissable: false,
  isKeyboardDismissDisabled: true,
  variant: 'opaque',
})

const context = inject(ALERT_DIALOG_CONTEXT_KEY, null)
const slots = computed(() => alertDialogVariants({ variant: props.variant }))
const backdropClass = computed(() => composeTwClasses(props.class, slots.value.backdrop()))

const onKeydown = (event: KeyboardEvent) => {
  if (event.key !== 'Escape' || props.isKeyboardDismissDisabled) return
  context?.close()
}

watch(
  () => context?.isOpen.value,
  (open) => {
    if (typeof document === 'undefined') return
    document.removeEventListener('keydown', onKeydown)
    if (open) document.addEventListener('keydown', onKeydown)
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') document.removeEventListener('keydown', onKeydown)
})

const handleBackdropClick = (event: MouseEvent) => {
  if (!props.isDismissable || event.target !== event.currentTarget) return
  context?.close()
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="context?.isOpen.value"
      :class="backdropClass"
      :data-entering="dataAttr(true)"
      data-slot="alert-dialog-backdrop"
      @click="handleBackdropClick"
    >
      <slot />
    </div>
  </Teleport>
</template>
