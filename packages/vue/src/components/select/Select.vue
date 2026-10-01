<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
} from 'radix-vue'
import { selectVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { ListBox } from '../list-box'
import type { ListBoxKey } from '../list-box/context'

type SelectSelectionMode = 'single' | 'multiple'
type SelectVariant = 'primary' | 'secondary'
type SelectPlacement = 'top' | 'right' | 'bottom' | 'left'

interface SelectProps {
  class?: string
  triggerClass?: string
  popoverClass?: string
  variant?: SelectVariant
  placement?: SelectPlacement
  fullWidth?: boolean
  modelValue?: ListBoxKey | ListBoxKey[]
  defaultSelectedKey?: ListBoxKey
  defaultSelectedKeys?: ListBoxKey[]
  selectedKey?: ListBoxKey
  selectedKeys?: ListBoxKey[]
  disabledKeys?: ListBoxKey[]
  selectionMode?: SelectSelectionMode
  isDisabled?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  isOpen?: boolean
  defaultOpen?: boolean
  placeholder?: string
  name?: string
  label?: string
  description?: string
  errorMessage?: string
  offset?: number
  showIndicator?: boolean
}

const props = withDefaults(defineProps<SelectProps>(), {
  variant: 'primary',
  placement: 'bottom',
  fullWidth: false,
  selectionMode: 'single',
  modelValue: undefined,
  defaultSelectedKey: undefined,
  defaultSelectedKeys: () => [],
  selectedKey: undefined,
  selectedKeys: undefined,
  disabledKeys: () => [],
  isDisabled: undefined,
  isInvalid: undefined,
  isRequired: undefined,
  isOpen: undefined,
  defaultOpen: undefined,
  placeholder: 'Select an option',
  offset: 8,
  showIndicator: true,
})

const emit = defineEmits<{
  'update:modelValue': [value: ListBoxKey | ListBoxKey[] | null]
  'update:selectedKey': [value: ListBoxKey | null]
  'update:selectedKeys': [value: ListBoxKey[]]
  'update:isOpen': [value: boolean]
  'selection-change': [value: ListBoxKey | ListBoxKey[] | null]
  openChange: [value: boolean]
  close: []
}>()

const slots = computed(() =>
  selectVariants({ variant: props.variant, fullWidth: props.fullWidth }),
)

const finalIsDisabled = computed(() => props.isDisabled ?? false)
const finalIsInvalid = computed(() => props.isInvalid ?? false)
const finalIsRequired = computed(() => props.isRequired ?? false)

const containerClass = computed(() => composeTwClasses(props.class, slots.value.base()))
const triggerClasses = computed(() => slots.value.trigger())
const popoverClasses = computed(() => slots.value.popover())
const indicatorClasses = computed(() => slots.value.indicator())
const valueClasses = computed(() => slots.value.value())

const isMultiple = computed(() => props.selectionMode === 'multiple')

const displayMap = ref<Map<ListBoxKey, string>>(new Map())

provide('SelectRegistration', (key: ListBoxKey, label: string) => {
  displayMap.value.set(key, label)
})

const currentKeys = computed<ListBoxKey[]>(() => {
  if (props.selectedKey !== undefined) {
    return props.selectedKey == null ? [] : [props.selectedKey]
  }
  if (props.selectedKeys !== undefined) return [...props.selectedKeys]
  if (Array.isArray(props.modelValue)) return [...props.modelValue]
  if (props.modelValue !== undefined && props.modelValue !== null) {
    return [props.modelValue]
  }
  return []
})

const currentSingleKey = computed(() =>
  isMultiple.value ? null : (currentKeys.value[0] ?? null),
)

const triggerLabel = computed(() => {
  if (isMultiple.value && currentKeys.value.length > 0) {
    return `${currentKeys.value.length} selected`
  }
  if (currentSingleKey.value != null) {
    return (
      displayMap.value.get(currentSingleKey.value) ?? String(currentSingleKey.value)
    )
  }
  return props.placeholder
})

const internalSingle = ref<ListBoxKey | null>(props.defaultSelectedKey ?? null)
const internalMultiple = ref<ListBoxKey[]>([...props.defaultSelectedKeys])

function resolveKeys(): ListBoxKey[] {
  if (props.selectedKey !== undefined) {
    return props.selectedKey == null ? [] : [props.selectedKey]
  }
  if (props.selectedKeys !== undefined) return [...props.selectedKeys]
  if (Array.isArray(props.modelValue)) return [...props.modelValue]
  if (props.modelValue !== undefined && props.modelValue !== null) return [props.modelValue]
  if (isMultiple.value) return [...internalMultiple.value]
  return internalSingle.value == null ? [] : [internalSingle.value]
}

const listBoxSelectionMode = computed<'single' | 'multiple'>(() =>
  isMultiple.value ? 'multiple' : 'single',
)

function onSelectionChange(keys: ListBoxKey[]) {
  if (finalIsDisabled.value) return
  const next = isMultiple.value ? keys : (keys[0] ?? null)
  if (isMultiple.value) {
    internalMultiple.value = [...keys]
    emit('update:modelValue', [...keys])
    emit('update:selectedKeys', [...keys])
    emit('selection-change', [...keys])
  } else {
    internalSingle.value = next as ListBoxKey | null
    emit('update:modelValue', next as ListBoxKey | null)
    emit('update:selectedKey', next as ListBoxKey | null)
    emit('selection-change', next as ListBoxKey | null)
  }
  if (!isMultiple.value) {
    emit('close')
  }
}

function onOpenChange(openValue: boolean) {
  emit('update:isOpen', openValue)
  emit('openChange', openValue)
}
</script>

<template>
  <div
    :class="containerClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-invalid="dataAttr(finalIsInvalid || undefined)"
    :data-required="dataAttr(finalIsRequired || undefined)"
    data-slot="select"
  >
    <label v-if="props.label" data-slot="label">
      <slot name="label">{{ props.label }}</slot>
    </label>

    <PopoverRoot
      :open="props.isOpen"
      :default-open="props.defaultOpen"
      @update:open="onOpenChange"
    >
      <PopoverTrigger
        :class="triggerClasses"
        :data-disabled="dataAttr(finalIsDisabled || undefined)"
        :data-invalid="dataAttr(finalIsInvalid || undefined)"
        :aria-required="dataAttr(finalIsRequired || undefined)"
        data-slot="select-trigger"
        :disabled="finalIsDisabled"
      >
        <span :class="valueClasses" data-slot="select-value">
          <slot name="value" :selected-keys="currentKeys">{{ triggerLabel }}</slot>
        </span>
        <span
          v-if="props.showIndicator"
          :class="indicatorClasses"
          data-slot="select-indicator"
          aria-hidden="true"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 6l4 4 4-4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </PopoverTrigger>

      <PopoverPortal>
        <PopoverContent
          :class="popoverClasses"
          :side="props.placement"
          :side-offset="props.offset"
          data-slot="select-popover"
          @pointer-down-outside="(event: Event) => {
            if ((event.target as HTMLElement | null)?.closest('[data-slot=&quot;select-trigger&quot;]')) {
              event.preventDefault()
            }
          }"
        >
          <ListBox
            :model-value="resolveKeys()"
            :selection-mode="listBoxSelectionMode"
            :disabled-keys="props.disabledKeys"
            :is-disabled="finalIsDisabled"
            data-slot="select-list-box"
            aria-label="Select options"
            @selection-change="onSelectionChange"
          >
            <slot :selected-keys="currentKeys" />
          </ListBox>
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>

    <span v-if="props.description && !props.errorMessage" data-slot="description">
      <slot name="description">{{ props.description }}</slot>
    </span>
    <span v-if="props.errorMessage" data-slot="error-message" role="alert">
      <slot name="error-message">{{ props.errorMessage }}</slot>
    </span>
  </div>
</template>