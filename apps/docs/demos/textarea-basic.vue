<template>
  <div class="flex flex-col gap-3">
    <Textarea placeholder="Write something..." :rows="3" />
    <Textarea variant="secondary" placeholder="Secondary variant" :rows="3" />
    <Textarea placeholder="Disabled" :disabled="true" :rows="3" />
  </div>
</template>

<script setup>
import { Textarea } from '@misaki-mei/heroui-vue'
</script>
