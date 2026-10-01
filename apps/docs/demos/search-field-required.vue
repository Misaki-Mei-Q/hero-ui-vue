<template>
  <div class="demo-search-field-stack">
    <SearchField name="search" is-required>
      <Label>Search</Label>
      <SearchFieldGroup>
        <SearchFieldSearchIcon />
        <SearchFieldInput class="demo-search-field-input" placeholder="Search..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
    </SearchField>

    <SearchField name="search-query" is-required>
      <Label>Search query</Label>
      <SearchFieldGroup>
        <SearchFieldSearchIcon />
        <SearchFieldInput class="demo-search-field-input" placeholder="Enter search query..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
      <Description>Minimum 3 characters required</Description>
    </SearchField>
  </div>
</template>

<script setup lang="ts">
import { Description, Label, SearchField, SearchFieldClearButton, SearchFieldGroup, SearchFieldInput, SearchFieldSearchIcon } from '@misaki-mei/heroui-vue'
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
