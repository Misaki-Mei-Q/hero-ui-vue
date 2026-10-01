import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Chip from '../Chip.vue'
import ChipLabel from '../ChipLabel.vue'
import { h } from 'vue'

const Icon = () => h('svg', { viewBox: '0 0 24 24' }, [h('circle', { cx: 12, cy: 12, r: 4 })])

describe('Chip', () => {
  it('renders plain text wrapped in ChipLabel automatically', () => {
    const wrapper = mount(Chip, {
      slots: { default: 'Default' },
    })

    expect(wrapper.element.tagName).toBe('SPAN')
    expect(wrapper.classes()).toContain('chip')
    expect(wrapper.text()).toBe('Default')

    const label = wrapper.findComponent(ChipLabel)

    expect(label.exists()).toBe(true)
    expect(label.classes()).toContain('chip__label')
  })

  it('does not auto-wrap when slot contains non-text children', () => {
    const wrapper = mount(Chip, {
      slots: { default: () => [Icon(), 'Label'] },
    })

    const labels = wrapper.findAllComponents(ChipLabel)

    expect(labels).toHaveLength(0)
  })

  it('applies color, variant, and size classes from styles package', () => {
    const wrapper = mount(Chip, {
      props: { color: 'danger', variant: 'tertiary', size: 'sm' },
      slots: { default: 'Tag' },
    })

    expect(wrapper.classes()).toContain('chip--danger')
    expect(wrapper.classes()).toContain('chip--tertiary')
    expect(wrapper.classes()).toContain('chip--sm')
  })

  it('supports explicit ChipLabel composition for icon + label layouts', () => {
    const wrapper = mount(Chip, {
      props: { color: 'success' },
      slots: {
        default: () => [Icon(), h(ChipLabel, null, () => 'Available')],
      },
    })

    const labels = wrapper.findAllComponents(ChipLabel)

    expect(labels).toHaveLength(1)
    expect(labels[0]?.classes()).toContain('chip__label')
    expect(labels[0]?.text()).toBe('Available')
    expect(wrapper.classes()).toContain('chip--success')
  })

  it('merges user-provided class with styles package classes', () => {
    const wrapper = mount(Chip, {
      props: { class: 'rounded-full' },
      slots: { default: 'x' },
    })

    expect(wrapper.classes()).toContain('rounded-full')
    expect(wrapper.classes()).toContain('chip')
  })
})