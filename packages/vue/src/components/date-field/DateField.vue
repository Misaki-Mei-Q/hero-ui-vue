<script setup lang="ts">
import { computed } from 'vue'
import type { DateValue } from '@internationalized/date'
import { DateField as DateFieldRootNS } from 'radix-vue/namespaced'
import { DateFieldInput } from 'radix-vue'
import { dateFieldVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'

interface DateFieldInputProps {
  class?: string
  inputClass?: string
  modelValue?: DateValue
  defaultValue?: DateValue
  defaultPlaceholder?: DateValue
  placeholder?: DateValue
  locale?: string
  isDisabled?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  readonly?: boolean
  fullWidth?: boolean
  granularity?: 'day' | 'hour' | 'minute' | 'second'
  hideTimeZone?: boolean
  minValue?: DateValue
  maxValue?: DateValue
  label?: string
  description?: string
  errorMessage?: string
}

const props = withDefaults(defineProps<DateFieldInputProps>(), {
  locale: 'en-US',
  isDisabled: undefined,
  isInvalid: undefined,
  isRequired: undefined,
  readonly: false,
  fullWidth: false,
  granularity: 'day',
  hideTimeZone: false,
})

const emit = defineEmits<{
  'update:modelValue': [date: DateValue | undefined]
  'update:placeholder': [date: DateValue]
}>()

const slots = computed(() => dateFieldVariants({ fullWidth: props.fullWidth }))
const baseClass = computed(() => composeTwClasses(props.class, (slots.value as unknown as string)))
const inputClass = computed(() =>
  composeTwClasses(
    props.inputClass,
    'flex w-full items-center rounded-field border bg-field px-3 py-2 text-sm shadow-field outline-none',
  ),
)

const finalIsDisabled = computed(() => props.isDisabled ?? false)
const finalIsInvalid = computed(() => props.isInvalid ?? false)
const finalIsRequired = computed(() => props.isRequired ?? false)

function onUpdateModelValue(value: DateValue | undefined) {
  emit('update:modelValue', value)
}

function onUpdatePlaceholder(value: DateValue) {
  emit('update:placeholder', value)
}
</script>

<template>
  <div
    :class="baseClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-invalid="dataAttr(finalIsInvalid || undefined)"
    :data-required="dataAttr(finalIsRequired || undefined)"
    data-slot="date-field"
  >
    <label v-if="props.label" data-slot="label">
      <slot name="label">{{ props.label }}</slot>
    </label>

<DateFieldRootNS.Root
        :model-value="props.modelValue"
        :default-value="props.defaultValue"
        :default-placeholder="props.defaultPlaceholder"
        :placeholder="props.placeholder"
        :locale="props.locale"
        :disabled="finalIsDisabled"
        :readonly="props.readonly"
        :granularity="props.granularity"
        :hide-time-zone="props.hideTimeZone"
        :min-value="props.minValue"
        :max-value="props.maxValue"
        :required="finalIsRequired"
        data-slot="date-field-root"
        @update:model-value="onUpdateModelValue"
        @update:placeholder="onUpdatePlaceholder"
      >
        <template #default="{ segments }">
          <div :class="inputClass" data-slot="date-field-input">
            <DateFieldInput
              v-for="(segment, idx) in segments"
              :key="`${segment.part}-${idx}`"
              :part="segment.part"
              data-slot="date-field-segment"
            >
              {{ segment.value }}
            </DateFieldInput>
          </div>
        </template>
      </DateFieldRootNS.Root>

    <span v-if="props.description && !props.errorMessage" data-slot="description">
      <slot name="description">{{ props.description }}</slot>
    </span>
    <span v-if="props.errorMessage" data-slot="error-message" role="alert">
      <slot name="error-message">{{ props.errorMessage }}</slot>
    </span>
  </div>
</template>