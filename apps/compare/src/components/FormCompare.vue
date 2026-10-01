<script setup lang="ts">
import { ref } from 'vue'
import { Button, Description, TextField } from '@misaki-mei/heroui-vue'

const emailError = ref('')
const passwordError = ref('')
const submitted = ref<{ email?: string; password?: string } | null>(null)

function validateEmail(value: string) {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    return 'Please enter a valid email address'
  }
  return ''
}

function validatePassword(value: string) {
  if (value.length < 8) return 'Password must be at least 8 characters'
  if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter'
  if (!/[0-9]/.test(value)) return 'Password must contain at least one number'
  return ''
}

function onSubmit(event: Event) {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const data = new FormData(form)
  const email = String(data.get('email') ?? '')
  const password = String(data.get('password') ?? '')

  emailError.value = validateEmail(email)
  passwordError.value = validatePassword(password)

  if (!emailError.value && !passwordError.value) {
    submitted.value = { email, password }
  } else {
    submitted.value = null
  }
}

function onReset() {
  emailError.value = ''
  passwordError.value = ''
  submitted.value = null
}
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">With validation (manual, no Form helper)</h3>
      <form
        class="form-flex"
        style="display: flex; flex-direction: column; gap: 1rem; width: 24rem"
        @submit="onSubmit"
        @reset="onReset"
      >
        <TextField
          is-required
          name="email"
          type="email"
          label="Email"
          placeholder="john@example.com"
          :error="emailError"
        />

        <TextField
          is-required
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          description="Must be at least 8 characters with 1 uppercase and 1 number"
          :error="passwordError"
        />

        <div style="display: flex; gap: 0.5rem">
          <Button type="submit">Submit</Button>
          <Button type="reset" variant="secondary">Reset</Button>
        </div>

        <Description v-if="submitted">
          Submitted: {{ submitted.email || '—' }} / {{ submitted.password ? '••••••' : '—' }}
        </Description>
      </form>

      <div style="margin-top: 1rem; font-size: 0.75rem; color: var(--muted-foreground)">
        Vue port note: a dedicated <code>Form</code> wrapper component is not yet implemented in
        <code>@misaki-mei/heroui-vue</code>. Validation is wired manually with the
        <code>error</code> prop on <code>TextField</code>.
      </div>
    </section>
  </div>
</template>