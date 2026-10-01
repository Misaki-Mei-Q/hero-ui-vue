<script setup lang="ts">
import { computed, ref } from 'vue'
import { TextField } from '@misaki-mei/heroui-vue'

const username = ref('')
const bio = ref('')
const isUsernameInvalid = computed(() => username.value.length > 0 && username.value.length < 3)
const isBioInvalid = computed(() => bio.value.length > 0 && bio.value.length < 20)
</script>

<template>
  <div>
    <section class="compare-section">
      <h3 class="compare-section__title">Basic</h3>
      <div style="display: flex; flex-direction: column; gap: 1rem">
        <TextField name="email" type="email" label="Email" placeholder="Enter your email" />
        <TextField
          name="username"
          label="Username"
          placeholder="jane_doe"
          description="Choose a unique username for your account"
        />
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Required</h3>
      <TextField
        is-required
        name="fullName"
        label="Full Name"
        placeholder="John Doe"
        description="This field is required"
      />
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Disabled & Invalid</h3>
      <div style="display: flex; flex-direction: column; gap: 1rem">
        <TextField
          is-disabled
          name="accountId"
          label="Account ID"
          placeholder="Auto-generated"
          description="This field cannot be edited"
          model-value="USR-12345"
        />
        <TextField
          is-invalid
          is-required
          name="password"
          type="password"
          label="Password"
          error="Password must be longer than 8 characters"
        />
      </div>
    </section>

    <section class="compare-section">
      <h3 class="compare-section__title">Validation (controlled)</h3>
      <div style="display: flex; flex-direction: column; gap: 1rem">
        <TextField
          is-required
          :is-invalid="isUsernameInvalid"
          name="username"
          label="Username"
          placeholder="jane_doe"
          :error="isUsernameInvalid ? 'Username must be at least 3 characters.' : ''"
          :description="!isUsernameInvalid ? 'Choose a unique username for your profile.' : ''"
          :model-value="username"
          @update:model-value="(v: string | number) => (username = String(v))"
        />

        <TextField
          is-required
          :is-invalid="isBioInvalid"
          name="bio"
          label="Bio"
          placeholder="Tell us about yourself..."
          :error="isBioInvalid ? 'Bio must contain at least 20 characters.' : ''"
          :description="!isBioInvalid ? `Minimum 20 characters (${bio.length}/20).` : ''"
          :model-value="bio"
          @update:model-value="(v: string | number) => (bio = String(v))"
        />
      </div>
    </section>
  </div>
</template>