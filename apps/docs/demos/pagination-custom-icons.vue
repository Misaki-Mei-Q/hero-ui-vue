<template>
  <Pagination class="justify-center">
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious :is-disabled="page === 1" @press="page -= 1">
          <PaginationPreviousIcon>
            <svg fill="none" viewBox="0 0 20 20">
              <path d="M12.5 5 7.5 10l5 5M8 10h8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
            </svg>
          </PaginationPreviousIcon>
          <span>Back</span>
        </PaginationPrevious>
      </PaginationItem>
      <PaginationItem v-for="item in totalPages" :key="item">
        <PaginationLink :is-active="item === page" @press="page = item">
          {{ item }}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext :is-disabled="page === totalPages" @press="page += 1">
          <span>Forward</span>
          <PaginationNextIcon>
            <svg fill="none" viewBox="0 0 20 20">
              <path d="m7.5 5 5 5-5 5M12 10H4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
            </svg>
          </PaginationNextIcon>
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
} from '@misaki-mei-q/heroui-vue'

const page = ref(1)
const totalPages = 3
</script>
