<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  useId,
  watch,
} from 'vue'
import { autocompleteVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses, dataAttr, useInteractionStates } from '../../utils'
import { Description } from '../description'
import { EmptyState } from '../empty-state'
import { FieldError } from '../field-error'
import { Label } from '../label'

type AutocompleteKey = string | number
type SelectionMode = 'single' | 'multiple'

export interface AutocompleteItem {
  avatarAlt?: string
  avatarSrc?: string
  description?: string
  disabled?: boolean
  id?: AutocompleteKey
  key?: AutocompleteKey
  label?: string
  section?: string
  textValue?: string
  value?: AutocompleteKey
  [key: string]: unknown
}

interface AutocompleteProps {
  class?: string
  clearable?: boolean
  defaultSelectedKey?: AutocompleteKey | null
  defaultSelectedKeys?: AutocompleteKey[]
  disabled?: boolean
  disabledKeys?: AutocompleteKey[]
  description?: string
  emptyText?: string
  errorMessage?: string
  fullWidth?: boolean
  id?: string
  isDisabled?: boolean
  isInvalid?: boolean
  isOpen?: boolean
  isRequired?: boolean
  items?: AutocompleteItem[]
  label?: string
  modelValue?: AutocompleteKey | AutocompleteKey[] | null
  name?: string
  placeholder?: string
  required?: boolean
  searchPlaceholder?: string
  selectionMode?: SelectionMode
  variant?: 'primary' | 'secondary'
}

type NormalizedItem = {
  item: AutocompleteItem
  key: AutocompleteKey
  label: string
  section?: string
}

const props = withDefaults(defineProps<AutocompleteProps>(), {
  clearable: true,
  defaultSelectedKey: null,
  defaultSelectedKeys: () => [],
  disabled: undefined,
  disabledKeys: () => [],
  emptyText: 'No results found',
  fullWidth: false,
  isDisabled: undefined,
  isInvalid: undefined,
  items: () => [],
  placeholder: 'Select an option',
  searchPlaceholder: 'Search...',
  selectionMode: 'single',
  variant: 'primary',
})

const emit = defineEmits<{
  change: [
    value: AutocompleteKey | AutocompleteKey[] | null,
    item: AutocompleteItem | AutocompleteItem[] | null,
  ]
  clear: []
  'open-change': [isOpen: boolean]
  'update:isOpen': [isOpen: boolean]
  'update:modelValue': [value: AutocompleteKey | AutocompleteKey[] | null]
}>()

const rootRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLElement | null>(null)
const popoverRef = ref<HTMLElement | null>(null)
const searchInputRef = ref<HTMLInputElement | null>(null)
const validationProxyRef = ref<HTMLSelectElement | null>(null)
const isOpen = ref(false)
const query = ref('')
const activeIndex = ref(-1)
const internalIsInvalid = ref(false)
const validationMessage = ref('')
const internalSelectedKey = ref<AutocompleteKey | null>(props.defaultSelectedKey)
const internalSelectedKeys = ref<AutocompleteKey[]>([...props.defaultSelectedKeys])
const popoverStyle = ref<Record<string, string>>({})

const generatedId = useId()
const baseId = props.id ?? `heroui-autocomplete-${generatedId}`
const listboxId = `${baseId}-listbox`
const searchId = `${baseId}-search`

const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const finalIsRequired = computed(() => props.required ?? props.isRequired)
const finalIsInvalid = computed(() => props.isInvalid || internalIsInvalid.value)
const isMultiple = computed(() => props.selectionMode === 'multiple')
const disabledKeySet = computed(() => new Set(props.disabledKeys))

const slots = computed(() =>
  autocompleteVariants({
    fullWidth: props.fullWidth,
    variant: props.variant,
  }),
)

const { interactionAttrs, interactionHandlers } = useInteractionStates(() => finalIsDisabled.value)

const rootClass = computed(() => composeTwClasses(props.class, slots.value.base()))
const triggerClass = computed(() => slots.value.trigger())
const valueClass = computed(() => slots.value.value())
const indicatorClass = computed(() => slots.value.indicator())
const clearButtonClass = computed(() => slots.value.clearButton())
const popoverClass = computed(() => slots.value.popover())

const getItemKey = (item: AutocompleteItem): AutocompleteKey =>
  item.id ?? item.key ?? item.value ?? item.textValue ?? item.label ?? ''

const getItemLabel = (item: AutocompleteItem): string =>
  String(item.label ?? item.textValue ?? item.value ?? item.id ?? item.key ?? '')

const normalizedItems = computed<NormalizedItem[]>(() =>
  props.items.map((item) => {
    const key = getItemKey(item)

    return {
      item: {
        ...item,
        disabled: item.disabled || disabledKeySet.value.has(key),
      },
      key,
      label: getItemLabel(item),
      section: item.section,
    }
  }),
)

const selectedKey = computed(() =>
  isMultiple.value
    ? null
    : Array.isArray(props.modelValue)
      ? null
      : (props.modelValue ?? internalSelectedKey.value),
)

const selectedKeys = computed(() => {
  if (!isMultiple.value) return []
  if (Array.isArray(props.modelValue)) return props.modelValue
  return internalSelectedKeys.value
})

const selectedKeySet = computed(() => new Set(selectedKeys.value))

const selectedItemEntry = computed(() =>
  normalizedItems.value.find((entry) => entry.key === selectedKey.value),
)

const selectedItemEntries = computed(() =>
  normalizedItems.value.filter((entry) => selectedKeySet.value.has(entry.key)),
)

const filteredItems = computed(() => {
  const normalizedQuery = query.value.trim().toLocaleLowerCase()

  if (!normalizedQuery) return normalizedItems.value

  return normalizedItems.value.filter(({ item, label, section }) => {
    const searchable = `${label} ${item.description ?? ''} ${section ?? ''}`.toLocaleLowerCase()
    return searchable.includes(normalizedQuery)
  })
})

const groupedFilteredItems = computed(() => {
  const groups: Array<{ entries: NormalizedItem[]; section?: string }> = []

  for (const entry of filteredItems.value) {
    const previous = groups[groups.length - 1]

    if (previous && previous.section === entry.section) {
      previous.entries.push(entry)
    } else {
      groups.push({ section: entry.section, entries: [entry] })
    }
  }

  return groups
})

const selectedLabel = computed(() => selectedItemEntry.value?.label ?? '')
const hasSelection = computed(() =>
  isMultiple.value
    ? selectedKeys.value.length > 0
    : selectedKey.value !== null && selectedKey.value !== undefined,
)
const validationProxyValue = computed(() => (hasSelection.value ? '__selected__' : ''))
const finalErrorMessage = computed(
  () => props.errorMessage ?? validationMessage.value,
)

const displaySelectedKeys = computed(() =>
  isMultiple.value ? selectedItemEntries.value : selectedItemEntry.value ? [selectedItemEntry.value] : [],
)

const isEntrySelected = (entry: NormalizedItem) =>
  isMultiple.value ? selectedKeySet.value.has(entry.key) : entry.key === selectedKey.value

const setSelectedKey = (key: AutocompleteKey | null, item: AutocompleteItem | null) => {
  internalSelectedKey.value = key
  if (key !== null && key !== undefined) {
    internalIsInvalid.value = false
    validationMessage.value = ''
  }
  emit('update:modelValue', key)
  emit('change', key, item)
}

const setSelectedKeys = (keys: AutocompleteKey[]) => {
  internalSelectedKeys.value = keys
  if (keys.length > 0) {
    internalIsInvalid.value = false
    validationMessage.value = ''
  }
  const items = normalizedItems.value
    .filter((entry) => keys.includes(entry.key))
    .map((entry) => entry.item)

  emit('update:modelValue', keys)
  emit('change', keys, items)
}

const updatePopoverPosition = () => {
  if (!triggerRef.value) return

  const rect = triggerRef.value.getBoundingClientRect()
  const gap = 8
  const viewportHeight = window.visualViewport?.height ?? window.innerHeight
  const popoverHeight = popoverRef.value?.offsetHeight ?? 320
  const shouldPlaceAbove = rect.bottom + gap + popoverHeight > viewportHeight && rect.top > popoverHeight
  const rawTop = shouldPlaceAbove ? rect.top - gap - popoverHeight : rect.bottom + gap
  const top = Math.max(gap, Math.min(rawTop, viewportHeight - gap))

  popoverStyle.value = {
    '--trigger-width': `${rect.width}px`,
    left: `${rect.left}px`,
    top: `${top}px`,
    width: `${rect.width}px`,
  }
}

const openPopover = async () => {
  if (finalIsDisabled.value) return

  isOpen.value = true
  emit('update:isOpen', true)
  emit('open-change', true)
  activeIndex.value = -1
  updatePopoverPosition()

  await nextTick()
  updatePopoverPosition()
  searchInputRef.value?.focus({ preventScroll: true })
}

const closePopover = () => {
  if (!isOpen.value) return

  isOpen.value = false
  emit('update:isOpen', false)
  emit('open-change', false)
  query.value = ''
  activeIndex.value = -1
}

const togglePopover = () => {
  if (isOpen.value) {
    closePopover()
    return
  }

  void openPopover()
}

const selectEntry = (entry: NormalizedItem) => {
  if (entry.item.disabled) return

  if (isMultiple.value) {
    const nextSet = new Set(selectedKeys.value)

    if (nextSet.has(entry.key)) {
      nextSet.delete(entry.key)
    } else {
      nextSet.add(entry.key)
    }

    setSelectedKeys([...nextSet])
    searchInputRef.value?.focus({ preventScroll: true })
    return
  }

  setSelectedKey(entry.key, entry.item)
  closePopover()
  triggerRef.value?.focus({ preventScroll: true })
}

const removeSelectedKey = (key: AutocompleteKey, event: MouseEvent) => {
  event.stopPropagation()
  setSelectedKeys(selectedKeys.value.filter((selected) => selected !== key))
}

const clearSelection = (event?: MouseEvent) => {
  event?.stopPropagation()

  if (isMultiple.value) {
    setSelectedKeys([])
  } else {
    setSelectedKey(null, null)
  }

  emit('clear')
}

const handleInvalid = (event: Event) => {
  event.preventDefault()
  internalIsInvalid.value = true
  validationMessage.value =
    validationProxyRef.value?.validationMessage || 'Please select an item from the list.'
}

const moveActive = (direction: 1 | -1) => {
  const candidates = filteredItems.value
  if (!candidates.length) return

  let index = activeIndex.value

  for (let step = 0; step < candidates.length; step += 1) {
    index = (index + direction + candidates.length) % candidates.length
    if (!candidates[index]?.item.disabled) {
      activeIndex.value = index
      return
    }
  }
}

const handleTriggerKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
    event.preventDefault()
    void openPopover()
  }
}

const handleSearchKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    event.preventDefault()
    closePopover()
    triggerRef.value?.focus({ preventScroll: true })
    return
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault()
    moveActive(1)
    return
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault()
    moveActive(-1)
    return
  }

  if (event.key === 'Enter' && activeIndex.value >= 0) {
    event.preventDefault()
    const entry = filteredItems.value[activeIndex.value]
    if (entry) selectEntry(entry)
  }
}

const handleDocumentPointerDown = (event: PointerEvent) => {
  const target = event.target

  if (
    target instanceof Node &&
    (rootRef.value?.contains(target) || popoverRef.value?.contains(target))
  ) {
    return
  }

  closePopover()
}

const handleViewportChange = () => {
  if (isOpen.value) updatePopoverPosition()
}

watch(filteredItems, () => {
  activeIndex.value = -1
})

watch(hasSelection, (selected) => {
  if (selected) {
    internalIsInvalid.value = false
    validationMessage.value = ''
  }
})

watch(
  () => props.isOpen,
  (nextOpen) => {
    if (nextOpen !== undefined) {
      isOpen.value = nextOpen
      if (nextOpen) {
        activeIndex.value = -1
        void nextTick(updatePopoverPosition)
      }
    }
  },
  { immediate: true },
)

onMounted(() => {
  document.addEventListener('pointerdown', handleDocumentPointerDown)
  window.addEventListener('resize', handleViewportChange)
  window.addEventListener('scroll', handleViewportChange, true)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handleDocumentPointerDown)
  window.removeEventListener('resize', handleViewportChange)
  window.removeEventListener('scroll', handleViewportChange, true)
})
</script>

<template>
  <div
    :id="baseId"
    ref="rootRef"
    :class="rootClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    :data-invalid="dataAttr(finalIsInvalid)"
    :data-required="dataAttr(finalIsRequired)"
    :aria-invalid="dataAttr(finalIsInvalid)"
    data-slot="autocomplete"
  >
    <Label
      v-if="props.label"
      :for="searchId"
      :is-disabled="finalIsDisabled"
      :is-invalid="finalIsInvalid"
      :is-required="finalIsRequired"
    >
      {{ props.label }}
    </Label>

    <div
      ref="triggerRef"
      :class="triggerClass"
      :aria-controls="listboxId"
      :aria-disabled="dataAttr(finalIsDisabled)"
      :aria-expanded="dataAttr(isOpen)"
      :data-disabled="dataAttr(finalIsDisabled)"
      :data-focus="interactionAttrs['data-focused']"
      :data-focus-visible="interactionAttrs['data-focus-visible']"
      :data-hovered="interactionAttrs['data-hovered']"
      :data-invalid="dataAttr(finalIsInvalid)"
      :tabindex="finalIsDisabled ? -1 : 0"
      role="combobox"
      data-slot="autocomplete-trigger"
      v-on="interactionHandlers"
      @click="togglePopover"
      @keydown="handleTriggerKeydown"
    >
      <span
        :class="valueClass"
        :data-placeholder="dataAttr(!hasSelection)"
        data-slot="autocomplete-value"
      >
        <slot
          name="value"
          :item="selectedItemEntry?.item ?? null"
          :items="selectedItemEntries.map((entry) => entry.item)"
          :label="selectedLabel"
          :labels="selectedItemEntries.map((entry) => entry.label)"
        >
          <template v-if="isMultiple && displaySelectedKeys.length">
            <span class="autocomplete__tag-list" data-slot="autocomplete-tag-list">
              <span
                v-for="entry in displaySelectedKeys"
                :key="entry.key"
                class="autocomplete__tag"
                data-slot="autocomplete-tag"
              >
                <span class="truncate">{{ entry.label }}</span>
                <button
                  class="autocomplete__tag-remove"
                  type="button"
                  :aria-label="`Remove ${entry.label}`"
                  @click="removeSelectedKey(entry.key, $event)"
                >
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M3 3l6 6M9 3L3 9" />
                  </svg>
                </button>
              </span>
            </span>
          </template>
          <template v-else>
            {{ selectedLabel || props.placeholder }}
          </template>
        </slot>
      </span>

      <button
        v-if="props.clearable"
        :class="clearButtonClass"
        :data-empty="dataAttr(!hasSelection)"
        :disabled="!hasSelection || finalIsDisabled"
        type="button"
        aria-label="Clear selection"
        data-slot="autocomplete-clear-button"
        @click="clearSelection"
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          data-slot="autocomplete-clear-button-icon"
          aria-hidden="true"
        >
          <path d="M4 4l8 8M12 4l-8 8" />
        </svg>
      </button>

      <slot
        name="indicator"
        :class-name="indicatorClass"
        :is-disabled="finalIsDisabled"
        :is-open="isOpen"
      >
        <svg
          :class="indicatorClass"
          :data-open="dataAttr(isOpen)"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-slot="autocomplete-default-indicator"
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </slot>
    </div>

    <template v-if="props.name && isMultiple">
      <input
        v-for="key in selectedKeys"
        :key="key"
        type="hidden"
        :name="props.name"
        :value="key"
      >
    </template>
    <input v-else-if="props.name" type="hidden" :name="props.name" :value="selectedKey ?? ''">
    <select
      v-if="finalIsRequired"
      ref="validationProxyRef"
      class="autocomplete__validation-proxy"
      :value="validationProxyValue"
      required
      tabindex="-1"
      aria-hidden="true"
      @invalid="handleInvalid"
    >
      <option value=""></option>
      <option value="__selected__">Selected</option>
    </select>

    <FieldError v-if="finalIsInvalid && finalErrorMessage">
      {{ finalErrorMessage }}
    </FieldError>
    <Description v-else-if="props.description">
      {{ props.description }}
    </Description>

    <Teleport to="body">
      <div
        v-if="isOpen"
        :id="listboxId"
        ref="popoverRef"
        :class="popoverClass"
        data-entering="true"
        data-placement="bottom"
        data-slot="autocomplete-popover"
        role="presentation"
        :style="popoverStyle"
      >
        <div class="search-field search-field--secondary" data-slot="search-field" :data-empty="dataAttr(!query)">
          <div class="search-field__group" data-slot="search-field-group">
            <svg
              class="search-field__search-icon"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              data-slot="search-field-search-icon"
              aria-hidden="true"
            >
              <circle cx="7" cy="7" r="4.5" />
              <path d="M10.25 10.25L13 13" />
            </svg>
            <input
              :id="searchId"
              ref="searchInputRef"
              v-model="query"
              :placeholder="props.searchPlaceholder"
              class="search-field__input"
              type="search"
              autocomplete="off"
              data-slot="search-field-input"
              @keydown="handleSearchKeydown"
            >
          </div>
        </div>

        <div
          class="list-box"
          data-slot="list-box"
          role="listbox"
          :aria-multiselectable="dataAttr(isMultiple)"
        >
          <template v-for="(group, groupIndex) in groupedFilteredItems" :key="group.section ?? groupIndex">
            <div v-if="groupIndex > 0" data-slot="separator" data-orientation="horizontal" />
            <section class="list-box-section" data-slot="list-box-section">
              <div v-if="group.section" class="header" data-slot="header">
                {{ group.section }}
              </div>

              <button
                v-for="entry in group.entries"
                :id="`${listboxId}-${entry.key}`"
                :key="entry.key"
                class="list-box-item"
                :aria-selected="dataAttr(isEntrySelected(entry))"
                :data-disabled="dataAttr(entry.item.disabled)"
                :data-hovered="dataAttr(filteredItems[activeIndex]?.key === entry.key)"
                :data-selected="dataAttr(isEntrySelected(entry))"
                :disabled="entry.item.disabled"
                type="button"
                role="option"
                data-slot="list-box-item"
                @click="selectEntry(entry)"
                @mouseenter="activeIndex = filteredItems.findIndex((item) => item.key === entry.key)"
              >
                <slot name="item" :item="entry.item" :selected="isEntrySelected(entry)">
                  <img
                    v-if="entry.item.avatarSrc"
                    :src="entry.item.avatarSrc"
                    :alt="entry.item.avatarAlt ?? ''"
                    class="size-7 rounded-full object-cover"
                  >
                  <span class="min-w-0 flex-1">
                    <span data-slot="label" class="block truncate">{{ entry.label }}</span>
                    <span v-if="entry.item.description" data-slot="description" class="block text-xs text-muted">
                      {{ entry.item.description }}
                    </span>
                  </span>
                  <span
                    v-if="isEntrySelected(entry)"
                    class="list-box-item__indicator"
                    data-slot="list-box-item-indicator"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-slot="list-box-item-indicator--checkmark"
                    >
                      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" />
                    </svg>
                  </span>
                </slot>
              </button>
            </section>
          </template>

          <EmptyState v-if="!filteredItems.length">
            {{ props.emptyText }}
          </EmptyState>
        </div>
      </div>
    </Teleport>
  </div>
</template>
