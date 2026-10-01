<template>
  <div class="demo-input-otp-card">
    <Label>Enter code (letters only)</Label>
    <Description>Only alphabetic characters are allowed</Description>
    <InputOTP v-model="value" :max-length="6" :pattern="REGEXP_ONLY_CHARS">
      <InputOTPGroup>
        <InputOTPSlot :index="0" />
        <InputOTPSlot :index="1" />
        <InputOTPSlot :index="2" />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot :index="3" />
        <InputOTPSlot :index="4" />
        <InputOTPSlot :index="5" />
      </InputOTPGroup>
    </InputOTP>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Description, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Label, REGEXP_ONLY_CHARS } from '@misaki-mei-q/heroui-vue'

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
