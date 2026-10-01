import { afterEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { Select } from '../index'
import {
  ListBoxItem,
  ListBoxItemIndicator,
} from '../../list-box'

async function flush() {
  await nextTick()
  await new Promise((r) => setTimeout(r, 0))
}

afterEach(() => {
  document.body.innerHTML = ''
})

describe('Select', () => {
  it('renders a trigger with a placeholder when nothing is selected', () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: { placeholder: 'Pick one' },
      slots: {
        default: [
          '<ListBoxItem value="a">Apple</ListBoxItem>',
          '<ListBoxItem value="b">Banana</ListBoxItem>',
        ].join(''),
      },
      global: { components: { ListBoxItem, ListBoxItemIndicator } },
    })

    expect(wrapper.text()).toContain('Pick one')
    expect(wrapper.find('[data-slot="select-trigger"]').exists()).toBe(true)
  })

  it('exposes the trigger in DOM', () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: { placeholder: 'Pick one' },
      slots: { default: '<ListBoxItem value="a">Apple</ListBoxItem>' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.find('[data-slot="select-trigger"]').exists()).toBe(true)
  })

  it('renders a chevron indicator by default', () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: { placeholder: 'Pick' },
      slots: { default: '<ListBoxItem value="a">Apple</ListBoxItem>' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.find('[data-slot="select-indicator"]').exists()).toBe(true)
  })

  it('hides the indicator when showIndicator is false', () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: { placeholder: 'Pick', showIndicator: false },
      slots: { default: '<ListBoxItem value="a">Apple</ListBoxItem>' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.find('[data-slot="select-indicator"]').exists()).toBe(false)
  })

  it('marks data-required when isRequired is true', () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: { isRequired: true },
      slots: { default: '<ListBoxItem value="a">Apple</ListBoxItem>' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.find('[data-slot="select"]').attributes('data-required')).toBe('true')
  })

  it('marks data-invalid when isInvalid is true', () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: { isInvalid: true },
      slots: { default: '<ListBoxItem value="a">Apple</ListBoxItem>' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.find('[data-slot="select"]').attributes('data-invalid')).toBe('true')
  })

  it('opens the popover when defaultOpen is true', async () => {
    mount(Select, {
      attachTo: document.body,
      props: { defaultOpen: true },
      slots: { default: '<ListBoxItem value="a">Apple</ListBoxItem>' },
      global: { components: { ListBoxItem } },
    })

    await flush()
    expect(document.querySelector('[data-slot="select-popover"]')).not.toBeNull()
  })

  it('emits openChange when popover opens via trigger click', async () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      slots: { default: '<ListBoxItem value="a">Apple</ListBoxItem>' },
      global: { components: { ListBoxItem } },
    })

    await wrapper.find('[data-slot="select-trigger"]').trigger('click')
    await flush()

    expect(wrapper.emitted('openChange')).toBeTruthy()
  })

  it('renders the label prop above the trigger', () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: { label: 'Country' },
      slots: { default: '<ListBoxItem value="a">Apple</ListBoxItem>' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.text()).toContain('Country')
    expect(wrapper.find('[data-slot="label"]').exists()).toBe(true)
  })

  it('renders description and error message slots', () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: { description: 'Pick your country', errorMessage: 'Required field' },
      slots: { default: '<ListBoxItem value="a">Apple</ListBoxItem>' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.text()).toContain('Required field')
    expect(wrapper.find('[data-slot="error-message"]').exists()).toBe(true)
  })

  it('merges custom class with select base class', () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: { class: 'shadow-md' },
      slots: { default: '<ListBoxItem value="a">Apple</ListBoxItem>' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.find('[data-slot="select"]').classes()).toContain('shadow-md')
    expect(wrapper.find('[data-slot="select"]').classes()).toContain('select')
  })
})