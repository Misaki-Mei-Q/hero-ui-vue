<script setup lang="ts">
import { ref } from 'vue'
import {
  Button,
  InputGroup,
  InputGroupInput,
  InputGroupPrefix,
  InputGroupSuffix,
  Label,
  Description,
  FieldError,
} from '@misaki-mei/heroui-vue'

const passwordVisible = ref(false)
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Variants</h3>
      <div style="display: flex; flex-direction: column; gap: 1rem">
        <div style="display: flex; flex-direction: column; gap: 0.25rem">
          <Label for="ig-primary">Primary variant</Label>
          <InputGroup variant="primary">
            <InputGroupPrefix>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em">
                <rect x="3" y="5" width="18" height="18" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </InputGroupPrefix>
            <InputGroupInput id="ig-primary" placeholder="name@email.com" />
          </InputGroup>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.25rem">
          <Label for="ig-secondary">Secondary variant</Label>
          <InputGroup variant="secondary">
            <InputGroupPrefix>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em">
                <rect x="3" y="5" width="18" height="18" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </InputGroupPrefix>
            <InputGroupInput id="ig-secondary" placeholder="name@email.com" />
          </InputGroup>
        </div>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Text prefix / suffix (currency)</h3>
      <div style="display: flex; flex-direction: column; gap: 0.25rem">
        <Label for="ig-price">Set a price</Label>
        <InputGroup>
          <InputGroupPrefix>$</InputGroupPrefix>
          <InputGroupInput id="ig-price" placeholder="0" type="number" />
          <InputGroupSuffix>USD</InputGroupSuffix>
        </InputGroup>
        <Description>What customers would pay</Description>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Icon + text (website)</h3>
      <div style="display: flex; flex-direction: column; gap: 0.25rem">
        <Label for="ig-website">Website</Label>
        <InputGroup>
          <InputGroupPrefix>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
            </svg>
          </InputGroupPrefix>
          <InputGroupInput id="ig-website" model-value="heroui" />
          <InputGroupSuffix>.com</InputGroupSuffix>
        </InputGroup>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Copy button suffix</h3>
      <div style="display: flex; flex-direction: column; gap: 0.25rem">
        <Label for="ig-copy">Website</Label>
        <InputGroup>
          <InputGroupInput id="ig-copy" model-value="heroui.com" />
          <InputGroupSuffix>
            <Button size="sm" variant="ghost" aria-label="Copy">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </Button>
          </InputGroupSuffix>
        </InputGroup>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Password toggle</h3>
      <div style="display: flex; flex-direction: column; gap: 0.25rem">
        <Label for="ig-password">Password</Label>
        <InputGroup>
          <InputGroupInput
            id="ig-password"
            :type="passwordVisible ? 'text' : 'password'"
            :model-value="passwordVisible ? '87$2h.3diua' : '••••••••'"
          />
          <InputGroupSuffix>
            <Button
              size="sm"
              variant="ghost"
              :aria-label="passwordVisible ? 'Hide password' : 'Show password'"
              @click="passwordVisible = !passwordVisible"
            >
              <svg v-if="passwordVisible" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em">
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                <line x1="2" x2="22" y1="2" y2="22" />
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </Button>
          </InputGroupSuffix>
        </InputGroup>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Invalid</h3>
      <div style="display: flex; flex-direction: column; gap: 0.25rem">
        <Label for="ig-invalid">Email address</Label>
        <InputGroup is-invalid>
          <InputGroupPrefix>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="1em" height="1em">
              <rect x="3" y="5" width="18" height="18" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </InputGroupPrefix>
          <InputGroupInput id="ig-invalid" placeholder="name@email.com" />
        </InputGroup>
        <FieldError>Please enter a valid email address</FieldError>
      </div>
    </section>
  </div>
</template>