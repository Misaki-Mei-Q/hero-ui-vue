<template>
  <Surface class="demo-list-box-surface">
    <ListBox aria-label="File actions" class="demo-list-box-actions" selection-mode="none" @action="handleAction">
      <ListBoxSection>
        <Header>Actions</Header>
        <ListBoxItem id="new-file" text-value="New file">
          <div class="demo-list-box-action-icon">
            <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
              <path d="M8 3v10M3 8h10" stroke="currentColor" stroke-linecap="round" stroke-width="1.8" />
            </svg>
          </div>
          <div class="demo-list-box-user">
            <Label>New file</Label>
            <Description>Create a new file</Description>
          </div>
          <Kbd class="demo-list-box-kbd" :keys="['N']" variant="light">N</Kbd>
        </ListBoxItem>
        <ListBoxItem id="edit-file" text-value="Edit file">
          <div class="demo-list-box-action-icon">
            <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
              <path d="M10.9 2.6 13.4 5.1 6.2 12.3 3 13l.7-3.2 7.2-7.2Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            </svg>
          </div>
          <div class="demo-list-box-user">
            <Label>Edit file</Label>
            <Description>Make changes</Description>
          </div>
          <Kbd class="demo-list-box-kbd" :keys="['N']" variant="light">E</Kbd>
        </ListBoxItem>
      </ListBoxSection>
      <Separator />
      <ListBoxSection>
        <Header>Danger zone</Header>
        <ListBoxItem id="delete-file" text-value="Delete file" variant="danger">
          <div class="demo-list-box-action-icon demo-list-box-action-icon--danger">
            <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
              <path d="M3.5 4.5h9M6.5 2.5h3M5 4.5l.5 9h5l.5-9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </svg>
          </div>
          <div class="demo-list-box-user">
            <Label>Delete file</Label>
            <Description>Move to trash</Description>
          </div>
          <Kbd class="demo-list-box-kbd" :keys="['D', 'D']" variant="light">D</Kbd>
        </ListBoxItem>
      </ListBoxSection>
    </ListBox>
  </Surface>
</template>

<script setup lang="ts">
import { Description, Header, Kbd, Label, ListBox, ListBoxItem, ListBoxSection, Separator, Surface } from '@misaki-mei/heroui-vue'

const handleAction = (key: string | number) => {
  window.alert(`Selected item: ${key}`)
}
</script>

<style lang="less">
.demo-list-box-surface {
  width: 16rem;
  border-radius: 1.5rem;
  box-shadow: var(--shadow-surface);
}

.demo-list-box-actions {
  width: 100%;
  padding: 0.5rem;
}

.demo-list-box-user {
  display: flex;
  flex-direction: column;
}

.demo-list-box-action-icon {
  display: flex;
  height: 2rem;
  align-items: flex-start;
  justify-content: center;
  padding-top: 0.0625rem;
  color: var(--color-muted);

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
}

.demo-list-box-action-icon--danger {
  color: var(--color-danger);
}

.demo-list-box-kbd {
  margin-inline-start: auto;
}
</style>
