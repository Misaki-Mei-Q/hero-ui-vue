import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { AvatarGroup, Avatar, AvatarFallback } from '../index'

describe('AvatarGroup', () => {
  it('renders the group container', () => {
    const wrapper = mount(AvatarGroup)
    expect(wrapper.find('[data-slot="avatar-group"]').exists()).toBe(true)
  })

  it('renders child avatars', () => {
    const wrapper = mount(AvatarGroup, {
      slots: {
        default: [
          '<Avatar><AvatarFallback>A</AvatarFallback></Avatar>',
          '<Avatar><AvatarFallback>B</AvatarFallback></Avatar>',
        ].join(''),
      },
      global: {
        components: { Avatar, AvatarFallback },
      },
    })
    expect(wrapper.find('[data-slot="avatar-group"]').exists()).toBe(true)
  })

  it('renders a "+N" badge when total exceeds max', () => {
    const wrapper = mount(AvatarGroup, {
      props: { total: 10, max: 3 },
      slots: {
        default: '<Avatar><AvatarFallback>A</AvatarFallback></Avatar>',
      },
      global: { components: { Avatar, AvatarFallback } },
    })
    expect(wrapper.text()).toContain('+7')
  })

  it('hides the more badge when count fits within max', () => {
    const wrapper = mount(AvatarGroup, {
      props: { max: 5 },
      slots: {
        default: '<Avatar><AvatarFallback>A</AvatarFallback></Avatar>',
      },
      global: { components: { Avatar, AvatarFallback } },
    })
    expect(wrapper.find('[data-slot="avatar-group-more"]').exists()).toBe(false)
  })

  it('merges custom class with avatar-group base class', () => {
    const wrapper = mount(AvatarGroup, {
      props: { class: 'p-2' },
    })
    expect(wrapper.find('[data-slot="avatar-group"]').classes()).toContain('p-2')
  })

  it('defaults max to 5', () => {
    const wrapper = mount(AvatarGroup)
    expect(wrapper.props('max')).toBe(5)
  })

  it('renders with default slot helper', () => {
    const wrapper = mount(AvatarGroup, {
      slots: {
        default: () => h(Avatar, null, () => h(AvatarFallback, null, () => 'A')),
      },
      global: { components: { Avatar, AvatarFallback } },
    })
    expect(wrapper.text()).toContain('A')
  })
})