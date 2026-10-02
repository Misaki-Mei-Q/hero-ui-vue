<script setup lang="ts">
import { computed, inject } from 'vue'
import { TabsIndicator } from 'radix-vue'
import { composeTwClasses } from '../../utils'
import { TABS_CONTEXT_KEY } from './context'

interface TabIndicatorProps {
  class?: string
}

const props = defineProps<TabIndicatorProps>()
const tabsContext = inject(TABS_CONTEXT_KEY, null)

const indicatorClass = computed(() =>
  composeTwClasses(props.class, tabsContext?.slots.tabIndicator()),
)
</script>

<template>
  <TabsIndicator :class="indicatorClass" data-slot="tabs-indicator" aria-hidden="true" />
</template>
