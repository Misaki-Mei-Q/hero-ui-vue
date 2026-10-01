<script setup lang="ts">
import { onMounted, ref } from 'vue'

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <slot v-if="mounted" />
  <span v-else data-slot="ssr-placeholder">Loading…</span>
</template>