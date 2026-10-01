import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Badge from '../Badge.vue'
import BadgeAnchor from '../BadgeAnchor.vue'
import BadgeLabel from '../BadgeLabel.vue'

describe('Badge', () => {
  it('renders dot mode when no slot content', () => {
    const wrapper = mount(Badge)

    expect(wrapper.element.tagName).toBe('SPAN')
    expect(wrapper.classes()).toContain('badge')
    expect(wrapper.text()).toBe('')
  })

  it('auto-wraps plain children in BadgeLabel', () => {
    const wrapper = mount(Badge, {
      slots: { default: '5' },
    })

    const label = wrapper.findComponent(BadgeLabel)

    expect(label.exists()).toBe(true)
    expect(wrapper.text()).toBe('5')
  })

  it('applies color, variant, size, and placement classes', () => {
    const wrapper = mount(Badge, {
      props: {
        color: 'danger',
        variant: 'soft',
        size: 'sm',
        placement: 'bottom-right',
      },
    })

    expect(wrapper.classes()).toContain('badge--danger')
    expect(wrapper.classes()).toContain('badge--soft')
    expect(wrapper.classes()).toContain('badge--sm')
    expect(wrapper.classes()).toContain('badge--bottom-right')
  })

  it('merges user-provided class with styles package classes', () => {
    const wrapper = mount(Badge, {
      props: { class: 'custom-class' },
      slots: { default: '5' },
    })

    expect(wrapper.classes()).toContain('custom-class')
    expect(wrapper.classes()).toContain('badge')
  })
})

describe('BadgeAnchor', () => {
  it('renders anchor class and slot content', () => {
    const wrapper = mount(BadgeAnchor, {
      slots: { default: '<span class="child">A</span>' },
    })

    expect(wrapper.classes()).toContain('badge-anchor')
    expect(wrapper.find('.child').exists()).toBe(true)
  })
})

describe('BadgeLabel', () => {
  it('renders label class inside a Badge ancestor and slot content', () => {
    const wrapper = mount(Badge, {
      slots: { default: 'label text' },
    })

    const label = wrapper.findComponent(BadgeLabel)

    expect(label.exists()).toBe(true)
    expect(label.classes()).toContain('badge__label')
    expect(label.text()).toBe('label text')
  })

  it('still renders without an ancestor Badge', () => {
    const wrapper = mount(BadgeLabel, {
      slots: { default: 'standalone' },
    })

    expect(wrapper.text()).toBe('standalone')
  })
})