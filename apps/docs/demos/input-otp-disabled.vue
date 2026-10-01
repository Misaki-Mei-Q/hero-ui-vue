<template>
  <div class="demo-input-otp-card">
    <Label is-disabled>Verify account</Label>
    <Description>Code verification is currently disabled</Description>
    <InputOTP :max-length="6" is-disabled>
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
import { Description, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Label } from '@misaki-mei-q/heroui-vue'
</script>

<style lang="less">
.demo-input-otp-card {
  display: flex;
  width: 280px;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
