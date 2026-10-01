<template>
  <div class="demo-search-field-width">
    <SearchField full-width name="search">
      <Label>Search</Label>
      <SearchFieldGroup>
        <SearchFieldSearchIcon />
        <SearchFieldInput placeholder="Search..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
    </SearchField>
  </div>
</template>

<script setup lang="ts">
import { Label, SearchField, SearchFieldClearButton, SearchFieldGroup, SearchFieldInput, SearchFieldSearchIcon } from '@misaki-mei/heroui-vue'
</script>

<style lang="less">
.demo-search-field-width {
  width: 25rem;
}
</style>
