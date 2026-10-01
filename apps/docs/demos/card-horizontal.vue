<template>
  <Card class="demo-card-horizontal">
    <div class="demo-card-media-frame">
      <img
        alt="Cherries"
        class="demo-card-image"
        loading="lazy"
        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
      />
    </div>
    <div class="demo-card-horizontal-inner">
      <CardHeader class="demo-card-header">
        <CardTitle class="demo-card-title-offset">Become an ACME Creator!</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet faucibus etiam.
        </CardDescription>
        <CloseButton aria-label="Close banner" class="demo-card-close" />
      </CardHeader>
      <CardFooter class="demo-card-footer-split">
        <div class="demo-card-meta">
          <span class="demo-card-meta-title">Only 10 spots</span>
          <span class="demo-card-meta-muted">Submission ends Oct 10.</span>
        </div>
        <Button>Apply Now</Button>
      </CardFooter>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { Button, Card, CardDescription, CardFooter, CardHeader, CardTitle, CloseButton } from '@misaki-mei-q/heroui-vue'
</script>

<style lang="less">
.demo-card-horizontal {
  width: 100%;
  max-width: 42rem;
  min-height: 9.5rem;
  align-items: stretch;
  flex-direction: column;
}

.demo-card-horizontal-inner {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.75rem;
}

.demo-card-media-frame {
  position: relative;
  width: 100%;
  height: 8.75rem;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 1rem;
}

.demo-card-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.25);
  object-fit: cover;
  user-select: none;
  pointer-events: none;
}

.demo-card-header {
  gap: 0.25rem;
}

.demo-card-title-offset {
  padding-right: 2rem;
}

.demo-card-footer-split {
  width: 100%;
  margin-top: auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}

.demo-card-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
}

.demo-card-meta {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.demo-card-meta-title {
  color: var(--color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
}

.demo-card-meta-muted {
  color: var(--color-muted-foreground);
  font-size: 0.75rem;
}

@media (min-width: 640px) {
  .demo-card-horizontal {
    flex-direction: row;
  }

  .demo-card-media-frame {
    width: 7.5rem;
    height: 7.5rem;
  }

  .demo-card-footer-split {
    flex-direction: row;
    align-items: center;
  }

  .demo-card-footer-split [data-slot="button"] {
    width: auto;
  }
}
</style>
