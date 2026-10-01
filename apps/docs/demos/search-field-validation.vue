<template>
  <div class="demo-search-field-stack">
    <SearchField name="search" value="ab" is-required is-invalid>
      <Label>Search</Label>
      <SearchFieldGroup>
        <SearchFieldSearchIcon />
        <SearchFieldInput class="demo-search-field-input" placeholder="Search..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
      <FieldError>Search query must be at least 3 characters</FieldError>
    </SearchField>

    <SearchField name="search-invalid" value="invalid@query" is-invalid>
      <Label>Search</Label>
      <SearchFieldGroup>
        <SearchFieldSearchIcon />
        <SearchFieldInput class="demo-search-field-input" placeholder="Search..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
      <FieldError>Invalid characters in search query</FieldError>
    </SearchField>
  </div>
</template>

<script setup lang="ts">
import { FieldError, Label, SearchField, SearchFieldClearButton, SearchFieldGroup, SearchFieldInput, SearchFieldSearchIcon } from '@misaki-mei/heroui-vue'
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
</style>
