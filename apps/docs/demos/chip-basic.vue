<template>
  <div class="demo-chip-row">
    <Chip>Default</Chip>
    <Chip color="accent">Accent</Chip>
    <Chip color="success">Success</Chip>
    <Chip color="warning">Warning</Chip>
    <Chip color="danger">Danger</Chip>
  </div>
</template>

<script setup lang="ts">
import { Chip } from '@misaki-mei/heroui-vue'
</script>

<style lang="less">
.demo-chip-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}
</style>
