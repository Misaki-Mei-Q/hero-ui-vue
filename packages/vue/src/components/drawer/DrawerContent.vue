<script setup lang="ts">
import { computed, inject, provide, watchEffect } from 'vue'
import { drawerVariants } from '@misaki-mei-q/heroui-vue-styles'
import { composeTwClasses, dataAttr } from '../../utils'
import { DRAWER_CONTEXT_KEY, type DrawerPlacement } from './context'

interface DrawerContentProps {
  class?: string
  placement?: DrawerPlacement
}

const props = withDefaults(defineProps<DrawerContentProps>(), {
  placement: 'bottom',
})

const context = inject(DRAWER_CONTEXT_KEY, null)
const slots = computed(() => drawerVariants({ placement: props.placement }))
const contentClass = computed(() => composeTwClasses(props.class, slots.value.content()))

watchEffect(() => {
  context?.setPlacement(props.placement)
})

if (context) {
  provide(DRAWER_CONTEXT_KEY, {
    ...context,
    placement: computed(() => props.placement),
    slots,
  })
}
</script>

<template>
  <div
    :class="contentClass"
    :data-entering="dataAttr(context?.isEntering.value)"
    :data-exiting="dataAttr(context?.isExiting.value)"
    :data-placement="placement"
    data-slot="drawer-content"
  >
    <slot :close="context?.close" />
  </div>
</template>
