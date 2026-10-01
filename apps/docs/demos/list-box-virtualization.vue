<template>
  <ListBox aria-label="Large user list" class="demo-list-box-virtualized" selection-mode="single">
    <ListBoxItem v-for="user in users" :id="user.id" :key="user.id" :text-value="user.name">
      <div class="demo-list-box-user">
        <Label>{{ user.name }}</Label>
        <Description>{{ user.email }}</Description>
      </div>
      <ListBoxItemIndicator />
    </ListBoxItem>
  </ListBox>
</template>

<script setup lang="ts">
import { Description, Label, ListBox, ListBoxItem, ListBoxItemIndicator } from '@misaki-mei-q/heroui-vue'

const firstNames = [
  'Emma',
  'Liam',
  'Olivia',
  'Noah',
  'Ava',
  'James',
  'Sophia',
  'Oliver',
  'Isabella',
  'Lucas',
  'Mia',
  'Ethan',
  'Charlotte',
  'Mason',
  'Amelia',
  'Logan',
  'Harper',
  'Alexander',
  'Ella',
  'Benjamin',
]
const lastNames = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Garcia',
  'Miller',
  'Davis',
  'Rodriguez',
  'Martinez',
  'Anderson',
  'Taylor',
  'Thomas',
  'Jackson',
  'White',
  'Harris',
  'Clark',
  'Lewis',
  'Robinson',
  'Walker',
]
const users = Array.from({ length: 1000 }, (_, index) => {
  const firstName = firstNames[index % firstNames.length]
  const lastName = lastNames[Math.floor(index / firstNames.length) % lastNames.length]
  const name = `${firstName} ${lastName}`

  return {
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@acme.com`,
    id: index + 1,
    name,
  }
})
</script>

<style lang="less">
.demo-list-box-virtualized {
  width: 18.75rem;
  height: 25rem;
  overflow-y: auto;
}

.demo-list-box-user {
  display: flex;
  flex-direction: column;
}
</style>
