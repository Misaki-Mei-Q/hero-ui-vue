<template>
  <form class="demo-checkbox-group-form" @submit.prevent="handleSubmit">
    <CheckboxGroup
      v-model="selectedPreferences"
      name="preferences"
      is-required
      @invalid="showError = true"
    >
      <Label>Preferences</Label>

      <Checkbox value="email">
        <Label>Email notifications</Label>
      </Checkbox>
      <Checkbox value="sms">
        <Label>SMS notifications</Label>
      </Checkbox>
      <Checkbox value="push">
        <Label>Push notifications</Label>
      </Checkbox>

      <FieldError v-if="showError">
        Please select at least one notification method.
      </FieldError>
    </CheckboxGroup>

    <Button type="submit">Submit</Button>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Button, Checkbox, CheckboxGroup, FieldError, Label } from '@misaki-mei-q/heroui-vue'

const selectedPreferences = ref<string[]>([])
const showError = ref(false)

const handleSubmit = () => {
  showError.value = selectedPreferences.value.length === 0
  if (!showError.value) {
    window.alert(`Selected preferences: ${selectedPreferences.value.join(', ')}`)
  }
}

watch(selectedPreferences, (value) => {
  if (value.length > 0) {
    showError.value = false
  }
})
</script>

<style lang="less">
.demo-checkbox-group-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
}
</style>
