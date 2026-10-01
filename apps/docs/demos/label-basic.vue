<template>
  <div class="flex flex-col gap-2">
    <Label for="name">Full Name</Label>
    <Label for="email" :is-required="true">Email Address</Label>
  </div>
</template>

<script setup>
import { Label } from '@misaki-mei-q/heroui-vue'
</script>
