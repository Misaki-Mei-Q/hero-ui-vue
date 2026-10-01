<template>
  <SearchField v-model="value" name="search" is-required :is-invalid="isInvalid">
    <Label>Search</Label>
    <SearchFieldGroup>
      <SearchFieldSearchIcon />
      <SearchFieldInput class="demo-search-field-input" placeholder="Search..." />
      <SearchFieldClearButton />
    </SearchFieldGroup>
    <FieldError v-if="isInvalid">Search query must be at least 3 characters</FieldError>
    <Description v-else>Enter at least 3 characters to search</Description>
  </SearchField>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Description, FieldError, Label, SearchField, SearchFieldClearButton, SearchFieldGroup, SearchFieldInput, SearchFieldSearchIcon } from '@misaki-mei-q/heroui-vue'

const value = ref('')
const isInvalid = computed(() => value.value.length > 0 && value.value.length < 3)
</script>

<style lang="less">
.demo-search-field-input {
  width: 17.5rem;
}
</style>
