<script setup lang="ts">
/* global MouseEvent */
import { computed, provide, ref, watch } from 'vue'
import { drawerVariants } from '@misaki-mei/heroui-vue-styles'
import { DRAWER_CONTEXT_KEY, type DrawerPlacement } from './context'

interface DrawerProps {
  defaultOpen?: boolean
  isOpen?: boolean
  modelValue?: boolean
}

const props = withDefaults(defineProps<DrawerProps>(), {
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
const placement = ref<DrawerPlacement>('bottom')
const isOpen = computed(() => props.modelValue ?? props.isOpen ?? internalOpen.value)
const isDismissable = computed(() => true)
const isEntering = computed(() => isOpen.value)
const isExiting = computed(() => false)
const slots = computed(() => drawerVariants())

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

const handleRootClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget || isOpen.value) return
  setOpen(true)
}

provide(DRAWER_CONTEXT_KEY, {
  close: () => setOpen(false),
  isDismissable,
  isEntering,
  isExiting,
  isOpen,
  open: () => setOpen(true),
  placement: computed(() => placement.value),
  setOpen,
  setPlacement: (value) => {
    placement.value = value
  },
  slots,
})
</script>

<template>
  <div data-slot="drawer-root" @click="handleRootClick">
    <slot :close="() => setOpen(false)" :is-open="isOpen" :open="() => setOpen(true)" />
  </div>
</template>
