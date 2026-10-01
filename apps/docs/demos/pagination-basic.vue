<template>
  <Pagination class="justify-center">
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious :is-disabled="page === 1" @press="page -= 1">
          <PaginationPreviousIcon />
          <span>Previous</span>
        </PaginationPrevious>
      </PaginationItem>
      <PaginationItem v-for="item in totalPages" :key="item">
        <PaginationLink :is-active="item === page" @press="page = item">
          {{ item }}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext :is-disabled="page === totalPages" @press="page += 1">
          <span>Next</span>
          <PaginationNextIcon />
        </PaginationNext>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationNextIcon,
  PaginationPrevious,
  PaginationPreviousIcon,
} from '@misaki-mei/heroui-vue'

const page = ref(1)
const totalPages = 3
</script>
