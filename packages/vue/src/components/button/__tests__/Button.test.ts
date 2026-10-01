import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('Button', () => {
  it('renders default slot content', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Click me' },
    })

    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.classes()).toContain('button')
    expect(wrapper.classes()).toContain('button--primary')
    expect(wrapper.classes()).toContain('button--md')
  })

  it('applies variant and size classes from styles package', () => {
    const wrapper = mount(Button, {
      props: { variant: 'secondary', size: 'lg' },
      slots: { default: 'S' },
    })

    expect(wrapper.classes()).toContain('button--secondary')
    expect(wrapper.classes()).toContain('button--lg')
  })

  it('supports fullWidth and isIconOnly modifiers', () => {
    const wrapper = mount(Button, {
      props: { fullWidth: true, isIconOnly: true },
      slots: { default: '+' },
    })

    expect(wrapper.classes()).toContain('button--full-width')
    expect(wrapper.classes()).toContain('button--icon-only')
  })

  it('emits disabled state via aria-disabled and data-disabled', () => {
    const wrapper = mount(Button, {
      props: { isDisabled: true },
      slots: { default: 'x' },
    })

    expect(wrapper.attributes('aria-disabled')).toBe('true')
    expect(wrapper.attributes('data-disabled')).toBe('true')
    expect((wrapper.element as HTMLButtonElement).disabled).toBe(true)
  })

  it('reflects isPending as data-pending and disables interaction', async () => {
    const onPress = vi.fn()
    const wrapper = mount(Button, {
      props: { isPending: true, onPress },
      slots: { default: 'Loading' },
    })

    expect(wrapper.attributes('data-pending')).toBe('true')

    await wrapper.trigger('click')
    await wrapper.trigger('keydown', { key: 'Enter' })

    expect(onPress).not.toHaveBeenCalled()
  })

  it('invokes onPress on click and Enter/Space keypress', async () => {
    const onPress = vi.fn()
    const wrapper = mount(Button, {
      props: { onPress },
      slots: { default: 'Press' },
    })

    await wrapper.trigger('click')
    await wrapper.trigger('keydown', { key: 'Enter' })
    await wrapper.trigger('keyup', { key: 'Enter' })
    await wrapper.trigger('keydown', { key: ' ' })
    await wrapper.trigger('keyup', { key: ' ' })

    expect(onPress).toHaveBeenCalledTimes(3)
  })

  it('does not invoke onPress when disabled', async () => {
    const onPress = vi.fn()
    const wrapper = mount(Button, {
      props: { isDisabled: true, onPress },
      slots: { default: 'Off' },
    })

    await wrapper.trigger('click')
    await wrapper.trigger('keydown', { key: 'Enter' })

    expect(onPress).not.toHaveBeenCalled()
  })

  it('exposes render-prop values via scoped slot', () => {
    const wrapper = mount(Button, {
      props: { isPending: true },
      slots: {
        default: '<span>{{ isPending ? "yes" : "no" }}</span>',
      },
    })

    expect(wrapper.text()).toBe('yes')
  })

  it('merges user-provided class with styles package classes', () => {
    const wrapper = mount(Button, {
      props: { class: 'extra-class' },
      slots: { default: 'x' },
    })

    expect(wrapper.classes()).toContain('extra-class')
    expect(wrapper.classes()).toContain('button')
  })
})