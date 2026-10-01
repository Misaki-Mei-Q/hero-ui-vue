<template>
  <TagGroup label="Frameworks">
    <Tag selected>Vue</Tag>
    <Tag>React</Tag>
    <Tag variant="surface">
      Svelte
      <TagRemoveButton />
    </Tag>
  </TagGroup>
</template>

<script setup>
import { Tag, TagGroup, TagRemoveButton } from '@misaki-mei/heroui-vue'
</script>
