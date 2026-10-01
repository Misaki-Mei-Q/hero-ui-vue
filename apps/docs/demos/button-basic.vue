<template>
  <Button @click="handlePress">Click me</Button>
</template>

<script setup>
import { Button } from '@misaki-mei/heroui-vue'

const handlePress = () => {
  console.log('Button pressed')
}
</script>
