<template>
  <ScrollShadow class="h-48 max-w-xl rounded-lg border border-default-200 p-4">
    <div class="space-y-3">
      <p v-for="item in 12" :key="item" class="rounded-md bg-default-100 px-3 py-2 text-sm">
        Scrollable row {{ item }}
      </p>
    </div>
  </ScrollShadow>
</template>

<script setup>
import { ScrollShadow } from '@misaki-mei/heroui-vue'
</script>
