<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@misaki-mei/heroui-vue'

const value = ref('heroui.com')
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Variants</h3>
      <div class="compare-grid" style="flex-direction: column; align-items: stretch">
        <Input aria-label="primary" variant="primary" placeholder="Primary input" />
        <Input aria-label="secondary" variant="secondary" placeholder="Secondary input" />
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Full width</h3>
      <div style="width: 100%">
        <Input aria-label="Full width" full-width placeholder="Full width input" />
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Types (with Label)</h3>
      <div style="display: flex; flex-direction: column; gap: 0.75rem">
        <div style="display: flex; flex-direction: column; gap: 0.25rem">
          <label for="input-type-email-vue" style="font-size: 0.85rem">Email</label>
          <Input id="input-type-email-vue" placeholder="jane@example.com" type="email" />
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.25rem">
          <label for="input-type-password-vue" style="font-size: 0.85rem">Password</label>
          <Input id="input-type-password-vue" placeholder="••••••••" type="password" />
        </div>
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Disabled</h3>
      <div style="display: flex; flex-direction: column; gap: 0.75rem">
        <Input aria-label="disabled" is-disabled model-value="Disabled value" />
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Controlled</h3>
      <div style="display: flex; flex-direction: column; gap: 0.5rem">
        <Input
          aria-label="Domain"
          placeholder="domain"
          :model-value="value"
          @update:model-value="(v: string | number) => (value = String(v))"
        />
        <span style="font-size: 0.85rem; color: var(--muted-foreground); padding-inline-start: 0.25rem">
          https://{{ value || 'your-domain' }}
        </span>
      </div>
    </section>
  </div>
</template>