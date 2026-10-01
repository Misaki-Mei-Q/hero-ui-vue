<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenu } from 'radix-vue/namespaced'
import { menuItemVariants } from '@misaki-mei/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface DropdownItemProps {
  class?: string
  disabled?: boolean
  shortcut?: string
  variant?: 'default' | 'danger'
}

const props = withDefaults(defineProps<DropdownItemProps>(), {
  variant: 'default',
  disabled: undefined,
})

const emit = defineEmits<{ select: [] }>()

function onSelect() {
  emit('select')
}

const classes = computed(() =>
  composeTwClasses(
    props.class,
    menuItemVariants({ variant: props.variant }).item(),
  ),
)
</script>

<template>
  <DropdownMenu.Item
    :class="classes"
    :disabled="props.disabled"
    data-slot="dropdown-item"
    @select="onSelect"
  >
    <slot>{{ '' }}</slot>
    <span v-if="props.shortcut" data-slot="dropdown-shortcut">{{ props.shortcut }}</span>
  </DropdownMenu.Item>
</template>