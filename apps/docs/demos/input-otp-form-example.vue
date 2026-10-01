<template>
  <form class="demo-input-otp-form" @submit.prevent="handleSubmit">
    <div class="demo-input-otp-field">
      <Label>Two-factor authentication</Label>
      <Description>Enter the 6-digit code from your authenticator app</Description>
      <InputOTP
        v-model="value"
        :is-invalid="Boolean(error)"
        :max-length="6"
        name="code"
        @change="error = ''"
      >
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
      <span class="field-error" :data-visible="error ? 'true' : undefined">
        {{ error }}
      </span>
    </div>
    <Button class="demo-input-otp-submit" :is-disabled="value.length !== 6" :is-pending="isSubmitting" type="submit" variant="primary">
      <Spinner v-if="isSubmitting" color="current" size="sm" />
      {{ isSubmitting ? 'Verifying...' : 'Verify' }}
    </Button>
    <div class="demo-input-otp-help">
      <p>Having trouble?</p>
      <Link href="#">Use backup code</Link>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Description, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Label, Link, Spinner } from '@misaki-mei-q/heroui-vue'

const value = ref('')
const error = ref('')
const isSubmitting = ref(false)

const handleSubmit = () => {
  error.value = ''

  if (value.value.length !== 6) {
    error.value = 'Please enter all 6 digits'
    return
  }

  isSubmitting.value = true
  window.setTimeout(() => {
    if (value.value === '123456') {
      value.value = ''
    } else {
      error.value = 'Invalid code. Please try again.'
    }

    isSubmitting.value = false
  }, 1200)
}
</script>

<style lang="less">
.demo-input-otp-form,
.demo-input-otp-field {
  display: flex;
  width: 280px;
  flex-direction: column;
}

.demo-input-otp-form {
  gap: 1rem;
}

.demo-input-otp-field {
  gap: 0.5rem;
}

.demo-input-otp-submit {
  width: 100%;
}

.demo-input-otp-help {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
}

.demo-input-otp-help p {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.875rem;
}

.demo-input-otp-help a {
  color: var(--color-foreground);
  font-size: 0.875rem;
  text-decoration: underline;
}
</style>
