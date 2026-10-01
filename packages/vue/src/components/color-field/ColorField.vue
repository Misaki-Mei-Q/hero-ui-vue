<script setup lang="ts">
import { computed } from 'vue'
import { colorFieldVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'

interface ColorFieldProps {
  class?: string
  modelValue?: string
  defaultValue?: string
  placeholder?: string
  isDisabled?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  fullWidth?: boolean
  label?: string
  description?: string
  errorMessage?: string
}

const props = withDefaults(defineProps<ColorFieldProps>(), {
  fullWidth: false,
  isDisabled: undefined,
  isInvalid: undefined,
  isRequired: undefined,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const slots = computed(() =>
  colorFieldVariants({ fullWidth: props.fullWidth }),
)
const baseClass = computed(() =>
  composeTwClasses(props.class, (slots.value as unknown as string)),
)

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div
    :class="baseClass"
    :data-disabled="dataAttr(props.isDisabled || undefined)"
    :data-invalid="dataAttr(props.isInvalid || undefined)"
    :data-required="dataAttr(props.isRequired || undefined)"
    data-slot="color-field"
  >
    <label v-if="props.label" data-slot="label">
      <slot name="label">{{ props.label }}</slot>
    </label>

    <div class="flex items-center gap-2">
      <span
        v-if="props.modelValue"
        class="inline-block size-6 rounded-full border border-default"
        data-slot="color-field-preview"
        :style="{ backgroundColor: props.modelValue }"
      />
      <input
        type="color"
        class="h-9 w-12 cursor-pointer rounded border border-default bg-transparent"
        :value="props.modelValue ?? props.defaultValue ?? '#000000'"
        :placeholder="props.placeholder"
        :disabled="props.isDisabled"
        :required="props.isRequired"
        :aria-invalid="props.isInvalid"
        data-slot="color-field-input"
        @input="onInput"
      />
      <span
        class="rounded-field border border-default px-2 py-1 text-sm tabular-nums"
        data-slot="color-field-trigger"
      >
        {{ props.modelValue ?? props.placeholder ?? '' }}
      </span>
    </div>

    <span v-if="props.description && !props.errorMessage" data-slot="description">
      <slot name="description">{{ props.description }}</slot>
    </span>
    <span v-if="props.errorMessage" data-slot="error-message" role="alert">
      <slot name="error-message">{{ props.errorMessage }}</slot>
    </span>
  </div>
</template>