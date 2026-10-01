<template>
  <div class="demo-input-otp-card">
    <Label>Verify account</Label>
    <InputOTP v-model="value" :max-length="6">
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
    <Description>
      <template v-if="value.length > 0">
        Value: {{ value }} ({{ value.length }}/6) ·
        <button class="demo-input-otp-link-button" type="button" @click="value = ''">
          Clear
        </button>
      </template>
      <template v-else>
        Enter a 6-digit code
      </template>
    </Description>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Description, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Label } from '@misaki-mei-q/heroui-vue'

const value = ref('')
</script>

<style lang="less">
.demo-input-otp-card {
  display: flex;
  width: 280px;
  flex-direction: column;
  gap: 0.5rem;
}

.demo-input-otp-link-button {
  border: 0;
  background: transparent;
  color: var(--color-foreground);
  cursor: var(--cursor-interactive);
  font: inherit;
  font-weight: 500;
  padding: 0;
  text-decoration: underline;
}
</style>
