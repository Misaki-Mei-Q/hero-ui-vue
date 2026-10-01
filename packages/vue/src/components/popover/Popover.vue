<script setup lang="ts">
import { computed } from 'vue'
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
  PopoverArrow,
  PopoverClose,
} from 'radix-vue'
import { popoverVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left'
type PopoverAlign = 'start' | 'center' | 'end'

interface PopoverProps {
  class?: string
  contentClass?: string
  defaultOpen?: boolean
  open?: boolean
  placement?: PopoverPlacement
  align?: PopoverAlign
  offset?: number
  arrow?: boolean
  arrowWidth?: number
  arrowHeight?: number
  modal?: boolean
  title?: string
  description?: string
}

const props = withDefaults(defineProps<PopoverProps>(), {
  placement: 'bottom',
  align: 'center',
  offset: 9,
  arrow: false,
  arrowWidth: 14,
  arrowHeight: 7,
  modal: false,
  defaultOpen: undefined,
  open: undefined,
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const slots = computed(() => popoverVariants())
const baseClass = computed(() =>
  composeTwClasses(props.contentClass, slots.value.base()),
)
const triggerClass = computed(() => slots.value.trigger())
const dialogClass = computed(() => slots.value.dialog())
const headingClass = computed(() => slots.value.heading())

function onOpenChange(open: boolean) {
  emit('update:open', open)
}
</script>

<template>
  <PopoverRoot
    :default-open="props.defaultOpen"
    :open="props.open"
    :modal="props.modal"
    @update:open="onOpenChange"
  >
    <PopoverTrigger :class="triggerClass" as-child data-slot="popover-trigger">
      <slot name="trigger" />
    </PopoverTrigger>

    <PopoverPortal>
      <PopoverContent
        :class="baseClass"
        :side="props.placement"
        :align="props.align"
        :side-offset="props.offset"
        data-slot="popover"
      >
        <div :class="dialogClass" data-slot="popover-dialog">
          <h3 v-if="props.title || $slots.title" :class="headingClass" data-slot="popover-heading">
            <slot name="title">{{ props.title }}</slot>
          </h3>

          <slot />
          <slot name="description" />

          <PopoverArrow
            v-if="props.arrow"
            :width="props.arrowWidth"
            :height="props.arrowHeight"
            data-slot="popover-overlay-arrow"
          />
        </div>

        <PopoverClose
          v-if="$slots.close"
          as-child
        >
          <slot name="close" />
        </PopoverClose>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>