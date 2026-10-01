<script setup lang="ts">
import { Slider } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div class="grid w-full max-w-md gap-4">
    <Slider
      label="Price range"
      :default-value="[250, 750]"
      :min-value="0"
      :max-value="1000"
      :step="10"
    />
  </div>
</template>