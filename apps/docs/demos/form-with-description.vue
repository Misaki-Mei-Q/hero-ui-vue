<script setup lang="ts">
import { ref } from 'vue'
import {
  Form,
  Button,
  Input,
  Label,
  Description,
} from '@misaki-mei/heroui-vue'

const username = ref('')
</script>

<template>
  <Form class="flex w-full max-w-sm flex-col gap-3" @submit="alert('Submitted')">
    <div class="flex flex-col gap-1">
      <Label for="username">Username</Label>
      <Input id="username" v-model="username" name="username" />
      <Description>This will be your public display name.</Description>
    </div>

    <div class="flex gap-2">
      <Button type="submit">Submit</Button>
      <Button type="reset" variant="secondary">Reset</Button>
    </div>
  </Form>
</template>