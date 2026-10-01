<script setup lang="ts">
import { DropdownMenu } from 'radix-vue/namespaced'

interface DropdownSeparatorProps {
  class?: string
}

defineProps<DropdownSeparatorProps>()
</script>

<template>
  <DropdownMenu.Separator :class="$props.class" data-slot="dropdown-separator" />
</template>