<template>
  <div class="flex flex-col gap-3">
    <Input placeholder="Primary input" />
    <Input variant="secondary" placeholder="Secondary input" />
    <Input placeholder="Disabled" :disabled="true" />
  </div>
</template>

<script setup>
import { Input } from '@misaki-mei/heroui-vue'
</script>
