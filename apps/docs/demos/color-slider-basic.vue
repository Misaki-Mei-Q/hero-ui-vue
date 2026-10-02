<script setup lang="ts">
import { ref } from 'vue'
import { ColorSlider } from '@misaki-mei/heroui-vue'

const hue = ref(266)
</script>

<template>
  <div class="w-64">
    <ColorSlider v-model="hue" channel="hue" :max="360" label="Hue" />
  </div>
</template>
