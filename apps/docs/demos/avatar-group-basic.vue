<script setup lang="ts">
import { Avatar, AvatarGroup, AvatarFallback } from '@misaki-mei/heroui-vue'
</script>

<template>
  <AvatarGroup :max="3">
    <Avatar>
      <AvatarFallback>A</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>B</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>C</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>D</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>E</AvatarFallback>
    </Avatar>
  </AvatarGroup>
</template>