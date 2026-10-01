<template>
  <div class="demo-search-field-stack">
    <SearchField v-model="value" name="search">
      <Label>Search</Label>
      <SearchFieldGroup>
        <SearchFieldSearchIcon />
        <SearchFieldInput id="shortcut-search" class="demo-search-field-input" placeholder="Search..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
      <Description>Use keyboard shortcut to quickly focus this field</Description>
    </SearchField>

    <div class="demo-search-field-shortcut">
      <span>Press</span>
      <Kbd :keys="['S']">S</Kbd>
      <span>to focus the search field</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Description, Kbd, Label, SearchField, SearchFieldClearButton, SearchFieldGroup, SearchFieldInput, SearchFieldSearchIcon } from '@misaki-mei/heroui-vue'

const value = ref('')

const handleKeydown = (event: KeyboardEvent) => {
  if (event.shiftKey && event.key === 'S' && !event.metaKey && !event.ctrlKey && !event.altKey) {
    event.preventDefault()
    document.getElementById('shortcut-search')?.focus()
  }
  if (event.key === 'Escape' && document.activeElement?.id === 'shortcut-search') {
    ;(document.activeElement as HTMLElement).blur()
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
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

.demo-search-field-shortcut {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-muted);
  font-size: 0.875rem;
}
</style>
