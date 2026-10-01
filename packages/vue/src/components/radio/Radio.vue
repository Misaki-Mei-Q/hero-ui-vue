<script setup lang="ts">
import { computed, inject } from 'vue'
import { RadioGroupItem, RadioGroupIndicator } from 'radix-vue'
import { radioVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses, dataAttr, useInteractionStates } from '../../utils'
import { RADIO_GROUP_CONTEXT_KEY } from '../radio-group/context'

interface RadioProps {
  class?: string
  controlClass?: string
  contentClass?: string
  indicatorClass?: string
  value: string
  disabled?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  required?: boolean
  isRequired?: boolean
  id?: string
}

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: undefined,
  isDisabled: undefined,
  isInvalid: undefined,
  isRequired: undefined,
  required: undefined,
})
const radioGroupContext = inject(RADIO_GROUP_CONTEXT_KEY, null)

const styles = computed(() => radioVariants())
const baseClass = computed(() => composeTwClasses(props.class, styles.value.base()))
const controlClass = computed(() => composeTwClasses(props.controlClass, styles.value.control()))
const indicatorClass = computed(() =>
  composeTwClasses(props.indicatorClass, styles.value.indicator()),
)
const contentClass = computed(() => composeTwClasses(props.contentClass, styles.value.content()))
const finalIsDisabled = computed(
  () => props.disabled ?? props.isDisabled ?? radioGroupContext?.isDisabled.value,
)
const finalIsInvalid = computed(() => props.isInvalid ?? radioGroupContext?.isInvalid.value)
const finalIsReadOnly = computed(() => radioGroupContext?.isReadOnly.value)
const isSelected = computed(() => radioGroupContext?.selectedValue.value === props.value)
const { interactionAttrs, interactionHandlers } = useInteractionStates(
  () => finalIsDisabled.value || finalIsReadOnly.value,
)
</script>

<template>
  <RadioGroupItem
    :class="baseClass"
    :value="value"
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-invalid="dataAttr(finalIsInvalid)"
    :aria-readonly="dataAttr(finalIsReadOnly)"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-invalid="dataAttr(finalIsInvalid)"
    :data-readonly="dataAttr(finalIsReadOnly)"
    :data-selected="dataAttr(isSelected)"
    :disabled="finalIsDisabled"
    :required="required ?? isRequired"
    :id="id"
    data-slot="radio"
    v-bind="interactionAttrs"
    v-on="interactionHandlers"
  >
    <div :class="controlClass" data-slot="radio-control">
      <RadioGroupIndicator :class="indicatorClass" data-slot="radio-indicator" force-mount>
        <slot
          name="indicator"
          :checked="isSelected"
          :is-selected="isSelected"
          :is-disabled="finalIsDisabled"
          :is-invalid="finalIsInvalid"
          :is-read-only="finalIsReadOnly"
        />
      </RadioGroupIndicator>
    </div>
    <div v-if="$slots.default" :class="contentClass" data-slot="radio-content">
      <slot
        :checked="isSelected"
        :is-selected="isSelected"
        :is-disabled="finalIsDisabled"
        :is-invalid="finalIsInvalid"
        :is-read-only="finalIsReadOnly"
      />
    </div>
  </RadioGroupItem>
</template>
