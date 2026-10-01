<script setup lang="ts">
import { DropdownMenu } from 'radix-vue/namespaced'

interface DropdownSectionProps {
  class?: string
  title?: string
}

defineProps<DropdownSectionProps>()
</script>

<template>
  <DropdownMenu.Group :class="$props.class" data-slot="dropdown-section">
    <DropdownLabel v-if="title">{{ title }}</DropdownLabel>
    <slot />
  </DropdownMenu.Group>
</template>