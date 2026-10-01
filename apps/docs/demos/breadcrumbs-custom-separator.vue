<template>
  <Breadcrumbs>
    <template #separator>
      <svg class="demo-breadcrumbs-separator" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M249.3 235.8c10.2 12.6 9.5 31.1-2.2 42.8l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9S64.5 396.9 64.5 384l0-256c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128 2.2 2.4z" />
      </svg>
    </template>

    <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
    <BreadcrumbsItem href="#">Products</BreadcrumbsItem>
    <BreadcrumbsItem href="#">Electronics</BreadcrumbsItem>
    <BreadcrumbsItem>Laptop</BreadcrumbsItem>
  </Breadcrumbs>
</template>

<script setup lang="ts">
import { Breadcrumbs, BreadcrumbsItem } from '@misaki-mei-q/heroui-vue'
</script>

<style lang="less">
.demo-breadcrumbs-separator {
  width: 0.75rem;
  height: 0.75rem;
  fill: currentcolor;
}
</style>
