<script setup lang="ts">
import { ref } from 'vue'
import {
  Form,
  Button,
  Input,
  Label,
  Description,
  FieldError,
} from '@misaki-mei/heroui-vue'

const email = ref('')
const password = ref('')
const errors = ref<Record<string, string>>({})

function onSubmit() {
  errors.value = {}
  if (!email.value) errors.value.email = 'Email is required'
  if (!password.value) errors.value.password = 'Password is required'
  if (Object.keys(errors.value).length === 0) {
    alert('Signed in!')
  }
}
</script>

<template>
  <Form
    :errors="errors"
    class="flex w-full max-w-sm flex-col gap-3"
    @submit="onSubmit"
  >
    <div class="flex flex-col gap-1">
      <Label for="email">Email</Label>
      <Input id="email" v-model="email" name="email" type="email" />
      <FieldError v-if="errors.email" :error="errors.email" />
    </div>

    <div class="flex flex-col gap-1">
      <Label for="password">Password</Label>
      <Input id="password" v-model="password" name="password" type="password" />
      <FieldError v-if="errors.password" :error="errors.password" />
    </div>

    <Button type="submit" class="self-start">Sign in</Button>
  </Form>
</template>