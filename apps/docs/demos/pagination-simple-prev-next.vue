<template>
  <Pagination class="w-full">
    <PaginationSummary>
      {{ startItem }} to {{ endItem }} of {{ totalItems }} invoices
    </PaginationSummary>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious :is-disabled="page === 1" @press="page -= 1">
          <PaginationPreviousIcon />
          <span>Prev</span>
        </PaginationPrevious>
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
import { computed, ref } from 'vue'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationNextIcon,
  PaginationPrevious,
  PaginationPreviousIcon,
  PaginationSummary,
} from '@misaki-mei/heroui-vue'

const page = ref(1)
const totalPages = 10
const itemsPerPage = 5
const totalItems = 50
const startItem = computed(() => (page.value - 1) * itemsPerPage + 1)
const endItem = computed(() => Math.min(page.value * itemsPerPage, totalItems))
</script>
