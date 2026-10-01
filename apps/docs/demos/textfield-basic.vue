<template>
  <div class="flex flex-col gap-4">
    <TextField label="Username" placeholder="Enter username" />
    <TextField label="Email" type="email" placeholder="you@example.com" description="We'll never share your email." />
    <TextField label="Password" type="password" placeholder="••••••••" error="Password is too short." />
  </div>
</template>

<script setup>
import { TextField } from '@misaki-mei-q/heroui-vue'
</script>
