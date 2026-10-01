<template>
  <section class="apple-disclosure-showcase">
    <div class="apple-disclosure-showcase__stage">
      <div
        class="apple-disclosure-showcase__controls"
        :data-expanded="selectedId ? 'true' : undefined"
      >
        <Button
          aria-label="Previous disclosure"
          class="apple-disclosure-showcase__nav-button"
          :is-disabled="selectedIndex === 0"
          is-icon-only
          variant="secondary"
          @click="selectByOffset(-1)"
        >
          <svg aria-hidden="true" viewBox="0 0 36 36">
            <path
              d="m11 20c0-.3838.1465-.7676.4395-1.0605l5.5-5.5c.5854-.5859 1.5356-.5859 2.1211 0l5.5 5.5c.5859.5859.5859 1.5352 0 2.1211-.5854.5859-1.5356.5859-2.1211 0l-4.4395-4.4395-4.4395 4.4395c-.5854.5859-1.5356.5859-2.1211 0-.293-.293-.4395-.6768-.4395-1.0605z"
            />
          </svg>
        </Button>
        <Button
          aria-label="Next disclosure"
          class="apple-disclosure-showcase__nav-button"
          :is-disabled="selectedIndex === showcaseItems.length - 1"
          is-icon-only
          variant="secondary"
          @click="selectByOffset(1)"
        >
          <svg aria-hidden="true" viewBox="0 0 36 36">
            <path
              d="m19.0625 22.5597 5.5-5.5076c.5854-.5854.5825-1.5323-.0039-2.1157-.5869-.5835-1.5366-.5815-2.1211.0039l-4.4375 4.4438-4.4375-4.4438c-.5845-.5854-1.5342-.5874-2.1211-.0039-.2944.2922-.4414.676-.4414 1.0598 0 .3818.1455.7637.4375 1.0559l5.5 5.5076c.2813.2815.6636.4403 1.0625.4403s.7812-.1588 1.0625-.4403z"
            />
          </svg>
        </Button>
      </div>

      <div class="apple-disclosure-showcase__panel">
        <Disclosure
          v-for="item in showcaseItems"
          :key="item.id"
          :expanded="selectedId === item.id"
          @expanded-change="isExpanded => handleExpandedChange(item.id, isExpanded)"
        >
          <DisclosureHeading class="apple-disclosure-showcase__heading">
            <DisclosureTrigger
              class="apple-disclosure-showcase__trigger"
              :data-selected="selectedId === item.id ? 'true' : undefined"
            >
              <span class="apple-disclosure-showcase__trigger-content">
                <span
                  v-if="item.id === 'colors'"
                  class="apple-disclosure-showcase__swatch"
                  aria-hidden="true"
                />
                <svg
                  v-else
                  aria-hidden="true"
                  class="apple-disclosure-showcase__plus"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" fill="none" r="11.3" stroke="currentColor" />
                  <path
                    d="m16 11h-3v-3a1 1 0 0 0-2 0v3h-3a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2Z"
                    fill="currentColor"
                  />
                </svg>
                {{ item.label }}
              </span>
            </DisclosureTrigger>
          </DisclosureHeading>
          <DisclosureContent class="apple-disclosure-showcase__content">
            <DisclosureBody
              class="apple-disclosure-showcase__body"
              :data-expanded="selectedId === item.id ? 'true' : undefined"
            >
              <p :data-expanded="selectedId === item.id ? 'true' : undefined">
                <strong>{{ item.label }}</strong
                >. {{ item.content }}
              </p>
            </DisclosureBody>
          </DisclosureContent>
        </Disclosure>
      </div>
    </div>

    <img
      v-for="item in showcaseItems"
      :key="item.imgSrc"
      :alt="item.label"
      class="apple-disclosure-showcase__image"
      :data-selected="selectedId === item.id ? 'true' : undefined"
      :src="item.imgSrc"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Button,
  Disclosure,
  DisclosureBody,
  DisclosureContent,
  DisclosureHeading,
  DisclosureTrigger,
} from '@misaki-mei-q/heroui-vue'

const showcaseItems = [
  {
    content: 'Choose from three bold finishes. iPhone 17 Pro shown in Cosmic Orange.',
    id: 'colors',
    imgSrc:
      'https://www.apple.com/v/iphone-17-pro/a/images/overview/product-viewer/colors_orange__f2ug4x6ry8uq_large_2x.jpg',
    label: 'Colors',
  },
  {
    content:
      'Optimized for performance and battery. Aluminum alloy is remarkably light and has exceptional thermal conductivity.',
    id: 'aluminum',
    imgSrc:
      'https://www.apple.com/v/iphone-17-pro/a/images/overview/product-viewer/viewer_aluminum_endframe__fypyvk9kkg2m_large_2x.jpg',
    label: 'Aluminum unibody',
  },
  {
    content:
      'Deionized water sealed inside moves heat away from the A19 Pro chip, allowing for even higher sustained performance.',
    id: 'vapor-chamber',
    imgSrc:
      'https://www.apple.com/v/iphone-17-pro/a/images/overview/product-viewer/viewer_vapor_chamber_endframe__dst8qkmuys4m_large_2x.jpg',
    label: 'Vapor chamber',
  },
  {
    content:
      'Protects the back of iPhone 17 Pro, making it 4x more resistant to cracks. New Ceramic Shield 2 on the front has 3x better scratch resistance.',
    id: 'ceramic-shield',
    imgSrc:
      'https://www.apple.com/v/iphone-17-pro/a/images/overview/product-viewer/ceramic_shield__de0653vp43cm_large_2x.jpg',
    label: 'Ceramic shield',
  },
  {
    content:
      'Our best-ever 6.3-inch and 6.9-inch Super Retina XDR displays. Brighter. Better anti-reflection. ProMotion up to 120Hz.',
    id: 'immersive-pro-display',
    imgSrc:
      'https://www.apple.com/v/iphone-17-pro/a/images/overview/product-viewer/pro_display__c0jmzc5emcae_large_2x.jpg',
    label: 'Immersive pro display',
  },
  {
    content:
      'Instantly take a photo, record video, adjust settings, and more. So you never miss a moment.',
    id: 'camera-control',
    imgSrc:
      'https://www.apple.com/v/iphone-17-pro/a/images/overview/product-viewer/camera_control__cy5kilwa0kwi_large_2x.jpg',
    label: 'Camera control',
  },
  {
    content:
      'A customizable fast track to your favorite feature. Long press to launch the action you want: Silent mode, Translation, Shortcuts, and more.',
    id: 'action-button',
    imgSrc:
      'https://www.apple.com/v/iphone-17-pro/a/images/overview/product-viewer/viewer_action_button_startframe__bb2coc4lpj2a_large_2x.jpg',
    label: 'Action button',
  },
] as const

const selectedId = ref<(typeof showcaseItems)[number]['id']>('colors')
const selectedIndex = computed(() => showcaseItems.findIndex(item => item.id === selectedId.value))

const handleExpandedChange = (id: (typeof showcaseItems)[number]['id'], isExpanded: boolean) => {
  if (isExpanded) selectedId.value = id
}

const selectByOffset = (offset: number) => {
  const nextIndex = Math.min(Math.max(selectedIndex.value + offset, 0), showcaseItems.length - 1)
  selectedId.value = showcaseItems[nextIndex].id
}
</script>

<style lang="less">
.apple-disclosure-showcase {
  position: relative;
  min-height: min(760px, calc(100vh - 8rem));
  width: 100%;
  overflow: hidden;
  background: #000;
  color: #f5f5f7;
}

.apple-disclosure-showcase__stage {
  position: relative;
  z-index: 2;
  display: flex;
  min-height: inherit;
  width: min(48rem, 52vw);
  align-items: center;
  gap: 2rem;
  padding: 2rem 2rem 2rem clamp(2rem, 6vw, 5rem);
}

.apple-disclosure-showcase__controls {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 1.25rem;
  opacity: 0;
  transform: translateY(7.5rem) scale(0.5);
  transition:
    opacity 300ms var(--ease-out-quad),
    transform 300ms var(--ease-out-quad);
}

.apple-disclosure-showcase__controls[data-expanded='true'] {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.apple-disclosure-showcase__nav-button {
  border-radius: 999px;
  background: #1e1e20;
  color: #f5f5f7;
  transition: transform 250ms var(--ease-smooth);

  svg {
    width: 2rem;
    height: 2rem;
    fill: currentColor;
  }
}

.apple-disclosure-showcase__panel {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: min(28rem, 100%);
}

.apple-disclosure-showcase__heading {
  margin: 0;
}

.apple-disclosure-showcase__trigger {
  display: inline-flex;
  min-height: 3.5rem;
  width: 100%;
  align-items: center;
  border: 0;
  border-radius: 999px;
  background: #1e1e20;
  color: #f5f5f7;
  padding: 0 1.25rem;
  font: inherit;
  font-size: 1.0625rem;
  transition:
    background-color 400ms ease,
    transform 250ms ease;
}

.apple-disclosure-showcase__trigger:hover,
.apple-disclosure-showcase__trigger[data-hovered='true'],
.apple-disclosure-showcase__trigger[data-selected='true'] {
  background: #272729;
}

.apple-disclosure-showcase__trigger[data-pressed='true'] {
  transform: scale(0.98);
}

.apple-disclosure-showcase__trigger-content {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
}

.apple-disclosure-showcase__swatch {
  width: 1.5rem;
  height: 1.5rem;
  flex: 0 0 auto;
  border-radius: 0.5rem;
  background: #f77314;
  box-shadow: inset 0 -1px 0 rgb(255 255 255 / 50%);
}

.apple-disclosure-showcase__plus {
  width: 1.5rem;
  height: 1.5rem;
  flex: 0 0 auto;
}

.apple-disclosure-showcase__content {
  transition-duration: 420ms;
}

.apple-disclosure-showcase__body {
  max-width: 24rem;
  border-radius: 1rem;
  background: rgb(42 42 45 / 72%);
  padding: 1.75rem;
  margin: 0.75rem 0 0;
  text-align: left;
  backdrop-filter: blur(20px);

  p {
    margin: 0;
    color: #f5f5f7;
    font-size: 1.0625rem;
    font-weight: 300;
    line-height: 1.45;
    opacity: 0;
    transform: translateY(1.25rem);
    transition:
      opacity 1200ms ease-out,
      transform 800ms cubic-bezier(0.18, 0.89, 0.32, 1.27);
  }

  p[data-expanded='true'] {
    opacity: 1;
    transform: translateY(0);
  }

  strong {
    font-weight: 500;
  }
}

.apple-disclosure-showcase__image {
  position: absolute;
  z-index: 1;
  top: 50%;
  right: 10%;
  display: block;
  width: min(72rem, 70vw);
  transform: translate(10%, -50%) scale(1.5);
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 1000ms ease-out,
    transform 900ms var(--ease-out-quad);
}

.apple-disclosure-showcase__image[data-selected='true'] {
  transform: translate(0, -50%) scale(1.5);
  opacity: 1;
}

@media (max-width: 1100px) {
  .apple-disclosure-showcase__stage {
    width: min(100%, 35rem);
  }

  .apple-disclosure-showcase__image {
    right: -16rem;
    width: 62rem;
  }
}

@media (max-width: 760px) {
  .apple-disclosure-showcase {
    min-height: 760px;
  }

  .apple-disclosure-showcase__stage {
    width: 100%;
    align-items: flex-start;
    padding: 1rem;
  }

  .apple-disclosure-showcase__controls {
    display: none;
  }

  .apple-disclosure-showcase__panel {
    width: 100%;
  }

  .apple-disclosure-showcase__image {
    top: auto;
    right: -42%;
    bottom: -8rem;
    width: 52rem;
    transform: translate(10%, 0) scale(1);
  }

  .apple-disclosure-showcase__image[data-selected='true'] {
    transform: translate(0, 0) scale(1);
  }
}
</style>
