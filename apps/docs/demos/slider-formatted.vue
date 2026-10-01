<script setup lang="ts">
import { Slider } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div class="grid w-full max-w-md gap-4">
    <Slider
      label="Price"
      :default-value="[1234.5]"
      :format-options="{ style: 'currency', currency: 'USD' }"
      :max-value="5000"
    />
    <Slider
      label="Weight"
      :default-value="[42]"
      :format-options="{ style: 'unit', unit: 'kilogram' }"
      :max-value="200"
    />
  </div>
</template>