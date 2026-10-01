<script setup lang="ts">
import { computed, getCurrentInstance, provide, ref, watch } from 'vue'
import { listboxVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { LIST_BOX_CONTEXT_KEY } from './context'
import type { ListBoxKey, ListBoxSelectionMode } from './context'

interface ListBoxProps {
  ariaLabel?: string
  class?: string
  defaultSelectedKeys?: ListBoxKey[]
  disabled?: boolean
  disabledKeys?: ListBoxKey[]
  isDisabled?: boolean
  modelValue?: ListBoxKey[]
  selectedKeys?: ListBoxKey[]
  selectionMode?: ListBoxSelectionMode
  variant?: 'default' | 'danger'
}

const props = withDefaults(defineProps<ListBoxProps>(), {
  defaultSelectedKeys: () => [],
  disabled: undefined,
  disabledKeys: () => [],
  isDisabled: undefined,
  modelValue: undefined,
  selectedKeys: undefined,
  selectionMode: 'single',
  variant: 'default',
})

const emit = defineEmits<{
  action: [key: ListBoxKey]
  'selection-change': [keys: ListBoxKey[]]
  'update:modelValue': [keys: ListBoxKey[]]
  'update:selectedKeys': [keys: ListBoxKey[]]
}>()

const instance = getCurrentInstance()
const hasProp = (name: string) => {
  const rawProps = instance?.vnode.props ?? {}
  const kebabName = name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)

  return name in rawProps || kebabName in rawProps
}

const internalSelectedKeys = ref<ListBoxKey[]>([...props.defaultSelectedKeys])
const selectedKeys = computed(() =>
  hasProp('selectedKeys')
    ? (props.selectedKeys ?? [])
    : hasProp('modelValue')
      ? (props.modelValue ?? [])
      : internalSelectedKeys.value,
)
const selectedKeySet = computed(() => new Set(selectedKeys.value))
const disabledKeySet = computed(() => new Set(props.disabledKeys))
const finalIsDisabled = computed(() => props.disabled ?? props.isDisabled)
const selectionMode = computed(() => props.selectionMode)
const variant = computed(() => props.variant)
const listBoxClass = computed(() =>
  composeTwClasses(props.class, listboxVariants({ variant: props.variant })),
)

const setSelectedKeys = (nextKeys: ListBoxKey[]) => {
  internalSelectedKeys.value = nextKeys
  emit('update:modelValue', nextKeys)
  emit('update:selectedKeys', nextKeys)
  emit('selection-change', nextKeys)
}

const toggleKey = (key: ListBoxKey) => {
  if (finalIsDisabled.value || disabledKeySet.value.has(key) || selectionMode.value === 'none') return

  if (selectionMode.value === 'single') {
    setSelectedKeys(selectedKeySet.value.has(key) ? [] : [key])
    return
  }

  const nextSet = new Set(selectedKeys.value)
  if (nextSet.has(key)) {
    nextSet.delete(key)
  } else {
    nextSet.add(key)
  }

  setSelectedKeys([...nextSet])
}

const actionKey = (key: ListBoxKey) => {
  if (finalIsDisabled.value || disabledKeySet.value.has(key)) return
  emit('action', key)
}

watch(
  () => props.defaultSelectedKeys,
  (defaultSelectedKeys) => {
    if (!hasProp('selectedKeys') && !hasProp('modelValue')) {
      internalSelectedKeys.value = [...defaultSelectedKeys]
    }
  },
)

provide(LIST_BOX_CONTEXT_KEY, {
  actionKey,
  disabledKeySet,
  isDisabled: finalIsDisabled,
  selectedKeySet,
  selectionMode,
  toggleKey,
  variant,
})
</script>

<template>
  <div
    :aria-disabled="dataAttr(finalIsDisabled)"
    :aria-label="props.ariaLabel"
    :aria-multiselectable="selectionMode === 'multiple' ? 'true' : undefined"
    :class="listBoxClass"
    :data-disabled="dataAttr(finalIsDisabled)"
    data-slot="list-box"
    role="listbox"
  >
    <slot :selected-keys="selectedKeys" />
  </div>
</template>
