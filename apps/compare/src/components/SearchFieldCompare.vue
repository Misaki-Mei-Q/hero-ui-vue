<script setup lang="ts">
import { Description, Label as FormLabel, SearchField, SearchFieldClearButton, SearchFieldGroup, SearchFieldInput, SearchFieldSearchIcon } from '@misaki-mei/heroui-vue'
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Basic</h3>
      <SearchField name="search">
        <SearchFieldGroup>
          <SearchFieldSearchIcon />
          <SearchFieldInput placeholder="Search..." />
          <SearchFieldClearButton />
        </SearchFieldGroup>
      </SearchField>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">With label & description</h3>
      <div style="display: flex; flex-direction: column; gap: 0.25rem; max-width: 280px">
        <FormLabel>Search products</FormLabel>
        <SearchField name="search-products" variant="secondary">
          <SearchFieldGroup>
            <SearchFieldSearchIcon />
            <SearchFieldInput placeholder="Search products..." />
            <SearchFieldClearButton />
          </SearchFieldGroup>
        </SearchField>
        <Description>Enter keywords to search for products</Description>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Disabled</h3>
      <SearchField name="search-disabled" is-disabled>
        <SearchFieldGroup>
          <SearchFieldSearchIcon />
          <SearchFieldInput placeholder="Disabled search" />
          <SearchFieldClearButton />
        </SearchFieldGroup>
      </SearchField>
    </section>
  </div>
</template>