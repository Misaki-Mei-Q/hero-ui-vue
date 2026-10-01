<script setup lang="ts">
import {
  Dropdown,
  DropdownItem,
  DropdownSection,
  DropdownLabel,
  Button,
} from '@misaki-mei/heroui-vue'

function handle(action: string) {
  alert(action)
}
</script>

<template>
  <Dropdown placement="bottom">
    <template #trigger>
      <Button variant="secondary">Open menu</Button>
    </template>

    <DropdownSection title="Account">
      <DropdownItem @select="handle('Profile')">Profile</DropdownItem>
      <DropdownItem @select="handle('Settings')">Settings</DropdownItem>
      <DropdownItem @select="handle('Billing')">Billing</DropdownItem>
    </DropdownSection>

    <DropdownSection title="Actions">
      <DropdownItem shortcut="⌘N">New file</DropdownItem>
      <DropdownItem shortcut="⌘O">Open file</DropdownItem>
      <DropdownItem disabled>Save (coming soon)</DropdownItem>
    </DropdownSection>

    <DropdownLabel>Danger zone</DropdownLabel>
    <DropdownItem variant="danger" @select="handle('Delete')">
      Delete account
    </DropdownItem>
  </Dropdown>
</template>