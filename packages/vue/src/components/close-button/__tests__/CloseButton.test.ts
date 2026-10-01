import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import CloseButton from '../CloseButton.vue'

describe('CloseButton', () => {
  it('renders with default aria-label and close icon', () => {
    const wrapper = mount(CloseButton)

    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.attributes('aria-label')).toBe('Close')
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.classes()).toContain('close-button')
    expect(wrapper.classes()).toContain('close-button--default')
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('honours a custom ariaLabel prop', () => {
    const wrapper = mount(CloseButton, {
      props: { ariaLabel: 'Dismiss dialog' },
    })

    expect(wrapper.attributes('aria-label')).toBe('Dismiss dialog')
  })

  it('renders custom slot content in place of the default icon', () => {
    const wrapper = mount(CloseButton, {
      slots: { default: '<span class="custom">X</span>' },
    })

    expect(wrapper.find('svg').exists()).toBe(false)
    expect(wrapper.find('.custom').text()).toBe('X')
  })

  it('emits onPress on click and Enter/Space keypress', async () => {
    const onPress = vi.fn()
    const wrapper = mount(CloseButton, { props: { onPress } })

    await wrapper.trigger('click')
    await wrapper.trigger('keydown', { key: 'Enter' })

    expect(onPress).toHaveBeenCalledTimes(2)
  })

  it('does not invoke onPress when disabled', async () => {
    const onPress = vi.fn()
    const wrapper = mount(CloseButton, {
      props: { isDisabled: true, onPress },
    })

    await wrapper.trigger('click')
    await wrapper.trigger('keydown', { key: 'Enter' })

    expect(onPress).not.toHaveBeenCalled()
    expect((wrapper.element as HTMLButtonElement).disabled).toBe(true)
  })

  it('merges user-provided class with styles package classes', () => {
    const wrapper = mount(CloseButton, {
      props: { class: 'size-8 rounded-full' },
    })

    expect(wrapper.classes()).toContain('size-8')
    expect(wrapper.classes()).toContain('rounded-full')
    expect(wrapper.classes()).toContain('close-button')
  })
})