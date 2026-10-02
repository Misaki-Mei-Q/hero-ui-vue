<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverAnchor,
  PopoverPortal,
  PopoverContent,
} from 'radix-vue'
import { comboBoxVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { ListBox, ListBoxItem, ListBoxItemIndicator, ListBoxSection } from '../list-box'
import type { ListBoxKey } from '../list-box/context'

type ComboBoxSelectionMode = 'single' | 'multiple'
type ComboBoxPlacement = 'top' | 'right' | 'bottom' | 'left'

export interface ComboBoxItem {
  key: ListBoxKey
  label: string
  description?: string
  isDisabled?: boolean
}

export interface ComboBoxSection {
  title?: string
  children: ComboBoxItem[]
}

type ComboBoxItems = Array<ComboBoxItem | ComboBoxItem[] | ComboBoxSection>

interface ComboBoxProps {
  id?: string
  class?: string
  inputClass?: string
  popoverClass?: string
  items?: ComboBoxItems
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
const clearClass = computed(() => 'combo-box__clear')
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

const open = ref(props.defaultOpen ?? false)
const inputEl = ref<HTMLInputElement | null>(null)
const inputGroupEl = ref<HTMLElement | null>(null)
const popoverEl = ref<HTMLElement | null>(null)
const activeIndex = ref(-1)
const popoverStyle = ref<Record<string, string>>({})

const openState = computed(() => props.isOpen ?? open.value)

/* ---------------------------------------------------------------- items --- */

function isSection(entry: unknown): entry is ComboBoxSection {
  return (
    typeof entry === 'object' &&
    entry !== null &&
    Array.isArray((entry as ComboBoxSection).children)
  )
}

const normalizedGroups = computed<Array<{ title?: string; items: ComboBoxItem[] }>>(() => {
  const groups: Array<{ title?: string; items: ComboBoxItem[] }> = []

  for (const entry of props.items ?? []) {
    if (Array.isArray(entry)) {
      groups.push({ items: entry })
    } else if (isSection(entry)) {
      groups.push({ title: entry.title, items: entry.children })
    } else if (entry && typeof entry === 'object' && 'key' in entry) {
      groups.push({ items: [entry as ComboBoxItem] })
    }
  }

  return groups
})

const labelMap = computed<Map<ListBoxKey, string>>(() => {
  const map = new Map<ListBoxKey, string>()
  for (const group of normalizedGroups.value) {
    for (const item of group.items) {
      map.set(item.key, item.label)
    }
  }
  return map
})

function getItemByKey(key: ListBoxKey): ComboBoxItem | null {
  const label = labelMap.value.get(key)
  if (label === undefined) return null
  return { key, label }
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

const hasSelection = computed(() => currentKeys.value.length > 0)

/* ------------------------------------------------------------- filtering -- */

function defaultFilter(item: ComboBoxItem, query: string): boolean {
  if (!query) return true
  const label = item?.label
  if (typeof label !== 'string') return false
  return label.toLowerCase().includes(query.toLowerCase())
}

const filteredGroups = computed(() => {
  const query = currentInput.value.trim()
  const filter = props.filter ?? defaultFilter
  const groups: Array<{ title?: string; items: ComboBoxItem[] }> = []

  for (const group of normalizedGroups.value) {
    const items = group.items.filter((item) => filter(item, query))
    if (items.length > 0) groups.push({ title: group.title, items })
  }

  return groups
})

const filteredItems = computed<ComboBoxItem[]>(() =>
  filteredGroups.value.flatMap((group) => group.items),
)

/* --------------------------------------------------------------- open ------ */

function setOpen(next: boolean) {
  if (openState.value === next) {
    open.value = next
    return
  }
  open.value = next
  emit('update:isOpen', next)
  emit('openChange', next)

  if (next) {
    void nextTick(() => {
      syncTriggerWidth()
      inputEl.value?.focus()
    })
  } else {
    activeIndex.value = -1
  }
}

function onOpenChange(next: boolean) {
  setOpen(next)
}

function toggleFromButton() {
  if (finalIsDisabled.value) return
  setOpen(!openState.value)
}

function syncTriggerWidth() {
  const el = inputGroupEl.value
  if (!el) return
  const width = el.getBoundingClientRect().width
  if (width > 0) {
    popoverStyle.value = { '--trigger-width': `${width}px` }
  }
}

watch(
  () => props.isOpen,
  (next) => {
    if (next !== undefined) open.value = next
  },
)

/* --------------------------------------------------------------- input ---- */

function onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  if (props.inputValue === undefined) internalInput.value = value
  emit('update:inputValue', value)
  emit('input', value)
  activeIndex.value = -1
  if (!openState.value) setOpen(true)
}

function itemElements(): HTMLElement[] {
  const raw = popoverEl.value as unknown as { $el?: unknown } | null
  let el: Element | null = null

  if (raw && typeof raw === 'object' && '$el' in raw) {
    const nested = (raw as { $el?: unknown }).$el
    el = nested && (nested as Node).nodeType === 1 ? (nested as Element) : null
  } else if (raw && (raw as Node).nodeType === 1) {
    el = raw as Element
  }

  if (el) {
    return Array.from(el.querySelectorAll<HTMLElement>('[data-slot="list-box-item"]'))
  }

  return Array.from(
    document.querySelectorAll<HTMLElement>(
      '[data-slot="combo-box-popover"] [data-slot="list-box-item"]',
    ),
  )
}

function focusItem(index: number) {
  void nextTick(() => {
    const nodes = itemElements()
    if (nodes.length === 0) return
    const next = Math.min(Math.max(index, 0), nodes.length - 1)
    activeIndex.value = next
    nodes[next]?.focus()
  })
}

function moveActive(delta: number | 'first' | 'last') {
  if (!openState.value) {
    setOpen(true)
  }
  void nextTick(() => {
    const nodes = itemElements()
    if (nodes.length === 0) return
    let next: number
    if (delta === 'first') next = 0
    else if (delta === 'last') next = nodes.length - 1
    else if (activeIndex.value < 0) next = delta > 0 ? 0 : nodes.length - 1
    else next = activeIndex.value + delta
    focusItem(next)
  })
}

function activateActiveItem() {
  const nodes = itemElements()
  const index = activeIndex.value < 0 ? 0 : activeIndex.value
  const node = nodes[index]
  if (node) {
    node.click()
    return
  }
  const item = filteredItems.value[index]
  if (item) onSelectionChange([item.key])
}

function onInputKeydown(event: KeyboardEvent) {
  if (finalIsDisabled.value) return

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      moveActive(1)
      break
    case 'ArrowUp':
      event.preventDefault()
      moveActive(-1)
      break
    case 'Home':
      if (!openState.value) return
      event.preventDefault()
      focusItem(0)
      break
    case 'End':
      if (!openState.value) return
      event.preventDefault()
      focusItem(filteredItems.value.length - 1)
      break
    case 'Enter':
      if (!openState.value) return
      event.preventDefault()
      activateActiveItem()
      break
    case 'Escape':
      if (openState.value) {
        event.stopPropagation()
        setOpen(false)
        inputEl.value?.focus()
      }
      break
  }
}

function onListboxKeydown(event: KeyboardEvent) {
  if (finalIsDisabled.value) return

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      moveActive(1)
      break
    case 'ArrowUp':
      event.preventDefault()
      moveActive(-1)
      break
    case 'Home':
      event.preventDefault()
      focusItem(0)
      break
    case 'End':
      event.preventDefault()
      focusItem(filteredItems.value.length - 1)
      break
    case 'Escape':
      event.stopPropagation()
      setOpen(false)
      inputEl.value?.focus()
      break
  }
}

/* ----------------------------------------------------------- selection ---- */

function resolveKeys(): ListBoxKey[] {
  return currentKeys.value
}

function onSelectionChange(keys: ListBoxKey[]) {
  if (finalIsDisabled.value) return
  const next = isMultiple.value ? keys : (keys[0] ?? null)

  if (isMultiple.value) {
    internalMultiple.value = [...keys]
    emit('update:modelValue', [...keys])
    emit('update:selectedKeys', [...keys])
    const items = keys
      .map((k) => getItemByKey(k) ?? { key: k, label: String(k) })
      .filter((i): i is ComboBoxItem => i != null)
    emit('change', [...keys], items)
    if (props.inputValue === undefined) internalInput.value = ''
    return
  }

  internalSingle.value = next as ListBoxKey | null
  emit('update:modelValue', next as ListBoxKey | null)
  emit('update:selectedKey', next as ListBoxKey | null)

  const matched = next == null ? null : (getItemByKey(next as ListBoxKey) ?? {
    key: next as ListBoxKey,
    label: String(next),
  })
  emit('change', next as ListBoxKey | null, matched)

  if (props.inputValue === undefined) {
    internalInput.value = matched?.label ?? ''
  }

  setOpen(false)
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
    <label v-if="props.label" :for="props.id" data-slot="label">
      <slot name="label">{{ props.label }}</slot>
    </label>

    <PopoverRoot :open="openState" @update:open="onOpenChange">
      <PopoverAnchor as-child>
        <div ref="inputGroupEl" :class="inputGroupClass" data-slot="combo-box-input-group">
          <PopoverTrigger as-child as="input">
            <input
              ref="inputEl"
              :id="props.id"
              :aria-invalid="dataAttr(finalIsInvalid || undefined)"
              :aria-required="finalIsRequired ? 'true' : undefined"
              :class="inputClass"
              :disabled="finalIsDisabled"
              :placeholder="showPlaceholder ? props.placeholder : ''"
              :value="displayText"
              aria-autocomplete="list"
              aria-haspopup="listbox"
              autocomplete="off"
              data-slot="input"
              role="combobox"
              spellcheck="false"
              type="text"
              @input="onInput"
              @keydown="onInputKeydown"
            />
          </PopoverTrigger>

          <button
            v-if="hasSelection && !finalIsDisabled"
            type="button"
            :class="[triggerClass, clearClass]"
            aria-label="Clear selection"
            data-slot="combo-box-clear"
            @click="clearSelection"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 4l8 8M12 4l-8 8" stroke-linecap="round" />
            </svg>
          </button>

          <button
            type="button"
            :class="triggerClass"
            :data-open="dataAttr(openState || undefined)"
            :disabled="finalIsDisabled"
            aria-label="Toggle options"
            data-slot="combo-box-trigger"
            @click="toggleFromButton"
          >
            <svg
              data-slot="combo-box-trigger-default-icon"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M4 6l4 4 4-4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </PopoverAnchor>

      <PopoverPortal>
        <PopoverContent
          ref="popoverEl"
          :class="popoverClass"
          :side="props.placement"
          :side-offset="props.offset"
          :style="popoverStyle"
          data-slot="combo-box-popover"
          @keydown="onListboxKeydown"
          @pointer-down-outside="
            (event: Event) => {
              if (
                (event.target as HTMLElement | null)?.closest(
                  '[data-slot=&quot;combo-box-input-group&quot;]',
                )
              ) {
                event.preventDefault()
              }
            }
          "
        >
          <slot name="search">
            <div data-slot="combo-box-search">
              <input
                :placeholder="props.searchPlaceholder"
                :value="currentInput"
                aria-autocomplete="list"
                autocomplete="off"
                class="w-full bg-transparent outline-none"
                data-slot="input"
                role="combobox"
                spellcheck="false"
                @input="onInput"
                @keydown="onInputKeydown"
              />
            </div>
          </slot>

          <slot :groups="filteredGroups" :items="filteredItems">
            <ListBox
              :model-value="resolveKeys()"
              :selection-mode="isMultiple ? 'multiple' : 'single'"
              :disabled-keys="props.disabledKeys"
              :is-disabled="finalIsDisabled"
              aria-label="Options"
              data-slot="combo-box-list-box"
              @selection-change="onSelectionChange"
            >
              <template v-for="(group, groupIdx) in filteredGroups" :key="`group-${groupIdx}`">
                <ListBoxSection v-if="group.title" :title="group.title">
                  <ListBoxItem
                    v-for="item in group.items"
                    :key="`item-${item.key}`"
                    :is-disabled="item.isDisabled"
                    :text-value="item.label"
                    :value="item.key"
                  >
                    <slot :name="`item-${item.key}`" :item="item">
                      {{ item.label }}
                    </slot>
                    <ListBoxItemIndicator />
                  </ListBoxItem>
                </ListBoxSection>
                <template v-else>
                  <ListBoxItem
                    v-for="item in group.items"
                    :key="`item-${item.key}`"
                    :is-disabled="item.isDisabled"
                    :text-value="item.label"
                    :value="item.key"
                  >
                    <slot :name="`item-${item.key}`" :item="item">
                      {{ item.label }}
                    </slot>
                    <ListBoxItemIndicator />
                  </ListBoxItem>
                </template>
              </template>
            </ListBox>

            <div v-if="filteredItems.length === 0" data-slot="combo-box-empty">
              <slot name="empty">No results found.</slot>
            </div>
          </slot>
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>

    <span v-if="props.description && !props.errorMessage && !finalIsInvalid" data-slot="description">
      <slot name="description">{{ props.description }}</slot>
    </span>
    <span v-if="props.errorMessage" data-slot="error-message" role="alert">
      <slot name="error-message">{{ props.errorMessage }}</slot>
    </span>
  </div>
</template>
