<template>
  <div class="w-full max-w-2xs overflow-x-auto sm:max-w-full">
    <Pagination class="justify-center">
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
  </div>
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
} from '@misaki-mei-q/heroui-vue'

const page = ref(1)
const totalPages = 12

const pageItems = computed(() => {
  const pages: Array<number | 'ellipsis'> = [1]

  if (page.value > 3) pages.push('ellipsis')

  const start = Math.max(2, page.value - 1)
  const end = Math.min(totalPages - 1, page.value + 1)

  for (let item = start; item <= end; item += 1) {
    pages.push(item)
  }

  if (page.value < totalPages - 2) pages.push('ellipsis')
  pages.push(totalPages)

  return pages
})
</script>
