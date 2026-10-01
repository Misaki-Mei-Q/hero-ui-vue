<template>
  <div class="demo-card-images-shell">
    <div class="demo-card-images-grid">
      <Card class="demo-card-feature">
        <div class="demo-card-images-media-frame">
          <img
            alt="Cherries"
            class="demo-card-images-image"
            loading="lazy"
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
          />
        </div>
        <div class="demo-card-feature-body">
          <CardHeader class="demo-card-images-header">
            <CardTitle class="demo-card-images-title-offset">Become an ACME Creator!</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet faucibus etiam.
            </CardDescription>
            <CloseButton aria-label="Close banner" class="demo-card-images-close" />
          </CardHeader>
          <CardFooter class="demo-card-images-footer-split">
            <div class="demo-card-images-meta">
              <span class="demo-card-images-meta-title">Only 10 spots</span>
              <span class="demo-card-images-meta-muted">Submission ends Oct 10.</span>
            </div>
            <Button class="demo-card-action">Apply Now</Button>
          </CardFooter>
        </div>
      </Card>

      <div class="demo-card-images-row">
        <div class="demo-card-left-column">
          <Card class="demo-card-payment">
            <div class="demo-card-close-wrap">
              <CloseButton aria-label="Close notification" />
            </div>
            <CardHeader class="demo-card-payment-header">
              <DollarIcon class="demo-card-payment-icon" />
              <div class="demo-card-payment-copy">
                <span class="demo-card-eyebrow">Payment</span>
                <CardTitle class="demo-card-images-title-offset demo-card-payment-title">
                  You can now withdraw on crypto
                </CardTitle>
                <CardDescription class="demo-card-payment-description">
                  Add your wallet in settings to withdraw
                </CardDescription>
              </div>
            </CardHeader>
            <CardFooter>
              <Link href="#" rel="noopener noreferrer" aria-label="Go to settings">
                Go to settings
                <LinkIcon aria-hidden="true" />
              </Link>
            </CardFooter>
          </Card>

          <div class="demo-card-community-grid">
            <Card
              v-for="community in communities"
              :key="community.title"
              class="demo-card-community"
            >
              <CardHeader>
                <Avatar class="demo-card-community-avatar">
                  <AvatarImage :alt="community.title" :src="community.image" />
                  <AvatarFallback>{{ community.fallback }}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent class="demo-card-community-content">
                <p class="demo-card-community-title">{{ community.title }}</p>
                <p class="demo-card-community-members">{{ community.members }} members</p>
              </CardContent>
              <CardFooter class="demo-card-author">
                <Avatar class="demo-card-images-author-avatar">
                  <AvatarImage :alt="`${community.author} avatar`" :src="community.authorAvatar" />
                  <AvatarFallback>{{ community.author.slice(0, 1) }}</AvatarFallback>
                </Avatar>
                <p class="demo-card-author-text">By {{ community.author }}</p>
              </CardFooter>
            </Card>
          </div>
        </div>

        <Card class="demo-card-neo demo-card-neo-medium">
          <img
            alt="NEO Home Robot"
            aria-hidden="true"
            class="demo-card-cover-image"
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/neo2.jpeg"
          />
          <CardHeader class="demo-card-cover-header">
            <CardTitle class="demo-card-cover-title">NEO</CardTitle>
            <CardDescription class="demo-card-cover-description">Home Robot</CardDescription>
          </CardHeader>
          <CardFooter class="demo-card-cover-footer">
            <div>
              <div class="demo-card-cover-label">Available soon</div>
              <div class="demo-card-cover-muted">Get notified</div>
            </div>
            <Button class="demo-card-light-button" size="sm" variant="tertiary">Notify me</Button>
          </CardFooter>
        </Card>
      </div>

      <div class="demo-card-images-row">
        <Card class="demo-card-neo demo-card-neo-large">
          <img
            alt="NEO Home Robot"
            aria-hidden="true"
            class="demo-card-cover-image"
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/neo1.jpeg"
          />
          <CardFooter class="demo-card-cover-footer demo-card-cover-footer-bottom">
            <div>
              <div class="demo-card-hero-title">NEO</div>
              <div class="demo-card-hero-price">$499/m</div>
            </div>
            <Button class="demo-card-light-button" size="sm" variant="tertiary">Get now</Button>
          </CardFooter>
        </Card>

        <div class="demo-card-events">
          <Card
            v-for="event in events"
            :key="event.title"
            class="demo-card-event"
            variant="transparent"
          >
            <img
              :alt="event.alt"
              class="demo-card-event-image"
              loading="lazy"
              :src="event.image"
            />
            <div class="demo-card-event-copy">
              <CardTitle class="demo-card-event-title">{{ event.title }}</CardTitle>
              <CardDescription class="demo-card-event-time">{{ event.time }}</CardDescription>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CloseButton,
  Link,
  LinkIcon,
} from '@misaki-mei/heroui-vue'

const communities = [
  {
    title: 'Indie Hackers',
    members: 148,
    author: 'John',
    fallback: 'JK',
    image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg',
    authorAvatar: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg',
  },
  {
    title: 'AI Builders',
    members: 362,
    author: 'Martha',
    fallback: 'AB',
    image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg',
    authorAvatar: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg',
  },
]

const events = [
  {
    title: 'Bridging the Future',
    time: 'Today, 6:30 PM',
    alt: 'Futuristic Robot',
    image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/robot1.jpeg',
  },
  {
    title: 'Avocado Hackathon',
    time: 'Wed, 4:30 PM',
    alt: 'Avocado',
    image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/avocado.jpeg',
  },
  {
    title: 'Sound Electro | Beyond art',
    time: 'Fri, 8:00 PM',
    alt: 'Sound Electro event',
    image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/oranges.jpeg',
  },
]

const DollarIcon = defineComponent({
  setup() {
    return () =>
      h(
        'svg',
        {
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2.25',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'aria-label': 'Dollar sign icon',
          role: 'img',
        },
        [
          h('circle', { cx: '12', cy: '12', r: '10' }),
          h('path', { d: 'M12 6v12' }),
          h('path', { d: 'M16 8.5H10.5a2.5 2.5 0 0 0 0 5H13.5a2.5 2.5 0 0 1 0 5H8' }),
        ],
      )
  },
})
</script>

<style lang="less">
.demo-card-images-shell {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.demo-card-images-grid {
  display: grid;
  width: 100%;
  max-width: 42rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem;
  padding: 1rem;
  text-align: left;
}

.demo-card-feature {
  grid-column: span 12 / span 12;
  min-height: 9.5rem;
  flex-direction: column;
}

.demo-card-feature-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.75rem;
}

.demo-card-images-media-frame {
  position: relative;
  width: 100%;
  height: 8.75rem;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 1rem;
}

.demo-card-images-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.25);
  object-fit: cover;
  user-select: none;
  pointer-events: none;
}

.demo-card-images-header {
  gap: 0.25rem;
}

.demo-card-images-title-offset {
  padding-right: 2rem;
}

.demo-card-images-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
}

.demo-card-close-wrap {
  position: absolute;
  z-index: 10;
  top: 0.75rem;
  right: 0.75rem;
}

.demo-card-images-footer-split {
  width: 100%;
  margin-top: auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}

.demo-card-action {
  width: 100%;
}

.demo-card-images-meta {
  display: flex;
  flex-direction: column;
}

.demo-card-images-meta-title,
.demo-card-cover-label,
.demo-card-community-title,
.demo-card-hero-title {
  color: var(--color-foreground);
  font-weight: 500;
}

.demo-card-images-meta-title {
  font-size: 0.875rem;
}

.demo-card-images-meta-muted,
.demo-card-cover-muted,
.demo-card-community-members,
.demo-card-author-text,
.demo-card-event-time {
  color: var(--color-muted-foreground);
  font-size: 0.75rem;
}

.demo-card-images-row {
  display: grid;
  grid-column: span 12 / span 12;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem;
}

.demo-card-left-column {
  display: grid;
  grid-column: span 12 / span 12;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem;
}

.demo-card-payment {
  grid-column: span 12 / span 12;
}

.demo-card-payment-header {
  gap: 0.75rem;
}

.demo-card-payment-icon {
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  color: var(--color-foreground);
}

.demo-card-payment-copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 0.25rem;
}

.demo-card-eyebrow {
  color: var(--color-muted-foreground);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
}

.demo-card-payment-title {
  font-size: 0.875rem;
}

.demo-card-payment-description {
  font-size: 0.75rem;
}

.demo-card-community-grid {
  display: grid;
  grid-column: span 12 / span 12;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem;
}

.demo-card-community {
  grid-column: span 12 / span 12;
  gap: 0.5rem;
}

.demo-card-community-avatar {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.75rem;
}

.demo-card-community-content {
  margin-top: 0.25rem;
}

.demo-card-community-title {
  font-size: 0.875rem;
  line-height: 1rem;
}

.demo-card-author {
  align-items: center;
  gap: 0.5rem;
}

.demo-card-images-author-avatar {
  width: 1rem;
  height: 1rem;
}

.demo-card-neo {
  position: relative;
  grid-column: span 12 / span 12;
  overflow: hidden;
  border-radius: 1.5rem;
}

.demo-card-neo-medium {
  min-height: 12.5rem;
}

.demo-card-neo-large {
  height: 15.625rem;
}

.demo-card-cover-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.demo-card-cover-header,
.demo-card-cover-footer {
  position: relative;
  z-index: 1;
}

.demo-card-cover-title {
  color: rgb(0 0 0 / 70%);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.025em;
}

.demo-card-cover-description {
  color: rgb(0 0 0 / 50%);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
}

.demo-card-cover-footer {
  margin-top: auto;
  align-items: center;
  justify-content: space-between;
}

.demo-card-cover-footer-bottom {
  align-items: flex-end;
}

.demo-card-cover-label {
  color: #000;
  font-size: 0.875rem;
}

.demo-card-cover-muted {
  color: rgb(0 0 0 / 60%);
}

.demo-card-light-button {
  background: #fff;
  color: #000;
}

.demo-card-hero-title {
  color: #000;
  font-size: 1rem;
}

.demo-card-hero-price {
  color: rgb(0 0 0 / 50%);
  font-size: 0.75rem;
  font-weight: 500;
}

.demo-card-events {
  display: flex;
  grid-column: span 12 / span 12;
  flex-direction: column;
  gap: 0.5rem;
}

.demo-card-event {
  flex-direction: row;
  gap: 0.75rem;
  padding: 0.25rem;
}

.demo-card-event-image {
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
  border-radius: 0.75rem;
  object-fit: cover;
  user-select: none;
}

.demo-card-event-copy {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
}

.demo-card-event-title {
  font-size: 0.875rem;
}

@media (min-width: 640px) {
  .demo-card-feature {
    flex-direction: row;
  }

  .demo-card-images-media-frame {
    width: 7.5rem;
    height: 7.5rem;
  }

  .demo-card-images-footer-split {
    flex-direction: row;
    align-items: center;
  }

  .demo-card-action {
    width: auto;
  }

  .demo-card-community {
    grid-column: span 6 / span 6;
  }

  .demo-card-event-image {
    width: 5rem;
    height: 5rem;
  }

  .demo-card-neo-large {
    height: 18.75rem;
  }

  .demo-card-hero-title {
    font-size: 1.125rem;
  }

  .demo-card-hero-price {
    font-size: 0.875rem;
  }
}

@media (min-width: 768px) {
  .demo-card-neo-large {
    grid-column: span 8 / span 8;
    height: 21.875rem;
  }

  .demo-card-events {
    grid-column: span 4 / span 4;
    justify-content: space-between;
    gap: 0;
    padding: 0.5rem 0;
  }
}

@media (min-width: 1024px) {
  .demo-card-left-column,
  .demo-card-neo-medium {
    grid-column: span 6 / span 6;
  }
}
</style>
