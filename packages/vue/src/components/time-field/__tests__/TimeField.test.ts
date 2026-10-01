import { afterEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { TimeField } from '../index'

afterEach(() => {
  document.body.innerHTML = ''
})

describe('TimeField', () => {
  it('renders the root container', () => {
    const wrapper = mount(TimeField, {
      attachTo: document.body,
    })
    expect(wrapper.find('[data-slot="time-field"]').exists()).toBe(true)
  })

  it('renders label when provided', () => {
    const wrapper = mount(TimeField, {
      attachTo: document.body,
      props: { label: 'Start time' },
    })
    expect(wrapper.text()).toContain('Start time')
  })

  it('renders description when provided', () => {
    const wrapper = mount(TimeField, {
      attachTo: document.body,
      props: { description: 'When does it begin?' },
    })
    expect(wrapper.text()).toContain('When does it begin?')
  })

  it('renders error message when provided', () => {
    const wrapper = mount(TimeField, {
      attachTo: document.body,
      props: { errorMessage: 'Required' },
    })
    expect(wrapper.find('[data-slot="error-message"]').exists()).toBe(true)
  })

  it('marks data-required when isRequired is true', () => {
    const wrapper = mount(TimeField, {
      attachTo: document.body,
      props: { isRequired: true },
    })
    expect(wrapper.find('[data-slot="time-field"]').attributes('data-required')).toBe('true')
  })

  it('marks data-invalid when isInvalid is true', () => {
    const wrapper = mount(TimeField, {
      attachTo: document.body,
      props: { isInvalid: true },
    })
    expect(wrapper.find('[data-slot="time-field"]').attributes('data-invalid')).toBe('true')
  })

  it('marks data-disabled when isDisabled is true', () => {
    const wrapper = mount(TimeField, {
      attachTo: document.body,
      props: { isDisabled: true },
    })
    expect(wrapper.find('[data-slot="time-field"]').attributes('data-disabled')).toBe('true')
  })

  it('merges custom class with time-field base class', () => {
    const wrapper = mount(TimeField, {
      attachTo: document.body,
      props: { class: 'shadow-md' },
    })
    expect(wrapper.find('[data-slot="time-field"]').classes()).toContain('shadow-md')
  })

  it('respects granularity prop', () => {
    const wrapper = mount(TimeField, {
      attachTo: document.body,
      props: { granularity: 'second' },
    })
    expect(wrapper.find('[data-slot="time-field"]').exists()).toBe(true)
  })

  it('respects hourCycle prop', () => {
    const wrapper = mount(TimeField, {
      attachTo: document.body,
      props: { hourCycle: 12 },
    })
    expect(wrapper.find('[data-slot="time-field"]').exists()).toBe(true)
  })
})