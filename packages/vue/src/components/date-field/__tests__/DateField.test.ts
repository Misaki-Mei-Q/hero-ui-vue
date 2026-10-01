import { afterEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { CalendarDate } from '@internationalized/date'
import { DateField } from '../index'

afterEach(() => {
  document.body.innerHTML = ''
})

describe('DateField', () => {
  it('renders the root container', () => {
    const wrapper = mount(DateField, {
      attachTo: document.body,
      props: { defaultValue: new CalendarDate(2025, 0, 15) },
    })
    expect(wrapper.find('[data-slot="date-field"]').exists()).toBe(true)
  })

  it('renders label when provided', () => {
    const wrapper = mount(DateField, {
      attachTo: document.body,
      props: { label: 'Birthday' },
    })
    expect(wrapper.text()).toContain('Birthday')
    expect(wrapper.find('[data-slot="label"]').exists()).toBe(true)
  })

  it('renders description when provided', () => {
    const wrapper = mount(DateField, {
      attachTo: document.body,
      props: { description: 'Pick a date' },
    })
    expect(wrapper.text()).toContain('Pick a date')
  })

  it('renders error message when provided', () => {
    const wrapper = mount(DateField, {
      attachTo: document.body,
      props: { errorMessage: 'Required' },
    })
    expect(wrapper.find('[data-slot="error-message"]').exists()).toBe(true)
  })

  it('marks data-required when isRequired is true', () => {
    const wrapper = mount(DateField, {
      attachTo: document.body,
      props: { isRequired: true },
    })
    expect(wrapper.find('[data-slot="date-field"]').attributes('data-required')).toBe('true')
  })

  it('marks data-invalid when isInvalid is true', () => {
    const wrapper = mount(DateField, {
      attachTo: document.body,
      props: { isInvalid: true },
    })
    expect(wrapper.find('[data-slot="date-field"]').attributes('data-invalid')).toBe('true')
  })

  it('marks data-disabled when isDisabled is true', () => {
    const wrapper = mount(DateField, {
      attachTo: document.body,
      props: { isDisabled: true },
    })
    expect(wrapper.find('[data-slot="date-field"]').attributes('data-disabled')).toBe('true')
  })

  it('merges custom class with date-field base class', () => {
    const wrapper = mount(DateField, {
      attachTo: document.body,
      props: { class: 'shadow-md' },
    })
    expect(wrapper.find('[data-slot="date-field"]').classes()).toContain('shadow-md')
  })

  it('respects fullWidth prop', () => {
    const wrapper = mount(DateField, {
      attachTo: document.body,
      props: { fullWidth: true },
    })
    expect(wrapper.find('[data-slot="date-field"]').classes()).toContain('date-field--full-width')
  })

  it('respects granularity prop', () => {
    const wrapper = mount(DateField, {
      attachTo: document.body,
      props: { granularity: 'minute' },
    })
    expect(wrapper.find('[data-slot="date-field"]').exists()).toBe(true)
  })
})