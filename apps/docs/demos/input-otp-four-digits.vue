<template>
  <div class="demo-input-otp-card">
    <Label>Enter PIN</Label>
    <InputOTP v-model="value" :max-length="4">
      <InputOTPGroup>
        <InputOTPSlot :index="0" />
        <InputOTPSlot :index="1" />
        <InputOTPSlot :index="2" />
        <InputOTPSlot :index="3" />
      </InputOTPGroup>
    </InputOTP>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputOTP, InputOTPGroup, InputOTPSlot, Label } from '@misaki-mei-q/heroui-vue'

const value = ref('')
</script>

<style lang="less">
.demo-input-otp-card {
  display: flex;
  width: 280px;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
