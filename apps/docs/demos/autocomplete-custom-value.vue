<template>
  <Autocomplete
    v-model="selectedUser"
    class="demo-autocomplete-users"
    label="User"
    placeholder="Select a user"
    search-placeholder="Search users..."
    :items="users"
  >
    <template #value="{ item, label }">
      <span v-if="item" class="demo-autocomplete-users__value">
        <span
          class="demo-autocomplete-users__avatar demo-autocomplete-users__avatar--small"
          :style="{ background: String(item.color) }"
          aria-hidden="true"
        >
          {{ item.fallback }}
        </span>
        <span>{{ label }}</span>
      </span>
    </template>

    <template #item="{ item, selected }">
      <span
        class="demo-autocomplete-users__avatar"
        :style="{ background: String(item.color) }"
        aria-hidden="true"
      >
        {{ item.fallback }}
      </span>
      <span class="demo-autocomplete-users__details">
        <Label>{{ item.label }}</Label>
        <Description>{{ item.description }}</Description>
      </span>
      <span
        v-if="selected"
        class="list-box-item__indicator"
        data-slot="list-box-item-indicator"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-slot="list-box-item-indicator--checkmark"
        >
          <path d="M3.5 8.5L6.5 11.5L12.5 4.5" />
        </svg>
      </span>
    </template>
  </Autocomplete>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autocomplete, Description, Label } from '@misaki-mei/heroui-vue'

const selectedUser = ref<string | number | null>(null)

const users = [
  {
    color: '#3b82f6',
    description: 'bob@heroui.com',
    fallback: 'B',
    id: '1',
    label: 'Bob',
  },
  {
    color: '#22c55e',
    description: 'fred@heroui.com',
    fallback: 'F',
    id: '2',
    label: 'Fred',
  },
  {
    color: '#a855f7',
    description: 'martha@heroui.com',
    fallback: 'M',
    id: '3',
    label: 'Martha',
  },
  {
    color: '#ef4444',
    description: 'john@heroui.com',
    fallback: 'J',
    id: '4',
    label: 'John',
  },
  {
    color: '#f97316',
    description: 'jane@heroui.com',
    fallback: 'J',
    id: '5',
    label: 'Jane',
  },
]
</script>

<style lang="less">
.demo-autocomplete-users {
  width: 16rem;
}

.demo-autocomplete-users__value,
.demo-autocomplete-users__details {
  display: flex;
  min-width: 0;
}

.demo-autocomplete-users__value {
  align-items: center;
  gap: 0.5rem;
}

.demo-autocomplete-users__details {
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.demo-autocomplete-users__avatar {
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: #fff;
  font-size: 0.8125rem;
  font-weight: 600;
}

.demo-autocomplete-users__avatar--small {
  width: 1rem;
  height: 1rem;
  font-size: 0.625rem;
}
</style>
