<script setup lang="ts">
import { Tooltip } from '@misaki-mei/heroui-vue'
</script>

<template>
  <Tooltip>
    <span class="underline decoration-dotted">What is HeroUI?</span>
    <template #content>
      <div class="max-w-xs">
        <p class="font-medium">HeroUI</p>
        <p class="text-default-400 mt-1 text-xs">
          A beautiful, accessible Vue component library.
        </p>
      </div>
    </template>
  </Tooltip>
</template>