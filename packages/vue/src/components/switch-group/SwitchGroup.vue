<script setup lang="ts">
import { computed } from 'vue'
import { switchGroupVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses } from '../../utils'

interface SwitchGroupProps {
  class?: string
  orientation?: 'horizontal' | 'vertical'
}

const props = defineProps<SwitchGroupProps>()

const groupClass = computed(() =>
  composeTwClasses(props.class, switchGroupVariants({ orientation: props.orientation }).base()),
)
const itemsClass = computed(() => switchGroupVariants({ orientation: props.orientation }).items())
</script>

<template>
  <div :class="groupClass" :data-orientation="props.orientation" data-slot="switch-group">
    <div :class="itemsClass" data-slot="switch-group-items">
      <slot />
    </div>
  </div>
</template>
