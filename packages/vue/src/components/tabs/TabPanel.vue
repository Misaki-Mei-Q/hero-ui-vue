<script setup lang="ts">
import { computed, inject } from 'vue'
import { TabsContent } from 'radix-vue'
import { composeTwClasses } from '../../utils'
import { TABS_CONTEXT_KEY } from './context'

interface TabPanelProps {
  class?: string
  value: string
}

const props = defineProps<TabPanelProps>()
const tabsContext = inject(TABS_CONTEXT_KEY, null)
const panelClass = computed(() => composeTwClasses(props.class, tabsContext?.slots.tabPanel()))
</script>

<template>
  <TabsContent
    :class="panelClass"
    :value="props.value"
    :data-orientation="tabsContext?.orientation"
    data-slot="tab-panel"
  >
    <slot />
  </TabsContent>
</template>
