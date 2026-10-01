<template>
  <div class="demo-disclosure-wrap">
    <Disclosure v-model:expanded="expanded">
      <DisclosureHeading class="demo-disclosure-heading">
        <DisclosureTrigger class="demo-disclosure-trigger">
          <svg aria-hidden="true" class="demo-disclosure-icon" fill="none" viewBox="0 0 20 20">
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
          <DisclosureIndicator />
        </DisclosureTrigger>
      </DisclosureHeading>

      <DisclosureContent>
        <DisclosureBody class="demo-disclosure-body">
          <p class="demo-disclosure-text">
            Scan this QR code with your camera app to preview the HeroUI native components.
          </p>
          <img
            alt="Expo Go QR Code"
            class="demo-disclosure-qr"
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/images/qr-code-native.png"
          />
          <p class="demo-disclosure-text">Expo must be installed on your device.</p>
          <Button class="demo-disclosure-app-button" variant="primary">
            <svg
              aria-hidden="true"
              class="demo-disclosure-icon"
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Button,
  Disclosure,
  DisclosureBody,
  DisclosureContent,
  DisclosureHeading,
  DisclosureIndicator,
  DisclosureTrigger,
} from '@misaki-mei/heroui-vue'

const expanded = ref(true)
</script>

<style lang="less">
.demo-disclosure-wrap {
  width: 100%;
  max-width: 28rem;
  text-align: center;
}

.demo-disclosure-heading {
  display: flex;
  justify-content: center;
  margin: 0;
}

.demo-disclosure-trigger {
  display: inline-flex;
  box-sizing: border-box;
  height: calc(var(--spacing) * 9);
  min-height: calc(var(--spacing) * 9);
  width: fit-content;
  align-items: center;
  gap: 0.5rem;
  border: 0;
  border-radius: 999px;
  background: var(--color-default);
  color: var(--color-accent-soft-foreground);
  padding: 0 1rem;
  font: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  transition:
    background-color 180ms ease,
    transform 180ms ease;
}

.demo-disclosure-trigger:hover,
.demo-disclosure-trigger[data-hovered='true'] {
  background: var(--color-default-hover);
}

.demo-disclosure-trigger[data-pressed='true'] {
  transform: scale(0.98);
}

.demo-disclosure-icon {
  width: 1rem;
  height: 1rem;
  flex: 0 0 auto;
  display: block;
}

.demo-disclosure-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.5rem;
  background: var(--color-surface);
  background-clip: padding-box;
  box-shadow: none;
  margin-top: 0.375rem;
  overflow: hidden;
  padding: 1rem;
  text-align: center;
  gap: 0;
}

.demo-disclosure-text {
  margin: 0;
  color: var(--color-muted-foreground);
  font-size: 0.875rem;
  line-height: 1.4;
}

.demo-disclosure-qr {
  aspect-ratio: 1;
  width: min(12.5rem, 100%);
  object-fit: cover;
}

.demo-disclosure-app-button {
  margin-top: 0.75rem;
}
</style>
