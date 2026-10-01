<template>
  <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-3">
      <Checkbox id="form-notifications" name="notifications" value="on">
        <Label for="form-notifications">Enable notifications</Label>
      </Checkbox>
      <Checkbox id="form-newsletter" default-selected name="newsletter" value="on">
        <Label for="form-newsletter">Subscribe to newsletter</Label>
      </Checkbox>
      <Checkbox id="form-marketing" name="marketing" value="on">
        <Label for="form-marketing">Receive marketing updates</Label>
      </Checkbox>
    </div>
    <Button class="w-fit" size="sm" type="submit">Submit</Button>
    <p v-if="message" class="text-sm text-muted">{{ message }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { Button, Checkbox, Label } from '@misaki-mei/heroui-vue'

const message = ref('')

const handleSubmit = (event) => {
  const formData = new FormData(event.currentTarget)
  const values = Array.from(formData.entries()).map(([key, value]) => `${key}: ${value}`)
  message.value = values.length ? values.join(', ') : 'No options selected'
}
</script>
