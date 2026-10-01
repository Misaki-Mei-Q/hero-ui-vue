<script setup lang="ts">
import { ref } from 'vue'
import {
  Select,
  ListBoxItem,
  Label,
  Description,
  FieldError,
} from '@misaki-mei/heroui-vue'

const value = ref<string | null>(null)
const submitted = ref(false)
const error = ref<string | null>(null)

function validate() {
  submitted.value = true
  error.value = value.value ? null : 'Please select a fruit'
}
</script>

<template>
  <form class="flex w-full max-w-xs flex-col gap-2" @submit.prevent="validate">
    <Label for="fruit">Favorite fruit</Label>
    <Select id="fruit" v-model="value" :is-invalid="!!error" :is-required="true">
      <ListBoxItem value="apple">Apple</ListBoxItem>
      <ListBoxItem value="banana">Banana</ListBoxItem>
      <ListBoxItem value="cherry">Cherry</ListBoxItem>
      <ListBoxItem value="date">Date</ListBoxItem>
    </Select>
    <Description v-if="!submitted">Pick one to continue.</Description>
    <FieldError v-if="error" :error="error" />
    <button
      type="submit"
      class="bg-primary text-primary-foreground rounded-field self-start px-3 py-1.5 text-sm"
    >
      Submit
    </button>
  </form>
</template>