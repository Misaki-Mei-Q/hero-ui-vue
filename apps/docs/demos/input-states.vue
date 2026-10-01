<template>
  <div class="flex flex-col gap-3">
    <Input placeholder="Disabled input" :disabled="true" />
    <Input placeholder="Full width" :full-width="true" />
  </div>
</template>

<script setup>
import { Input } from '@misaki-mei-q/heroui-vue'
</script>
