<script setup lang="ts">
import { Slider } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div class="grid w-full max-w-md gap-4">
    <Slider label="Volume" :default-value="[35]" />
    <Slider label="Disabled" :default-value="[60]" is-disabled />
  </div>
</template>