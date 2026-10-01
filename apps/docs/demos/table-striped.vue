<script setup lang="ts">
import { Table, TableColumn, TableRow, TableCell } from '@misaki-mei/heroui-vue'

interface Project {
  id: number
  name: string
  status: 'active' | 'archived'
  members: number
}

const projects: Project[] = [
  { id: 1, name: 'HeroUI Vue', status: 'active', members: 8 },
  { id: 2, name: 'Marketing Site', status: 'active', members: 4 },
  { id: 3, name: 'Legacy CMS', status: 'archived', members: 0 },
]
</script>

<template>
  <Table :striped="true" :hoverable="true">
    <template #header>
      <tr>
        <TableColumn>Project</TableColumn>
        <TableColumn>Status</TableColumn>
        <TableColumn>Members</TableColumn>
      </tr>
    </template>

    <TableRow v-for="project in projects" :key="project.id">
      <TableCell>{{ project.name }}</TableCell>
      <TableCell>{{ project.status }}</TableCell>
      <TableCell>{{ project.members }}</TableCell>
    </TableRow>
  </Table>
</template>