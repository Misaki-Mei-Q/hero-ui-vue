<script setup lang="ts">
import { DropdownMenu } from 'radix-vue/namespaced'

interface DropdownLabelProps {
  class?: string
}

defineProps<DropdownLabelProps>()
</script>

<template>
  <DropdownMenu.Label :class="$props.class" data-slot="dropdown-label">
    <slot />
  </DropdownMenu.Label>
</template>