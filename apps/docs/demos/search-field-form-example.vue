<template>
  <form class="demo-search-field-form" @submit.prevent="handleSubmit">
    <SearchField v-model="value" name="search" is-required :is-invalid="isInvalid">
      <Label>Search products</Label>
      <SearchFieldGroup>
        <SearchFieldSearchIcon />
        <SearchFieldInput class="demo-search-field-full" placeholder="Search products..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
      <FieldError v-if="isInvalid">Search query must be at least {{ minLength }} characters</FieldError>
      <Description v-else>Enter at least {{ minLength }} characters to search</Description>
    </SearchField>

    <Button class="demo-search-field-full" :is-disabled="value.length < minLength" :is-pending="isSubmitting" type="submit" variant="primary">
      <Spinner v-if="isSubmitting" color="current" size="sm" />
      {{ isSubmitting ? 'Searching...' : 'Search' }}
    </Button>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Button, Description, FieldError, Label, SearchField, SearchFieldClearButton, SearchFieldGroup, SearchFieldInput, SearchFieldSearchIcon, Spinner } from '@misaki-mei-q/heroui-vue'

const value = ref('')
const isSubmitting = ref(false)
const minLength = 3
const isInvalid = computed(() => value.value.length > 0 && value.value.length < minLength)

const handleSubmit = () => {
  if (value.value.length < minLength) return
  isSubmitting.value = true
  window.setTimeout(() => {
    value.value = ''
    isSubmitting.value = false
  }, 1500)
}
</script>

<style lang="less">
.demo-search-field-form {
  display: flex;
  width: 17.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.demo-search-field-full {
  width: 100%;
}
</style>
