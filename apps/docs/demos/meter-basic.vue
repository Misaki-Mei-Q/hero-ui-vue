<template>
  <div class="grid w-full max-w-md gap-4">
    <Meter label="CSS compatibility" :value="86" color="success" />
    <Meter label="Remaining migration" :value="42" color="warning" />
  </div>
</template>

<script setup>
import { Meter } from '@misaki-mei-q/heroui-vue'
</script>
