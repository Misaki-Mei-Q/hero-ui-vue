<template>
  <div class="demo-search-field-stack">
    <SearchField name="primary-search" variant="primary">
      <Label>Primary variant</Label>
      <SearchFieldGroup>
        <SearchFieldSearchIcon />
        <SearchFieldInput class="demo-search-field-input" placeholder="Search..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
    </SearchField>

    <SearchField name="secondary-search" variant="secondary">
      <Label>Secondary variant</Label>
      <SearchFieldGroup>
        <SearchFieldSearchIcon />
        <SearchFieldInput class="demo-search-field-input" placeholder="Search..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
    </SearchField>
  </div>
</template>

<script setup lang="ts">
import { Label, SearchField, SearchFieldClearButton, SearchFieldGroup, SearchFieldInput, SearchFieldSearchIcon } from '@misaki-mei/heroui-vue'
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
