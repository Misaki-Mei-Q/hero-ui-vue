<script setup lang="ts">
import { computed } from 'vue'
import { headerVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface HeaderProps {
  class?: string
}

const props = defineProps<HeaderProps>()

const headerClass = computed(() => composeTwClasses(props.class, headerVariants()))
</script>

<template>
  <header :class="headerClass" data-slot="header">
    <slot />
  </header>
</template>
