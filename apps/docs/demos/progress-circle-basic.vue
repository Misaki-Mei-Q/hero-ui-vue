<template>
  <div class="flex items-center gap-5">
    <ProgressCircle :value="32" size="sm" />
    <ProgressCircle :value="68" color="success" />
    <ProgressCircle color="warning" size="lg" />
  </div>
</template>

<script setup>
import { ProgressCircle } from '@misaki-mei-q/heroui-vue'
</script>
