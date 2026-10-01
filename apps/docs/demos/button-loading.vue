<template>
  <Button is-pending>
    <Spinner color="current" size="sm" />
    Uploading...
  </Button>
</template>

<script setup>
import { Button, Spinner } from '@misaki-mei/heroui-vue'
</script>
