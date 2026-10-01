<template>
  <div class="demo-search-field-stack">
    <SearchField v-model="value" name="search">
      <Label>Search</Label>
      <SearchFieldGroup>
        <SearchFieldSearchIcon />
        <SearchFieldInput class="demo-search-field-input" placeholder="Search..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
      <Description>Current value: {{ value || '(empty)' }}</Description>
    </SearchField>

    <div class="demo-search-field-actions">
      <Button variant="tertiary" @click="value = ''">Clear</Button>
      <Button variant="tertiary" @click="value = 'example query'">Set example</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Description, Label, SearchField, SearchFieldClearButton, SearchFieldGroup, SearchFieldInput, SearchFieldSearchIcon } from '@misaki-mei-q/heroui-vue'

const value = ref('')
</script>

<style lang="less">
.demo-search-field-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.demo-search-field-input {
  width: 17.5rem;
}

.demo-search-field-actions {
  display: flex;
  gap: 0.5rem;
}
</style>
