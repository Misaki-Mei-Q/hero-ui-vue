<script setup lang="ts">
import { computed } from 'vue'
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
} from 'radix-vue'
import { tooltipVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left'
type TooltipAlign = 'start' | 'center' | 'end'

interface TooltipProps {
  class?: string
  defaultOpen?: boolean
  open?: boolean
  delay?: number
  closeDelay?: number
  placement?: TooltipPlacement
  align?: TooltipAlign
  offset?: number
  arrow?: boolean
  arrowWidth?: number
  arrowHeight?: number
  disabled?: boolean
  disableClosingTrigger?: boolean
  ignoreNonKeyboardFocus?: boolean
  content?: string
}

const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'top',
  align: 'center',
  offset: 7,
  delay: 700,
  closeDelay: 300,
  arrow: false,
  arrowWidth: 10,
  arrowHeight: 5,
  disabled: undefined,
  defaultOpen: undefined,
  open: undefined,
  disableClosingTrigger: undefined,
  ignoreNonKeyboardFocus: undefined,
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const slots = computed(() => tooltipVariants())
const baseClass = computed(() => composeTwClasses(props.class, slots.value.base()))
const triggerClass = computed(() => slots.value.trigger())

function onOpenChange(open: boolean) {
  emit('update:open', open)
}
</script>

<template>
  <TooltipProvider
    :delay-duration="props.delay"
    :disable-closing-trigger="props.disableClosingTrigger"
    :disabled="props.disabled"
    :ignore-non-keyboard-focus="props.ignoreNonKeyboardFocus"
  >
    <TooltipRoot
      :default-open="props.defaultOpen"
      :open="props.open"
      :delay-duration="props.delay"
      :disable-closing-trigger="props.disableClosingTrigger"
      :disabled="props.disabled"
      :ignore-non-keyboard-focus="props.ignoreNonKeyboardFocus"
      @update:open="onOpenChange"
    >
      <TooltipTrigger :class="triggerClass" as-child data-slot="tooltip-trigger">
        <slot name="trigger" />
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent
          :class="baseClass"
          :side="props.placement"
          :align="props.align"
          :side-offset="props.offset"
          data-slot="tooltip"
          @pointerdown-outside="(event: Event) => event.preventDefault()"
        >
          <slot>{{ props.content }}</slot>
          <TooltipArrow
            v-if="props.arrow"
            :width="props.arrowWidth"
            :height="props.arrowHeight"
            data-slot="overlay-arrow"
          />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>