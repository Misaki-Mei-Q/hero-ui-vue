<template>
  <div class="demo-input-otp-stack">
    <div class="demo-input-otp-card">
      <Label>Primary variant</Label>
      <InputOTP v-model="primaryValue" :max-length="6" variant="primary">
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
    <div class="demo-input-otp-card">
      <Label>Secondary variant</Label>
      <InputOTP v-model="secondaryValue" :max-length="6" variant="secondary">
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Label } from '@misaki-mei/heroui-vue'

const primaryValue = ref('')
const secondaryValue = ref('')
</script>

<style lang="less">
.demo-input-otp-stack,
.demo-input-otp-card {
  display: flex;
  flex-direction: column;
}

.demo-input-otp-stack {
  gap: 1.5rem;
}

.demo-input-otp-card {
  gap: 0.5rem;
}
</style>
