<template>
  <div class="flex flex-wrap justify-center gap-3">
    <Switch default-selected size="lg">
      <template #icon="{ checked }">
        <svg v-if="checked" class="size-3 text-inherit opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m20 6-11 11-5-5" />
        </svg>
        <svg v-else class="size-3 text-inherit opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2v10" />
          <path d="M18.4 6.6a9 9 0 1 1-12.8 0" />
        </svg>
      </template>
    </Switch>

    <Switch default-selected size="lg">
      <template #icon="{ checked }">
        <svg v-if="checked" class="size-3 text-inherit opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
        <svg v-else class="size-3 text-inherit opacity-70" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 9 9 0 1 0 21 14.5Z" />
        </svg>
      </template>
    </Switch>

    <Switch default-selected size="lg" style="--switch-control-bg-checked: rgb(239 68 68 / 80%); --switch-control-bg-checked-hover: rgb(220 38 38 / 85%);">
      <template #icon="{ checked }">
        <svg v-if="checked" class="size-3 text-inherit opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 3l18 18" />
          <path d="M9 9v3a3 3 0 0 0 5.1 2.1" />
          <path d="M15 9.3V5a3 3 0 0 0-5.6-1.5" />
          <path d="M19 10v2a7 7 0 0 1-.8 3.3" />
          <path d="M5 10v2a7 7 0 0 0 10.5 6.1" />
        </svg>
        <svg v-else class="size-3 text-inherit opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <path d="M12 19v3" />
        </svg>
      </template>
    </Switch>

    <Switch default-selected size="lg" style="--switch-control-bg-checked: rgb(168 85 247 / 80%); --switch-control-bg-checked-hover: rgb(147 51 234 / 85%);">
      <template #icon="{ checked }">
        <svg v-if="checked" class="size-3 text-inherit opacity-100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
          <path d="M10 21h4" />
        </svg>
        <svg v-else class="size-3 text-inherit opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m2 2 20 20" />
          <path d="M8.7 4.7A6 6 0 0 1 18 8c0 7 3 7 3 9H11" />
          <path d="M6 8c0 2.2-.3 3.7-.8 4.8" />
          <path d="M10 21h4" />
        </svg>
      </template>
    </Switch>

    <Switch default-selected size="lg" style="--switch-control-bg-checked: rgb(59 130 246 / 80%); --switch-control-bg-checked-hover: rgb(37 99 235 / 85%);">
      <template #icon="{ checked }">
        <svg v-if="checked" class="size-3 text-inherit opacity-100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 5 6 9H2v6h4l5 4V5Z" />
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 5.5a9 9 0 0 1 0 13" />
        </svg>
        <svg v-else class="size-3 text-inherit opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M11 5 6 9H2v6h4l5 4V5Z" />
          <path d="m22 9-6 6" />
          <path d="m16 9 6 6" />
        </svg>
      </template>
    </Switch>
  </div>
</template>

<script setup>
import { Switch } from '@misaki-mei/heroui-vue'
</script>
