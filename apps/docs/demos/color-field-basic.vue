<script setup lang="ts">
import { ref } from 'vue'
import { ColorField } from '@misaki-mei/heroui-vue'

const value = ref('#5b21b6')
</script>

<template>
  <ColorField v-model="value" label="Color" class="max-w-64" />
</template>
