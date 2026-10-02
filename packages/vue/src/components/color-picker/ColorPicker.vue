<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
} from 'radix-vue'
import { colorPickerVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'
import ColorSwatch from '../color-swatch/ColorSwatch.vue'

type ColorPlacement = 'top' | 'right' | 'bottom' | 'left'

interface ColorPickerProps {
  class?: string
  modelValue?: string
  defaultValue?: string
  open?: boolean
  defaultOpen?: boolean
  label?: string
  isDisabled?: boolean
  isInvalid?: boolean
  placement?: ColorPlacement
  offset?: number
  showHexInput?: boolean
}

const props = withDefaults(defineProps<ColorPickerProps>(), {
  placement: 'bottom',
  offset: 8,
  isDisabled: undefined,
  isInvalid: undefined,
  showHexInput: true,
  open: undefined,
  defaultOpen: undefined,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: string]
  'update:open': [value: boolean]
  openChange: [value: boolean]
}>()

const slots = computed(() => colorPickerVariants())
const baseClass = computed(() => composeTwClasses(props.class, (slots.value as unknown as { base: () => string }).base()))
const triggerClass = computed(() => (slots.value as unknown as { trigger: () => string }).trigger())
const popoverClass = computed(() => (slots.value as unknown as { popover: () => string }).popover())

const internalOpen = ref(props.defaultOpen ?? false)
const isOpen = computed(() => (props.open !== undefined ? props.open : internalOpen.value))

function onOpenChange(value: boolean) {
  if (props.open === undefined) internalOpen.value = value
  emit('update:open', value)
  emit('openChange', value)
}

function onHexInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
  emit('change', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <PopoverRoot
  :open="isOpen"
  :default-open="props.defaultOpen"
  @update:open="onOpenChange"
>
    <div :class="baseClass" data-slot="color-picker">
      <PopoverTrigger
  :class="triggerClass"
  :disabled="props.isDisabled"
  :aria-invalid="!props.isDisabled && props.isInvalid ? true : undefined"
  data-slot="color-picker-trigger"
>
        <ColorSwatch
          v-if="props.modelValue || props.defaultValue"
          :color="props.modelValue ?? props.defaultValue ?? '#000000'"
          size="md"
          shape="circle"
        />
        <slot name="trigger" />
        <slot>
          <span v-if="props.label">{{ props.label }}</span>
        </slot>
        <span
          v-if="props.modelValue"
          class="text-default-500 ml-2 text-xs tabular-nums"
          data-slot="color-picker-value"
        >
          {{ props.modelValue }}
        </span>
      </PopoverTrigger>
    </div>

    <PopoverPortal>
      <PopoverContent
        :class="popoverClass"
        :side="props.placement"
        :side-offset="props.offset"
        data-slot="color-picker-popover"
      >
        <div v-if="props.showHexInput" class="flex flex-col gap-2">
          <slot name="selector">
            <input
              type="text"
              class="w-full rounded border border-default bg-field px-2 py-1 text-sm"
              :value="props.modelValue ?? ''"
              placeholder="#000000"
              data-slot="color-picker-hex"
              @change="onHexInput"
            />
          </slot>
        </div>
        <slot />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>