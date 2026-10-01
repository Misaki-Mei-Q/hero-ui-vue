<script setup lang="ts">
import { computed, getCurrentInstance, provide, ref, watch } from 'vue'
import { disclosureGroupVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { DISCLOSURE_GROUP_CONTEXT_KEY, type DisclosureGroupKey } from './context'

interface DisclosureGroupProps {
  allowsMultipleExpanded?: boolean
  as?: string
  class?: string
  defaultExpandedKeys?: Iterable<DisclosureGroupKey>
  disabled?: boolean
  expandedKeys?: Iterable<DisclosureGroupKey>
  isDisabled?: boolean
  modelValue?: Iterable<DisclosureGroupKey>
}

const props = withDefaults(defineProps<DisclosureGroupProps>(), {
  allowsMultipleExpanded: false,
  as: 'div',
  disabled: undefined,
  isDisabled: undefined,
})

const emit = defineEmits<{
  'expanded-change': [keys: Set<DisclosureGroupKey>]
  'update:expandedKeys': [keys: Set<DisclosureGroupKey>]
  'update:modelValue': [keys: Set<DisclosureGroupKey>]
  change: [keys: Set<DisclosureGroupKey>]
}>()

const instance = getCurrentInstance()
const hasProp = (name: string) => {
  const rawProps = instance?.vnode.props ?? {}
  const kebabName = name.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)

  return name in rawProps || kebabName in rawProps
}

const toKeySet = (keys: Iterable<DisclosureGroupKey> | undefined) => new Set(keys ?? [])

const internalExpandedKeys = ref<Set<DisclosureGroupKey>>(toKeySet(props.defaultExpandedKeys))
const slots = computed(() => disclosureGroupVariants())
const isDisabled = computed(() => props.disabled ?? props.isDisabled)
const groupClass = computed(() => composeTwClasses(props.class, slots.value.base()))
const isControlled = computed(() => hasProp('expandedKeys') || hasProp('modelValue'))
const currentExpandedKeys = computed(() => {
  if (hasProp('expandedKeys')) return toKeySet(props.expandedKeys)
  if (hasProp('modelValue')) return toKeySet(props.modelValue)

  return internalExpandedKeys.value
})

const commitExpandedKeys = (keys: Set<DisclosureGroupKey>) => {
  const nextKeys = new Set(keys)

  if (!isControlled.value) {
    internalExpandedKeys.value = nextKeys
  }

  emit('update:expandedKeys', nextKeys)
  emit('update:modelValue', nextKeys)
  emit('expanded-change', nextKeys)
  emit('change', nextKeys)
}

const toggle = (id: DisclosureGroupKey) => {
  if (isDisabled.value) return

  const nextKeys = new Set(currentExpandedKeys.value)

  if (nextKeys.has(id)) {
    nextKeys.delete(id)
  } else if (props.allowsMultipleExpanded) {
    nextKeys.add(id)
  } else {
    nextKeys.clear()
    nextKeys.add(id)
  }

  commitExpandedKeys(nextKeys)
}

watch(
  () => props.defaultExpandedKeys,
  defaultExpandedKeys => {
    if (!isControlled.value) {
      internalExpandedKeys.value = toKeySet(defaultExpandedKeys)
    }
  },
)

provide(DISCLOSURE_GROUP_CONTEXT_KEY, {
  isDisabled,
  isExpanded: id => currentExpandedKeys.value.has(id),
  toggle,
})
</script>

<template>
  <component
    :is="props.as"
    :aria-disabled="dataAttr(isDisabled)"
    :class="groupClass"
    :data-disabled="dataAttr(isDisabled)"
    data-slot="disclosure-group"
  >
    <slot :expanded-keys="currentExpandedKeys" :is-disabled="isDisabled" />
  </component>
</template>
