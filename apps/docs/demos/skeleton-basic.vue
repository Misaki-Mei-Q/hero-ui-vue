<template>
  <div class="grid w-full max-w-sm gap-3">
    <Skeleton class="h-5 w-3/5" />
    <Skeleton class="h-24 w-full rounded-2xl" />
    <div class="flex gap-3">
      <Skeleton class="size-10 rounded-full" />
      <div class="grid flex-1 gap-2">
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-2/3" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Skeleton } from '@misaki-mei/heroui-vue'
</script>
