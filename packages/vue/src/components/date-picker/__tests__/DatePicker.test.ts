import { afterEach, describe, expect, it } from 'vitest'
import { CalendarDate } from '@internationalized/date'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { DatePicker } from '../index'

enableAutoUnmount(afterEach)

describe('DatePicker', () => {
  it('module exports DatePicker', () => {
    expect(DatePicker).toBeDefined()
    expect(typeof DatePicker).toBe('object')
  })

  it('mounts with no props', () => {
    mount(DatePicker, { attachTo: document.body })

    const trigger = document.querySelector('[data-slot="date-picker-trigger"]')
    expect(trigger).not.toBeNull()
    expect(trigger?.textContent).toContain('Select a date')
    expect(document.querySelector('[data-slot="label"]')).toBeNull()
  })

  it('mounts with modelValue prop and shows a formatted value', () => {
    mount(DatePicker, {
      attachTo: document.body,
      props: { modelValue: new CalendarDate(2025, 1, 15) },
    })

    const trigger = document.querySelector('[data-slot="date-picker-trigger"]')
    expect(trigger?.textContent).toContain('Jan 15, 2025')
    expect(trigger?.textContent).not.toContain('2025-01-15')
  })

  it('mounts with placeholder and labelText props', () => {
    mount(DatePicker, {
      attachTo: document.body,
      props: { placeholder: new CalendarDate(2025, 5, 1), labelText: 'Pick a date' },
    })

    expect(document.querySelector('[data-slot="label"]')?.textContent?.trim()).toBe('Pick a date')
  })

  it('mounts with disabled prop', () => {
    mount(DatePicker, {
      attachTo: document.body,
      props: { modelValue: new CalendarDate(2025, 1, 15), isDisabled: true },
    })

    const root = document.querySelector('[data-slot="date-picker"]')
    expect(root?.getAttribute('data-disabled')).toBe('true')
    expect(root?.classList.contains('date-picker')).toBe(true)
  })

  it('mounts with isRequired prop', () => {
    mount(DatePicker, {
      attachTo: document.body,
      props: { isRequired: true },
    })

    expect(document.querySelector('[data-slot="date-picker"]')?.getAttribute('data-required')).toBe(
      'true',
    )
  })

  it('mounts with fullWidth prop', () => {
    mount(DatePicker, {
      attachTo: document.body,
      props: { fullWidth: true },
    })

    expect(
      document.querySelector('[data-slot="date-picker"]')?.classList.contains('date-picker--full-width'),
    ).toBe(true)
  })

  it('opens the popover when the trigger is clicked and renders a calendar', async () => {
    const wrapper = mount(DatePicker, {
      attachTo: document.body,
      props: { modelValue: new CalendarDate(2025, 1, 15) },
    })

    const trigger = document.querySelector(
      '[data-slot="date-picker-trigger"]',
    ) as HTMLButtonElement
    trigger.click()
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('openChange')?.[0]?.[0]).toBe(true)
    expect(document.querySelector('[data-slot="calendar"]')).not.toBeNull()
    expect(
      document.querySelector('[data-slot="calendar-heading"]')?.textContent?.trim(),
    ).toBe('January 2025')
  })
})
