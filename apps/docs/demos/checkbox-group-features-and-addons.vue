<template>
  <div class="demo-checkbox-addons">
    <CheckboxGroup name="notification-preferences">
      <Label>Notification preferences</Label>
      <Description>Choose how you want to receive updates</Description>

      <div class="demo-checkbox-addons__list">
        <Checkbox
          v-for="addon in addOns"
          :key="addon.value"
          :value="addon.value"
          class="demo-checkbox-addons__item"
          variant="secondary"
        >
          <span class="demo-checkbox-addons__icon" aria-hidden="true">
            <component :is="addon.icon" />
          </span>
          <span class="demo-checkbox-addons__content">
            <Label>{{ addon.title }}</Label>
            <Description>{{ addon.description }}</Description>
          </span>
        </Checkbox>
      </div>
    </CheckboxGroup>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Checkbox, CheckboxGroup, Description, Label } from '@misaki-mei-q/heroui-vue'

const iconAttrs = {
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  'stroke-width': 2.2,
}

const MailIcon = () =>
  h('svg', iconAttrs, [
    h('path', {
      d: 'M4 7.5h16v9H4z',
      'stroke-linejoin': 'round',
    }),
    h('path', {
      d: 'm5 8 7 5 7-5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    }),
  ])

const ChatIcon = () =>
  h('svg', iconAttrs, [
    h('path', {
      d: 'M5 6.5h14v8H9l-4 3v-11Z',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    }),
  ])

const BellIcon = () =>
  h('svg', iconAttrs, [
    h('path', {
      d: 'M8 17h8M10 20h4M6.5 15.5h11l-1.2-2V10a4.3 4.3 0 0 0-8.6 0v3.5l-1.2 2Z',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    }),
  ])

const addOns = [
  {
    description: 'Receive updates via email',
    icon: MailIcon,
    title: 'Email Notifications',
    value: 'email',
  },
  {
    description: 'Get instant SMS notifications',
    icon: ChatIcon,
    title: 'SMS Alerts',
    value: 'sms',
  },
  {
    description: 'Browser and mobile push alerts',
    icon: BellIcon,
    title: 'Push Notifications',
    value: 'push',
  },
]
</script>

<style lang="less">
.demo-checkbox-addons {
  display: flex;
  width: 100%;
  min-width: 20rem;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 2rem 1rem;
}

.demo-checkbox-addons__list {
  display: flex;
  width: 100%;
  min-width: 20rem;
  flex-direction: column;
  gap: 0.5rem;
}

.demo-checkbox-addons__item {
  position: relative;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1.5rem;
  background: var(--color-surface);
  padding: 1rem 1.25rem;
  transition: background-color 150ms var(--ease-out), transform 150ms var(--ease-out);
}

.demo-checkbox-addons__item[data-selected='true'] {
  background: color-mix(in oklab, var(--color-accent) 10%, transparent);
}

.demo-checkbox-addons__item [data-slot='checkbox-control'] {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 999px;
}

.demo-checkbox-addons__item [data-slot='checkbox-control']::before {
  border-radius: 999px;
}

.demo-checkbox-addons__item [data-slot='checkbox-content'] {
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  padding-right: 1.75rem;
}

.demo-checkbox-addons__icon {
  display: inline-flex;
  width: 1.35rem;
  height: 1.35rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
}

.demo-checkbox-addons__icon svg {
  width: 1.35rem;
  height: 1.35rem;
}

.demo-checkbox-addons__content {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 0.25rem;
}
</style>
