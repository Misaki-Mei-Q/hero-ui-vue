<template>
  <Button is-pending>
    <template #default="{ isPending }">
      <Spinner v-if="isPending" color="current" size="sm" />
      Uploading...
    </template>
  </Button>
</template>

<script setup>
import { Button, Spinner } from '@misaki-mei/heroui-vue'
</script>