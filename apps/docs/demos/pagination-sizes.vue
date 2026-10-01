<template>
  <div class="flex flex-col gap-6">
    <div v-for="size in sizes" :key="size" class="flex flex-col gap-2">
      <span class="text-xs font-medium text-muted capitalize">{{ size }}</span>
      <Pagination class="justify-center" :size="size">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious :is-disabled="pages[size] === 1" @press="pages[size] -= 1">
              <PaginationPreviousIcon />
              <span>Previous</span>
            </PaginationPrevious>
          </PaginationItem>
          <PaginationItem v-for="item in totalPages" :key="item">
            <PaginationLink :is-active="item === pages[size]" @press="pages[size] = item">
              {{ item }}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext :is-disabled="pages[size] === totalPages" @press="pages[size] += 1">
              <span>Next</span>
              <PaginationNextIcon />
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
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

const sizes = ['sm', 'md', 'lg'] as const
const totalPages = 3
const pages = reactive({ sm: 1, md: 1, lg: 1 })
</script>
