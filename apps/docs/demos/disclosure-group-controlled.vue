<template>
  <div class="demo-disclosure-group-wrap">
    <div class="demo-disclosure-group-card">
      <div class="demo-disclosure-group-toolbar">
        <h3 class="demo-disclosure-group-title">HeroUI Native</h3>
        <div class="demo-disclosure-group-actions">
          <Button
            aria-label="Previous disclosure"
            class="demo-disclosure-group-nav-button"
            :is-disabled="isPrevDisabled"
            is-icon-only
            size="sm"
            variant="secondary"
            @click="onPrevious"
          >
            <svg
              aria-hidden="true"
              class="demo-disclosure-group-nav-icon"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="m5 12 5-5 5 5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
              />
            </svg>
          </Button>
          <Button
            aria-label="Next disclosure"
            class="demo-disclosure-group-nav-button"
            :is-disabled="isNextDisabled"
            is-icon-only
            size="sm"
            variant="secondary"
            @click="onNext"
          >
            <svg
              aria-hidden="true"
              class="demo-disclosure-group-nav-icon"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="m5 8 5 5 5-5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
              />
            </svg>
          </Button>
        </div>
      </div>

      <DisclosureGroup
        :expanded-keys="expandedKeys"
        class="demo-disclosure-group-list"
        @expanded-change="setExpandedKeys"
      >
        <Disclosure id="preview" aria-label="Preview HeroUI Native">
          <DisclosureHeading class="demo-disclosure-group-heading">
            <DisclosureTrigger class="demo-disclosure-group-trigger button button--tertiary">
              <span class="demo-disclosure-group-trigger-content">
                <svg
                  aria-hidden="true"
                  class="demo-disclosure-group-icon"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M3.75 3.75h4.5v4.5h-4.5zM11.75 3.75h4.5v4.5h-4.5zM3.75 11.75h4.5v4.5h-4.5z"
                    stroke="currentColor"
                    stroke-width="1.6"
                  />
                  <path
                    d="M12 12h1.5v1.5H16V16h-4v-4Z"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="1.6"
                  />
                </svg>
                Preview HeroUI Native
              </span>
              <DisclosureIndicator class="demo-disclosure-group-indicator" />
            </DisclosureTrigger>
          </DisclosureHeading>
          <DisclosureContent>
            <DisclosureBody class="demo-disclosure-group-body">
              <p class="demo-disclosure-group-text">
                Scan this QR code with your camera app to preview the HeroUI native components.
              </p>
              <img
                alt="Expo Go QR Code"
                class="demo-disclosure-group-qr"
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/images/qr-code-native.png"
              />
              <p class="demo-disclosure-group-text">Expo must be installed on your device.</p>
              <Button class="demo-disclosure-group-action" variant="primary">
                <svg
                  aria-hidden="true"
                  class="demo-disclosure-group-expo-icon"
                  fill="currentColor"
                  viewBox="0 0 256 231"
                >
                  <path
                    d="M121.309 84.673c2.094-3.086 4.385-3.478 6.244-3.478 1.86 0 4.957.392 7.051 3.478 16.502 22.667 43.742 67.819 63.835 101.126 13.104 21.72 23.168 38.403 25.233 40.526 7.751 7.97 18.382 3.003 24.559-6.037 6.081-8.9 7.77-15.15 7.77-21.817 0-4.54-88.106-168.4-96.979-182.039C150.49 3.314 147.71 0 133.106 0h-10.93c-14.56 0-16.665 3.314-25.198 16.432C88.106 30.072 0 193.93 0 198.472c0 6.666 1.688 12.916 7.77 21.816 6.177 9.04 16.808 14.007 24.559 6.037 2.065-2.123 12.13-18.806 25.233-40.526 20.093-33.307 47.245-78.46 63.747-101.126Z"
                  />
                </svg>
                Preview on Expo Go
              </Button>
            </DisclosureBody>
          </DisclosureContent>
        </Disclosure>

        <Separator class="demo-disclosure-group-separator" />

        <Disclosure id="download" aria-label="Download HeroUI Native">
          <DisclosureHeading class="demo-disclosure-group-heading">
            <DisclosureTrigger class="demo-disclosure-group-trigger button button--tertiary">
              <span class="demo-disclosure-group-trigger-content">
                <svg
                  aria-hidden="true"
                  class="demo-disclosure-group-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M13.57 2.21c.04.38-.1.97-.4 1.47-.32.54-.88.99-1.42.95-.06-.5.15-1.04.45-1.44.34-.45.92-.85 1.37-.98Zm2.17 12.9c-.34.79-.52 1.13-.96 1.83-.62.96-1.5 2.15-2.58 2.16-.96.01-1.2-.63-2.5-.62-1.3.01-1.57.63-2.53.62-1.08-.01-1.9-1.08-2.52-2.04-1.73-2.68-1.91-5.82-.84-7.49.76-1.18 1.96-1.87 3.1-1.87 1.16 0 1.89.64 2.85.64.93 0 1.5-.64 2.84-.64 1.01 0 2.09.55 2.84 1.51-2.49 1.36-2.08 4.91.3 5.9Z"
                  />
                </svg>
                Download HeroUI Native
              </span>
              <DisclosureIndicator class="demo-disclosure-group-indicator" />
            </DisclosureTrigger>
          </DisclosureHeading>
          <DisclosureContent>
            <DisclosureBody class="demo-disclosure-group-body">
              <p class="demo-disclosure-group-text">
                Scan this QR code with your camera app to preview the HeroUI native components.
              </p>
              <img
                alt="Expo Go QR Code"
                class="demo-disclosure-group-qr"
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/images/qr-code-native.png"
              />
              <p class="demo-disclosure-group-text">Expo must be installed on your device.</p>
              <Button class="demo-disclosure-group-action" variant="primary">
                <svg
                  aria-hidden="true"
                  class="demo-disclosure-group-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M13.57 2.21c.04.38-.1.97-.4 1.47-.32.54-.88.99-1.42.95-.06-.5.15-1.04.45-1.44.34-.45.92-.85 1.37-.98Zm2.17 12.9c-.34.79-.52 1.13-.96 1.83-.62.96-1.5 2.15-2.58 2.16-.96.01-1.2-.63-2.5-.62-1.3.01-1.57.63-2.53.62-1.08-.01-1.9-1.08-2.52-2.04-1.73-2.68-1.91-5.82-.84-7.49.76-1.18 1.96-1.87 3.1-1.87 1.16 0 1.89.64 2.85.64.93 0 1.5-.64 2.84-.64 1.01 0 2.09.55 2.84 1.51-2.49 1.36-2.08 4.91.3 5.9Z"
                  />
                </svg>
                Download on App Store
              </Button>
            </DisclosureBody>
          </DisclosureContent>
        </Disclosure>
      </DisclosureGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Button,
  Disclosure,
  DisclosureBody,
  DisclosureContent,
  DisclosureGroup,
  DisclosureHeading,
  DisclosureIndicator,
  DisclosureTrigger,
  Separator,
  useDisclosureGroupNavigation,
} from '@misaki-mei/heroui-vue'

const expandedKeys = ref<Set<string | number>>(new Set(['preview']))
const itemIds = ['preview', 'download']

const setExpandedKeys = (keys: Set<string | number>) => {
  expandedKeys.value = keys
}

const { isNextDisabled, isPrevDisabled, onNext, onPrevious } = useDisclosureGroupNavigation({
  expandedKeys,
  itemIds,
  onExpandedChange: setExpandedKeys,
})
</script>

<style lang="less">
.demo-disclosure-group-wrap {
  width: 100%;
  max-width: 28rem;
}

.demo-disclosure-group-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1.5rem;
  background: transparent;
  padding: 1rem;
}

.demo-disclosure-group-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.demo-disclosure-group-card .demo-disclosure-group-title {
  margin: 0;
  color: var(--color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.3;
}

.demo-disclosure-group-actions {
  display: inline-flex;
  gap: 0.5rem;
}

.demo-disclosure-group-nav-button {
  border-radius: 999px;
}

.demo-disclosure-group-nav-icon {
  display: block;
  width: 1rem;
  height: 1rem;
}

.demo-disclosure-group-list {
  display: flex;
  flex-direction: column;
}

.demo-disclosure-group-card .demo-disclosure-group-heading {
  margin: 0;
}

.demo-disclosure-group-trigger {
  width: 100%;
  justify-content: space-between;
  border: 0;
  --button-bg: transparent;
  --button-bg-hover: var(--color-default-hover);
  --button-bg-pressed: var(--color-default-hover);
}

.demo-disclosure-group-trigger[data-expanded='true'] {
  --button-bg: var(--color-default);
  --button-bg-hover: var(--color-default-hover);
  --button-bg-pressed: var(--color-default-hover);
  --button-fg: var(--color-accent-soft-foreground);
}

.demo-disclosure-group-trigger-content {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: 0.5rem;
}

.demo-disclosure-group-icon {
  display: block;
  width: 1rem;
  height: 1rem;
  flex: 0 0 auto;
}

.demo-disclosure-group-expo-icon {
  display: block;
  width: 1.11rem;
  height: 1rem;
  flex: 0 0 auto;
}

.demo-disclosure-group-indicator {
  color: var(--color-muted-foreground);
}

.demo-disclosure-group-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0.5rem;
  padding: 1rem;
  text-align: center;
}

.demo-disclosure-group-card .demo-disclosure-group-text {
  margin: 0;
  color: var(--color-muted-foreground);
  font-size: 0.875rem;
  line-height: 1.4;
}

.demo-disclosure-group-qr {
  aspect-ratio: 1;
  width: 100%;
  max-width: 13.5rem;
  object-fit: cover;
}

.demo-disclosure-group-action {
  margin-top: 1rem;
}

.demo-disclosure-group-separator {
  margin: 0.5rem 0;
}
</style>
