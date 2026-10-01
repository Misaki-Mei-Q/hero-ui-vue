<script setup lang="ts">
import { computed, nextTick, provide, ref, watch } from 'vue'
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverAnchor,
  PopoverPortal,
  PopoverContent,
} from 'radix-vue'
import { comboBoxVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { ListBox } from '../list-box'
import type { ListBoxKey } from '../list-box/context'

type ComboBoxSelectionMode = 'single' | 'multiple'
type ComboBoxPlacement = 'top' | 'right' | 'bottom' | 'left'

export interface ComboBoxItem {
  key: ListBoxKey
  label: string
  description?: string
  isDisabled?: boolean
}

interface ComboBoxProps {
  class?: string
  inputClass?: string
  popoverClass?: string
  items?: ComboBoxItem[] | ComboBoxItem[][]
  fullWidth?: boolean
  modelValue?: ListBoxKey | ListBoxKey[]
  defaultSelectedKey?: ListBoxKey
  defaultSelectedKeys?: ListBoxKey[]
  selectedKey?: ListBoxKey
  selectedKeys?: ListBoxKey[]
  disabledKeys?: ListBoxKey[]
  selectionMode?: ComboBoxSelectionMode
  isDisabled?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  isOpen?: boolean
  defaultOpen?: boolean
  placeholder?: string
  searchPlaceholder?: string
  label?: string
  description?: string
  errorMessage?: string
  offset?: number
  placement?: ComboBoxPlacement
  filter?: (item: ComboBoxItem, query: string) => boolean
  allowCustomValue?: boolean
  inputValue?: string
  defaultInputValue?: string
}

const props = withDefaults(defineProps<ComboBoxProps>(), {
  items: () => [],
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
  searchPlaceholder: 'Search...',
  offset: 8,
  placement: 'bottom',
  filter: undefined,
  allowCustomValue: false,
  inputValue: undefined,
  defaultInputValue: '',
})

const emit = defineEmits<{
  'update:modelValue': [value: ListBoxKey | ListBoxKey[] | null]
  'update:selectedKey': [value: ListBoxKey | null]
  'update:selectedKeys': [value: ListBoxKey[]]
  'update:isOpen': [value: boolean]
  'update:inputValue': [value: string]
  openChange: [value: boolean]
  change: [value: ListBoxKey | ListBoxKey[] | null, item: ComboBoxItem | ComboBoxItem[] | null]
  input: [value: string]
}>()

const slots = computed(() => comboBoxVariants({ fullWidth: props.fullWidth }))

const containerClass = computed(() => composeTwClasses(props.class, slots.value.base()))
const inputGroupClass = computed(() => slots.value.inputGroup())
const triggerClass = computed(() => slots.value.trigger())
const popoverClass = computed(() => slots.value.popover())
const inputClass = computed(() => composeTwClasses(props.inputClass, 'w-full bg-transparent outline-none'))

const finalIsDisabled = computed(() => props.isDisabled ?? false)
const finalIsInvalid = computed(() => props.isInvalid ?? false)
const finalIsRequired = computed(() => props.isRequired ?? false)
const isMultiple = computed(() => props.selectionMode === 'multiple')

const internalInput = ref(props.defaultInputValue ?? '')
const internalSingle = ref<ListBoxKey | null>(props.defaultSelectedKey ?? null)
const internalMultiple = ref<ListBoxKey[]>([...props.defaultSelectedKeys])

const currentInput = computed(() =>
  props.inputValue !== undefined ? props.inputValue : internalInput.value,
)

const labelMap = ref<Map<ListBoxKey, string>>(new Map())

function registerItem(key: ListBoxKey, label: string) {
  labelMap.value.set(key, label)
}

provide('ComboBoxRegistration', registerItem)

function getItemByKey(key: ListBoxKey): ComboBoxItem | null {
  const label = labelMap.value.get(key)
  if (!label) return null
  return { key: key, label: label }
}

const currentKeys = computed<ListBoxKey[]>(() => {
  if (props.selectedKey !== undefined) {
    return props.selectedKey == null ? [] : [props.selectedKey]
  }
  if (props.selectedKeys !== undefined) return [...props.selectedKeys]
  if (Array.isArray(props.modelValue)) return [...props.modelValue]
  if (props.modelValue !== undefined && props.modelValue !== null) {
    return [props.modelValue]
  }
  if (isMultiple.value) return [...internalMultiple.value]
  return internalSingle.value == null ? [] : [internalSingle.value]
})

const singleCurrentKey = computed(() =>
  isMultiple.value ? null : (currentKeys.value[0] ?? null),
)

const displayText = computed(() => {
  if (currentInput.value) return currentInput.value
  if (isMultiple.value) {
    if (currentKeys.value.length === 0) return ''
    return currentKeys.value
      .map((k) => labelMap.value.get(k) ?? String(k))
      .join(', ')
  }
  if (singleCurrentKey.value != null) {
    return labelMap.value.get(singleCurrentKey.value) ?? String(singleCurrentKey.value)
  }
  return ''
})

const showPlaceholder = computed(() => {
  return !displayText.value && !currentInput.value
})

const open = ref(props.defaultOpen ?? false)
const inputEl = ref<HTMLInputElement | null>(null)

watch(
  () => props.isOpen,
  (next) => {
    if (next !== undefined) open.value = next
  },
)

watch(
  () => props.defaultOpen,
  (next) => {
    if (next !== undefined && props.isOpen === undefined) open.value = next
  },
)

function onOpenChange(value: boolean) {
  open.value = value
  emit('update:isOpen', value)
  emit('openChange', value)
  if (value) {
    void nextTick(() => inputEl.value?.focus())
  }
}

function onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  if (props.inputValue === undefined) internalInput.value = value
  emit('update:inputValue', value)
  emit('input', value)
  if (!open.value) open.value = true
}

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

function defaultFilter(item: ComboBoxItem, query: string): boolean {
  if (!query) return true
  return item.label.toLowerCase().includes(query.toLowerCase())
}

const filteredItems = computed<ComboBoxItem[]>(() => {
  const query = currentInput.value.trim()
  const filter = props.filter ?? defaultFilter
  const flat: ComboBoxItem[] = []
  for (const entry of props.items) {
    if (Array.isArray(entry)) {
      for (const item of entry) {
        if (filter(item, query)) flat.push(item)
      }
    } else {
      if (filter(entry, query)) flat.push(entry)
    }
  }
  return flat
})

function onSelectionChange(keys: ListBoxKey[]) {
  if (finalIsDisabled.value) return
  const next = isMultiple.value ? keys : (keys[0] ?? null)
  if (isMultiple.value) {
    internalMultiple.value = [...keys]
    emit('update:modelValue', [...keys])
    emit('update:selectedKeys', [...keys])
    const items = keys.map(getItemByKey).filter((i): i is ComboBoxItem => i != null)
    emit('change', [...keys], items)
  } else {
    internalSingle.value = next as ListBoxKey | null
    emit('update:modelValue', next as ListBoxKey | null)
    emit('update:selectedKey', next as ListBoxKey | null)
    const item = next == null ? null : (getItemByKey(next as ListBoxKey) ?? { key: next as ListBoxKey, label: String(next) })
    emit('change', next as ListBoxKey | null, item)
    if (next != null) {
      const matched = getItemByKey(next as ListBoxKey)
      if (matched && props.inputValue === undefined) internalInput.value = matched.label
      else if (props.inputValue === undefined) internalInput.value = ''
    }
    open.value = false
  }
}

function onTriggerClick() {
  if (finalIsDisabled.value) return
  open.value = !open.value
  void nextTick(() => inputEl.value?.focus())
}

function clearSelection(event?: MouseEvent) {
  event?.stopPropagation()
  if (finalIsDisabled.value) return
  if (isMultiple.value) {
    internalMultiple.value = []
    emit('update:modelValue', [])
    emit('update:selectedKeys', [])
    emit('change', [], [])
  } else {
    internalSingle.value = null
    emit('update:modelValue', null)
    emit('update:selectedKey', null)
    emit('change', null, null)
  }
  if (props.inputValue === undefined) internalInput.value = ''
  void nextTick(() => inputEl.value?.focus())
}

const hasSelection = computed(() => currentKeys.value.length > 0)

defineExpose({ focus: () => inputEl.value?.focus() })
</script>

<template>
  <div
    :class="containerClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-invalid="dataAttr(finalIsInvalid || undefined)"
    :data-required="dataAttr(finalIsRequired || undefined)"
    data-slot="combo-box"
  >
    <label v-if="props.label" data-slot="label">
      <slot name="label">{{ props.label }}</slot>
    </label>

    <PopoverRoot
      :open="props.isOpen ?? open"
      @update:open="onOpenChange"
    >
      <PopoverAnchor as-child>
        <div :class="inputGroupClass" data-slot="combo-box-input-group">
          <input
            ref="inputEl"
            :class="inputClass"
            :disabled="finalIsDisabled"
            :placeholder="showPlaceholder ? props.placeholder : ''"
            :value="displayText"
            data-slot="input"
            autocomplete="off"
            spellcheck="false"
            @input="onInput"
            @click="onTriggerClick"
            @keydown.down.prevent="open = true"
          />
          <PopoverTrigger as-child>
            <button
              v-if="hasSelection && !finalIsDisabled"
              type="button"
              :class="triggerClass"
              data-slot="combo-box-clear"
              aria-label="Clear selection"
              @click.stop="clearSelection"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 4l8 8M12 4l-8 8" stroke-linecap="round" />
              </svg>
            </button>
            <button
              v-else
              type="button"
              :class="triggerClass"
              data-slot="combo-box-trigger"
              :disabled="finalIsDisabled"
              aria-label="Toggle options"
              @click.stop="onTriggerClick"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 6l4 4 4-4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </PopoverTrigger>
        </div>
      </PopoverAnchor>

      <PopoverPortal>
        <PopoverContent
          :class="popoverClass"
          :side="props.placement"
          :side-offset="props.offset"
          data-slot="combo-box-popover"
          @pointer-down-outside="(event: Event) => {
            if ((event.target as HTMLElement | null)?.closest('[data-slot=&quot;combo-box-input-group&quot;]')) {
              event.preventDefault()
            }
          }"
        >
          <slot name="search">
            <div data-slot="combo-box-search">
              <input
                :placeholder="props.searchPlaceholder"
                :value="currentInput"
                data-slot="input"
                class="w-full bg-transparent outline-none"
                autocomplete="off"
                spellcheck="false"
                @input="onInput"
              />
            </div>
          </slot>
          <ListBox
            :model-value="resolveKeys()"
            :selection-mode="isMultiple ? 'multiple' : 'single'"
            :disabled-keys="props.disabledKeys"
            :is-disabled="finalIsDisabled"
            aria-label="Options"
            data-slot="combo-box-list-box"
            @selection-change="onSelectionChange"
          >
            <slot :items="filteredItems">
              <template v-for="item in filteredItems" :key="`item-${item.key}`">
                <slot :name="`item-${item.key}`" :item="item">
                  <span data-slot="combo-box-item-default">
                    {{ item.label }}
                  </span>
                </slot>
              </template>
            </slot>
          </ListBox>
          <div
            v-if="filteredItems.length === 0"
            data-slot="combo-box-empty"
          >
            <slot name="empty">No results found.</slot>
          </div>
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