<template>
  <div class="flex flex-col gap-3">
    <Checkbox id="email-notifications" v-model="isSelected">
      <Label for="email-notifications">Email notifications</Label>
    </Checkbox>
    <p class="text-sm text-muted">
      Status: <span class="font-medium">{{ isSelected ? 'Enabled' : 'Disabled' }}</span>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Checkbox, Label } from '@misaki-mei-q/heroui-vue'

const isSelected = ref(true)
</script>
