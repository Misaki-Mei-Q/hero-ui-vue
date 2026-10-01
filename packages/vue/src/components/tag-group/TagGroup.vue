<script setup lang="ts">
import { computed, getCurrentInstance, provide, ref, watch } from 'vue'
import { tagGroupVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'
import { TAG_GROUP_CONTEXT_KEY } from './context'
import type { TagGroupKey, TagGroupSelectionMode } from './context'

interface TagGroupProps {
  class?: string
  defaultSelectedKeys?: TagGroupKey[]
  disabled?: boolean
  disabledKeys?: TagGroupKey[]
  isDisabled?: boolean
  isInvalid?: boolean
  label?: string
  modelValue?: TagGroupKey[]
  selectedKeys?: TagGroupKey[]
  selectionMode?: TagGroupSelectionMode
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'surface'
}

const props = withDefaults(defineProps<TagGroupProps>(), {
  defaultSelectedKeys: () => [],
  disabled: undefined,
  disabledKeys: () => [],
  isDisabled: undefined,
  isInvalid: undefined,
  modelValue: undefined,
  selectedKeys: undefined,
  selectionMode: 'none',
  size: 'md',
  variant: 'default',
})

const emit = defineEmits<{
  remove: [key: TagGroupKey]
  'selection-change': [keys: TagGroupKey[]]
  'update:modelValue': [keys: TagGroupKey[]]
  'update:selectedKeys': [keys: TagGroupKey[]]
}>()

const instance = getCurrentInstance()
const hasProp = (name: string) => {
  const rawProps = instance?.vnode.props ?? {}
  const kebabName = name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)

  return name in rawProps || kebabName in rawProps
}

const slots = computed(() => tagGroupVariants())
const internalSelectedKeys = ref<TagGroupKey[]>([...props.defaultSelectedKeys])
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
const finalIsInvalid = computed(() => props.isInvalid)
const selectionMode = computed(() => props.selectionMode)
const size = computed(() => props.size)
const variant = computed(() => props.variant)
const groupClass = computed(() => composeTwClasses(props.class, slots.value.base()))

const setSelectedKeys = (nextKeys: TagGroupKey[]) => {
  internalSelectedKeys.value = nextKeys
  emit('update:modelValue', nextKeys)
  emit('update:selectedKeys', nextKeys)
  emit('selection-change', nextKeys)
}

const toggleKey = (key: TagGroupKey) => {
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

const removeKey = (key: TagGroupKey) => {
  const nextKeys = selectedKeys.value.filter((selectedKey) => selectedKey !== key)
  setSelectedKeys(nextKeys)
  emit('remove', key)
}

watch(
  () => props.defaultSelectedKeys,
  (defaultSelectedKeys) => {
    if (!hasProp('selectedKeys') && !hasProp('modelValue')) {
      internalSelectedKeys.value = [...defaultSelectedKeys]
    }
  },
)

provide(TAG_GROUP_CONTEXT_KEY, {
  disabledKeySet,
  isDisabled: finalIsDisabled,
  isInvalid: finalIsInvalid,
  removeKey,
  selectedKeySet,
  selectionMode,
  size,
  toggleKey,
  variant,
})
</script>

<template>
  <div
    :aria-disabled="finalIsDisabled ? 'true' : undefined"
    :aria-invalid="finalIsInvalid ? 'true' : undefined"
    :class="groupClass"
    :data-disabled="finalIsDisabled ? 'true' : undefined"
    :data-invalid="finalIsInvalid ? 'true' : undefined"
    data-slot="tag-group"
    role="group"
  >
    <span v-if="props.label || $slots.label" data-slot="label">
      <slot name="label">{{ props.label }}</slot>
    </span>
    <div
      :aria-multiselectable="selectionMode === 'multiple' ? 'true' : undefined"
      :class="slots.list()"
      data-slot="tag-group-list"
      :role="selectionMode === 'none' ? undefined : 'listbox'"
    >
      <slot :selected-keys="selectedKeys" :toggle-key="toggleKey" :remove-key="removeKey" />
    </div>
  </div>
</template>
