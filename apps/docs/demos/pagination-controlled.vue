<template>
  <Pagination>
    <PaginationSummary>
      Showing {{ startItem }}-{{ endItem }} of {{ totalItems }} results
    </PaginationSummary>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious :is-disabled="page === 1" @press="page -= 1">
          <PaginationPreviousIcon />
          <span>Previous</span>
        </PaginationPrevious>
      </PaginationItem>
      <PaginationItem v-for="(item, index) in pageItems" :key="`${item}-${index}`">
        <PaginationEllipsis v-if="item === 'ellipsis'" />
        <PaginationLink v-else :is-active="item === page" @press="page = item">
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
import { computed, ref } from 'vue'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationNextIcon,
  PaginationPrevious,
  PaginationPreviousIcon,
  PaginationSummary,
} from '@misaki-mei-q/heroui-vue'

const page = ref(1)
const totalPages = 12
const itemsPerPage = 10
const totalItems = 120

const startItem = computed(() => (page.value - 1) * itemsPerPage + 1)
const endItem = computed(() => Math.min(page.value * itemsPerPage, totalItems))
const pageItems = computed(() => {
  const pages: Array<number | 'ellipsis'> = []

  if (totalPages <= 7) {
    for (let item = 1; item <= totalPages; item += 1) pages.push(item)
    return pages
  }

  pages.push(1)
  if (page.value > 3) pages.push('ellipsis')
  for (let item = Math.max(2, page.value - 1); item <= Math.min(totalPages - 1, page.value + 1); item += 1) {
    pages.push(item)
  }
  if (page.value < totalPages - 2) pages.push('ellipsis')
  pages.push(totalPages)
  return pages
})
</script>
