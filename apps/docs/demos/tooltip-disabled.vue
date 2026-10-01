<script setup lang="ts">
import { Tooltip, Button } from '@misaki-mei/heroui-vue'
</script>

<template>
  <Tooltip content="Tooltips are unavailable" :disabled="true">
    <Button variant="secondary">Disabled</Button>
  </Tooltip>
</template>