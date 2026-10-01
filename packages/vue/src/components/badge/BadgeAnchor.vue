<script setup lang="ts">
import { computed } from 'vue'
import { badgeVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface BadgeAnchorProps {
  class?: string
}

const props = defineProps<BadgeAnchorProps>()
const anchorClass = computed(() => composeTwClasses(props.class, badgeVariants().anchor()))
</script>

<template>
  <span :class="anchorClass" data-slot="badge-anchor">
    <slot />
  </span>
</template>
