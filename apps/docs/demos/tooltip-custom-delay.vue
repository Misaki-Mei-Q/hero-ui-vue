<script setup lang="ts">
import { Tooltip, Button } from '@misaki-mei/heroui-vue'
</script>

<template>
  <Tooltip :delay="0" content="Opens instantly on hover">
    <Button>Instant</Button>
  </Tooltip>
</template>