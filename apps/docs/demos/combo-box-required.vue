<script setup lang="ts">
import { ref } from 'vue'
import {
  ComboBox,
  Label,
  Description,
  FieldError,
} from '@misaki-mei/heroui-vue'

const value = ref<string | null>(null)
const submitted = ref(false)
const error = ref<string | null>(null)

const items = [
  { key: 'react', label: 'React' },
  { key: 'vue', label: 'Vue' },
  { key: 'svelte', label: 'Svelte' },
  { key: 'solid', label: 'Solid' },
]

function submit() {
  submitted.value = true
  error.value = value.value ? null : 'Please pick a framework'
}
</script>

<template>
  <form class="flex w-full max-w-xs flex-col gap-2" @submit.prevent="submit">
    <Label for="framework">Favorite framework</Label>
    <ComboBox
      id="framework"
      v-model="value"
      :items="items"
      :is-required="true"
      :is-invalid="!!error"
    />
    <Description v-if="!submitted">Pick one to continue.</Description>
    <FieldError v-if="error" :error="error" />
    <button type="submit" class="bg-primary text-primary-foreground self-start rounded px-3 py-1.5 text-sm">
      Submit
    </button>
  </form>
</template>