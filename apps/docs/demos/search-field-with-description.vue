<template>
  <div class="demo-search-field-stack">
    <SearchField name="search">
      <Label>Search products</Label>
      <SearchFieldGroup>
        <SearchFieldSearchIcon />
        <SearchFieldInput class="demo-search-field-input" placeholder="Search products..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
      <Description>Enter keywords to search for products</Description>
    </SearchField>

    <SearchField name="search-users">
      <Label>Search users</Label>
      <SearchFieldGroup>
        <SearchFieldSearchIcon />
        <SearchFieldInput class="demo-search-field-input" placeholder="Search users..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
      <Description>Search by name, email, or username</Description>
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
