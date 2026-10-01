<template>
  <Button @click="handlePress">Click me</Button>
</template>

<script setup>
import { Button } from '@misaki-mei-q/heroui-vue'

const handlePress = () => {
  console.log('Button pressed')
}
</script>
