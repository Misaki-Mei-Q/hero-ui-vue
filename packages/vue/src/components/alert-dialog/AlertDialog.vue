<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import { alertDialogVariants } from '@misaki-mei-q/heroui-vue-styles'
import { ALERT_DIALOG_CONTEXT_KEY, type AlertDialogPlacement } from './context'

interface AlertDialogProps {
  defaultOpen?: boolean
  isOpen?: boolean
  modelValue?: boolean
}

const props = withDefaults(defineProps<AlertDialogProps>(), {
  defaultOpen: false,
  isOpen: undefined,
  modelValue: undefined,
})

const emit = defineEmits<{
  'update:isOpen': [value: boolean]
  'update:modelValue': [value: boolean]
  openChange: [value: boolean]
}>()

const internalOpen = ref(props.defaultOpen)
const placement = ref<AlertDialogPlacement>('auto')
const isOpen = computed(() => props.modelValue ?? props.isOpen ?? internalOpen.value)
const slots = computed(() => alertDialogVariants())

watch(
  () => props.defaultOpen,
  (value) => {
    if (props.modelValue === undefined && props.isOpen === undefined) internalOpen.value = value
  },
)

const setOpen = (value: boolean) => {
  internalOpen.value = value
  emit('update:modelValue', value)
  emit('update:isOpen', value)
  emit('openChange', value)
}

provide(ALERT_DIALOG_CONTEXT_KEY, {
  close: () => setOpen(false),
  isOpen,
  open: () => setOpen(true),
  placement: computed(() => placement.value),
  setPlacement: (value) => {
    placement.value = value
  },
  slots,
})
</script>

<template>
  <div data-slot="alert-dialog-root">
    <slot :close="() => setOpen(false)" :is-open="isOpen" :open="() => setOpen(true)" />
  </div>
</template>
