<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenu } from 'radix-vue/namespaced'
import { dropdownVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

type DropdownPlacement = 'top' | 'right' | 'bottom' | 'left'
type DropdownAlign = 'start' | 'center' | 'end'

interface DropdownProps {
  class?: string
  popoverClass?: string
  triggerClass?: string
  open?: boolean
  defaultOpen?: boolean
  placement?: DropdownPlacement
  align?: DropdownAlign
  offset?: number
  modal?: boolean
}

const props = withDefaults(defineProps<DropdownProps>(), {
  placement: 'bottom',
  align: 'start',
  offset: 8,
  modal: false,
  open: undefined,
  defaultOpen: undefined,
})

const emit = defineEmits<{
  'update:open': [value: boolean]
  openChange: [value: boolean]
}>()

const slots = computed(() => dropdownVariants())
const rootClass = computed(() => composeTwClasses(props.class, slots.value.root()))
const triggerClass = computed(() => slots.value.trigger())
const popoverClass = computed(() => slots.value.popover())
const menuClass = computed(() => slots.value.menu())

function onOpenChange(open: boolean) {
  emit('update:open', open)
  emit('openChange', open)
}
</script>

<template>
  <DropdownMenu.Root
    :class="rootClass"
    :open="props.open"
    :default-open="props.defaultOpen"
    :modal="props.modal"
    data-slot="dropdown"
    @update:open="onOpenChange"
  >
    <DropdownMenu.Trigger
      :class="triggerClass"
      as-child
      data-slot="dropdown-trigger"
    >
      <slot name="trigger" />
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
      <DropdownMenu.Content
        :class="popoverClass"
        :side="props.placement"
        :align="props.align"
        :side-offset="props.offset"
        data-slot="dropdown-popover"
      >
        <div :class="menuClass" data-slot="dropdown-menu">
          <slot />
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
</template>