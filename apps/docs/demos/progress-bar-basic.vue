<template>
  <div class="grid w-full max-w-md gap-4">
    <ProgressBar label="Component migration" :value="58" />
    <ProgressBar label="Indeterminate task" color="warning" />
  </div>
</template>

<script setup>
import { ProgressBar } from '@misaki-mei-q/heroui-vue'
</script>
