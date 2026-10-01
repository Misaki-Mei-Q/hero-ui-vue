<template>
  <Card class="demo-card-form">
    <CardHeader>
      <CardTitle>Login</CardTitle>
      <CardDescription>Enter your credentials to access your account</CardDescription>
    </CardHeader>
    <form @submit.prevent="submitted = true">
      <CardContent>
        <div class="demo-card-form-fields">
          <TextField
            v-model="email"
            full-width
            label="Email"
            name="email"
            placeholder="email@example.com"
            type="email"
            variant="secondary"
          />
          <TextField
            v-model="password"
            full-width
            label="Password"
            name="password"
            placeholder="••••••••"
            type="password"
            variant="secondary"
          />
        </div>
      </CardContent>
      <CardFooter class="demo-card-form-footer">
        <Button class="demo-card-full-button" type="submit">Sign In</Button>
        <Link href="#">Forgot password?</Link>
        <span v-if="submitted" class="demo-card-meta-muted">Form submitted successfully.</span>
      </CardFooter>
    </form>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Link, TextField } from '@misaki-mei/heroui-vue'

const email = ref('')
const password = ref('')
const submitted = ref(false)
</script>

<style lang="less">
.demo-card-form {
  width: 32rem;
  max-width: 100%;
  text-align: left;
}

.demo-card-form-fields {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-card-form-footer {
  margin-top: 1rem;
  flex-direction: column;
  align-items: stretch;
  gap: 0.5rem;
}

.demo-card-form-footer [data-slot="link"] {
  align-self: center;
  justify-content: center;
  text-align: center;
}

.demo-card-full-button {
  width: 100%;
}

.demo-card-meta-muted {
  color: var(--color-muted-foreground);
  font-size: 0.75rem;
}
</style>
