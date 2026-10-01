<template>
  <Surface class="demo-search-field-surface">
    <SearchField name="search" variant="secondary">
      <Label>Search</Label>
      <SearchFieldGroup>
        <SearchFieldSearchIcon />
        <SearchFieldInput class="demo-search-field-full" placeholder="Search..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
      <Description>Enter keywords to search</Description>
    </SearchField>

    <SearchField name="search-2" variant="secondary">
      <Label>Advanced search</Label>
      <SearchFieldGroup>
        <SearchFieldSearchIcon />
        <SearchFieldInput class="demo-search-field-full" placeholder="Advanced search..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
      <Description>Use filters to refine your search</Description>
    </SearchField>
  </Surface>
</template>

<script setup lang="ts">
import { Description, Label, SearchField, SearchFieldClearButton, SearchFieldGroup, SearchFieldInput, SearchFieldSearchIcon, Surface } from '@misaki-mei-q/heroui-vue'
</script>

<style lang="less">
.demo-search-field-surface {
  display: flex;
  width: 100%;
  max-width: 24rem;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1.5rem;
  padding: 1.5rem;
}

.demo-search-field-full {
  width: 100%;
}
</style>
