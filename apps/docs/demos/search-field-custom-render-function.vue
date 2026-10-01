<template>
  <SearchField name="search" data-custom="foo">
    <Label>Search</Label>
    <SearchFieldGroup>
      <SearchFieldSearchIcon />
      <SearchFieldInput class="demo-search-field-input" placeholder="Search..." />
      <SearchFieldClearButton />
    </SearchFieldGroup>
  </SearchField>
</template>

<script setup lang="ts">
import { Label, SearchField, SearchFieldClearButton, SearchFieldGroup, SearchFieldInput, SearchFieldSearchIcon } from '@misaki-mei-q/heroui-vue'
</script>

<style lang="less">
.demo-search-field-input {
  width: 17.5rem;
}
</style>
