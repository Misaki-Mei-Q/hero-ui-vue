<template>
  <Surface class="demo-input-otp-surface">
    <div class="demo-input-otp-heading">
      <Label>Verify account</Label>
      <p>We've sent a code to a****@gmail.com</p>
    </div>
    <InputOTP v-model="value" :max-length="6" variant="secondary">
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
    <div class="demo-input-otp-footer">
      <p>Didn't receive a code?</p>
      <Link href="#">Resend</Link>
    </div>
  </Surface>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Label, Link, Surface } from '@misaki-mei-q/heroui-vue'

const value = ref('')
</script>

<style lang="less">
.demo-input-otp-surface {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  max-width: 328px;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 1.5rem;
  padding: 1.5rem;
}

.demo-input-otp-heading {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.demo-input-otp-heading p,
.demo-input-otp-footer p {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.875rem;
}

.demo-input-otp-footer {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.25rem 0.25rem 0;
}

.demo-input-otp-footer a {
  color: var(--color-foreground);
  text-decoration: underline;
}
</style>
