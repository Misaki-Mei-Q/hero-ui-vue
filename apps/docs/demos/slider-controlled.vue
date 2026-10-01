<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@misaki-mei/heroui-vue'

const volume = ref(40)
</script>

<template>
  <div class="grid w-full max-w-md gap-2">
    <Slider v-model="volume" label="Volume" />
    <span class="text-default-500 text-sm">Current: {{ volume }}</span>
  </div>
</template>