import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Kbd from '../Kbd.vue'

describe('Kbd', () => {
  it('renders semantic kbd element with slot content', () => {
    const wrapper = mount(Kbd, {
      slots: { default: 'Ctrl' },
    })

    expect(wrapper.element.tagName).toBe('KBD')
    expect(wrapper.classes()).toContain('kbd')
    expect(wrapper.text()).toBe('Ctrl')
  })

  it('renders keys prop into kbd__abbr children', () => {
    const wrapper = mount(Kbd, {
      props: { keys: ['Ctrl', 'C'] },
    })

    const abbr = wrapper.find('abbr')

    expect(abbr.exists()).toBe(true)
    expect(abbr.classes()).toContain('kbd__abbr')
    expect(abbr.text()).toBe('CtrlC')
  })

  it('applies light modifier class', () => {
    const wrapper = mount(Kbd, {
      props: { variant: 'light' },
      slots: { default: 'Alt' },
    })

    expect(wrapper.classes()).toContain('kbd--light')
  })

  it('merges user-provided class with styles package classes', () => {
    const wrapper = mount(Kbd, {
      props: { class: 'shadow-md' },
      slots: { default: 'x' },
    })

    expect(wrapper.classes()).toContain('shadow-md')
    expect(wrapper.classes()).toContain('kbd')
  })
})