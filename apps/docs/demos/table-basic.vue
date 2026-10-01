<script setup lang="ts">
import { Table, TableColumn, TableRow, TableCell } from '@misaki-mei/heroui-vue'

interface User {
  id: number
  name: string
  email: string
  role: string
}

const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Editor' },
  { id: 3, name: 'Carol', email: 'carol@example.com', role: 'Viewer' },
]
</script>

<template>
  <Table>
    <template #header>
      <tr>
        <TableColumn>Name</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Role</TableColumn>
      </tr>
    </template>

    <TableRow v-for="user in users" :key="user.id">
      <TableCell>{{ user.name }}</TableCell>
      <TableCell>{{ user.email }}</TableCell>
      <TableCell>{{ user.role }}</TableCell>
    </TableRow>
  </Table>
</template>