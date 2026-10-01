<template>
  <TagGroup label="Categories" selection-mode="single" :default-selected-keys="['travel']">
    <Tag value="news">
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <path d="M4 5h11a3 3 0 0 1 3 3v11H7a3 3 0 0 1-3-3V5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="2" />
        <path d="M8 9h6M8 13h6" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
      </svg>
      News
    </Tag>
    <Tag value="travel">
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <path d="M3 11.5 21 4l-7.5 18-3-7.5L3 11.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="2" />
      </svg>
      Travel
    </Tag>
    <Tag value="gaming">
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <path d="M7 10h10a4 4 0 0 1 3.7 2.5l.6 1.5a3 3 0 0 1-4.7 3.4L14 15H10l-2.6 2.4A3 3 0 0 1 2.7 14l.6-1.5A4 4 0 0 1 7 10Z" stroke="currentColor" stroke-linejoin="round" stroke-width="2" />
        <path d="M8 13h.01M16 13h.01" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
      </svg>
      Gaming
    </Tag>
    <Tag value="shopping">
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <path d="M6 8h12l-1 12H7L6 8Z" stroke="currentColor" stroke-linejoin="round" stroke-width="2" />
        <path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
      </svg>
      Shopping
    </Tag>
  </TagGroup>
</template>

<script setup lang="ts">
import { Tag, TagGroup } from '@misaki-mei-q/heroui-vue'
</script>
