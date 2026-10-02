<script setup lang="ts">
import { computed, ref, useId, watch } from 'vue'
import { colorFieldVariants, colorInputGroupVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import ColorSwatch from '../color-swatch/ColorSwatch.vue'

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
const groupSlots = computed(() =>
  colorInputGroupVariants({ fullWidth: props.fullWidth, variant: 'primary' }),
)
const baseClass = computed(() =>
  composeTwClasses(props.class, (slots.value as unknown as string)),
)
const groupClass = computed(() => (groupSlots.value as unknown as { base: () => string }).base())
const inputClass = computed(() => (groupSlots.value as unknown as { input: () => string }).input())
const prefixClass = computed(() => (groupSlots.value as unknown as { prefix: () => string }).prefix())

const HEX_PATTERN = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i

const internalValue = ref<string | undefined>(props.defaultValue)
const committedValue = computed(() => props.modelValue ?? internalValue.value)
const text = ref<string>(committedValue.value ?? '')

watch(committedValue, (next) => {
  text.value = next ?? ''
})

const inputId = useId()

function isValidHex(value: string): boolean {
  return HEX_PATTERN.test(value.trim())
}

function onInput(event: Event) {
  const raw = (event.target as HTMLInputElement).value
  text.value = raw
  if (!isValidHex(raw)) return
  if (props.modelValue === undefined) internalValue.value = raw.trim()
  emit('update:modelValue', raw.trim())
}

function onChange(event: Event) {
  const raw = (event.target as HTMLInputElement).value
  if (isValidHex(raw)) {
    if (props.modelValue === undefined) internalValue.value = raw.trim()
    emit('update:modelValue', raw.trim())
  } else {
    text.value = committedValue.value ?? ''
  }
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
    <label
      v-if="props.label || $slots.label"
      :for="inputId"
      data-slot="label"
    >
      <slot name="label">{{ props.label }}</slot>
    </label>

    <div
      :class="groupClass"
      :data-disabled="dataAttr(props.isDisabled || undefined)"
      :data-invalid="dataAttr(props.isInvalid || undefined)"
      data-slot="color-input-group"
    >
      <slot name="prefix">
        <span :class="prefixClass" data-slot="color-input-group-prefix">
          <ColorSwatch :color="committedValue || '#fff0'" size="xs" />
        </span>
      </slot>

      <input
        :id="inputId"
        type="text"
        :class="inputClass"
        :value="text"
        :placeholder="props.placeholder"
        :disabled="props.isDisabled"
        :required="props.isRequired"
        :aria-invalid="dataAttr(props.isInvalid || undefined)"
        autocomplete="off"
        spellcheck="false"
        data-slot="color-input-group-input"
        @input="onInput"
        @change="onChange"
      />
    </div>

    <span v-if="props.description && !props.errorMessage" data-slot="description">
      <slot name="description">{{ props.description }}</slot>
    </span>
    <span v-if="props.errorMessage" data-slot="error-message" role="alert">
      <slot name="error-message">{{ props.errorMessage }}</slot>
    </span>
  </div>
</template>
