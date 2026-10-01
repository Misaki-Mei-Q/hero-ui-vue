<template>
  <div class="demo-avatar-row">
    <Avatar
      v-for="item in colors"
      :key="item.color"
      :color="item.color"
    >
      <AvatarFallback>{{ item.label }}</AvatarFallback>
    </Avatar>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback } from '@misaki-mei/heroui-vue'

const colors = [
  { color: 'default', label: 'DF' },
  { color: 'accent', label: 'AC' },
  { color: 'success', label: 'SC' },
  { color: 'warning', label: 'WR' },
  { color: 'danger', label: 'DG' },
] as const
</script>

<style lang="less">
.demo-avatar-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}
</style>
