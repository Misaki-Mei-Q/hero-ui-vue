import { afterEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { ComboBox } from '../index'
import { ListBoxItem } from '../../list-box'

enableAutoUnmount(afterEach)

async function flush() {
  await nextTick()
  await new Promise((r) => setTimeout(r, 0))
}

const fruitItems = [
  { key: 'apple', label: 'Apple' },
  { key: 'banana', label: 'Banana' },
  { key: 'cherry', label: 'Cherry' },
  { key: 'date', label: 'Date' },
  { key: 'elderberry', label: 'Elderberry' },
]

describe('ComboBox', () => {
  it('renders an input as the trigger', () => {
    const wrapper = mount(ComboBox, {
      attachTo: document.body,
      props: { placeholder: 'Pick a fruit' },
      slots: {
        default: fruitItems
          .map((i) => `<ListBoxItem :value="${i.key}">${i.label}</ListBoxItem>`)
          .join(''),
      },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.find('input[data-slot="input"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="combo-box-trigger"]').exists()).toBe(true)
  })

  it('shows the placeholder when nothing is selected', () => {
    const wrapper = mount(ComboBox, {
      attachTo: document.body,
      props: { placeholder: 'Pick a fruit' },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.find('input[data-slot="input"]').attributes('placeholder')).toBe('Pick a fruit')
  })

  it('renders the trigger chevron by default', () => {
    const wrapper = mount(ComboBox, {
      attachTo: document.body,
      props: {},
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.find('[data-slot="combo-box-trigger"]').exists()).toBe(true)
  })

  it('opens the popover when defaultOpen is true', async () => {
    mount(ComboBox, {
      attachTo: document.body,
      props: { defaultOpen: true, items: fruitItems },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    await flush()
    expect(document.querySelector('[data-slot="combo-box-popover"]')).not.toBeNull()
  })

  it('marks data-required when isRequired is true', () => {
    const wrapper = mount(ComboBox, {
      attachTo: document.body,
      props: { isRequired: true },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.find('[data-slot="combo-box"]').attributes('data-required')).toBe('true')
  })

  it('marks data-invalid when isInvalid is true', () => {
    const wrapper = mount(ComboBox, {
      attachTo: document.body,
      props: { isInvalid: true },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.find('[data-slot="combo-box"]').attributes('data-invalid')).toBe('true')
  })

  it('shows label above the input', () => {
    const wrapper = mount(ComboBox, {
      attachTo: document.body,
      props: { label: 'Favorite fruit' },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.text()).toContain('Favorite fruit')
    expect(wrapper.find('[data-slot="label"]').exists()).toBe(true)
  })

  it('renders description and error message slots', () => {
    const wrapper = mount(ComboBox, {
      attachTo: document.body,
      props: { description: 'Pick one', errorMessage: 'Required' },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.text()).toContain('Required')
    expect(wrapper.find('[data-slot="error-message"]').exists()).toBe(true)
  })

  it('shows clear button when selection exists', async () => {
    mount(ComboBox, {
      attachTo: document.body,
      props: { defaultSelectedKey: 'apple' },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    await flush()
    const clearBtn = document.querySelector('[data-slot="combo-box-clear"]')
    expect(clearBtn).not.toBeNull()
  })

  it('updates internal input value when typing', async () => {
    mount(ComboBox, {
      attachTo: document.body,
      props: { items: fruitItems },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    await flush()
    const input = document.querySelector('input[data-slot="input"]') as HTMLInputElement
    input.value = 'ban'
    input.dispatchEvent(new Event('input'))
    await flush()
    expect(input.value).toBe('ban')
  })

  it('merges custom class with combo-box base class', () => {
    const wrapper = mount(ComboBox, {
      attachTo: document.body,
      props: { class: 'shadow-md' },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.find('[data-slot="combo-box"]').classes()).toContain('shadow-md')
    expect(wrapper.find('[data-slot="combo-box"]').classes()).toContain('combo-box')
  })

  it('supports fullWidth variant', () => {
    const wrapper = mount(ComboBox, {
      attachTo: document.body,
      props: { fullWidth: true },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.find('[data-slot="combo-box"]').classes()).toContain('combo-box--full-width')
  })

  it('opens the popover when the chevron trigger is clicked', async () => {
    const wrapper = mount(ComboBox, {
      attachTo: document.body,
      props: { items: fruitItems },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    await flush()
    expect(document.querySelector('[data-slot="combo-box-popover"]')).toBeNull()

    await wrapper.find('[data-slot="combo-box-trigger"]').trigger('click')
    await flush()

    expect(document.querySelector('[data-slot="combo-box-popover"]')).not.toBeNull()
    expect(wrapper.emitted('openChange')?.at(-1)).toEqual([true])
  })

  it('closes the popover when the chevron trigger is clicked again', async () => {
    const wrapper = mount(ComboBox, {
      attachTo: document.body,
      props: { items: fruitItems },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    await flush()
    const trigger = wrapper.find('[data-slot="combo-box-trigger"]')
    await trigger.trigger('click')
    await flush()
    await trigger.trigger('click')
    await flush()

    expect(document.querySelector('[data-slot="combo-box-popover"]')).toBeNull()
  })

  it('renders clickable options that update modelValue', async () => {
    const wrapper = mount(ComboBox, {
      attachTo: document.body,
      props: { items: fruitItems },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    await flush()
    await wrapper.find('[data-slot="combo-box-trigger"]').trigger('click')
    await flush()

    const options = document.querySelectorAll('[data-slot="list-box-item"]')
    expect(options.length).toBe(fruitItems.length)

    await (options[1] as HTMLElement).click()
    await flush()

    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['banana'])
    expect((document.querySelector('input[data-slot="input"]') as HTMLInputElement).value).toBe(
      'Banana',
    )
  })

  it('shows the selected label rather than the raw key', async () => {
    mount(ComboBox, {
      attachTo: document.body,
      props: { items: fruitItems, defaultSelectedKey: 'elderberry' },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    await flush()
    expect((document.querySelector('input[data-slot="input"]') as HTMLInputElement).value).toBe(
      'Elderberry',
    )
  })

  it('renders section titles for grouped items', async () => {
    mount(ComboBox, {
      attachTo: document.body,
      props: {
        items: [
          {
            title: 'Fruits',
            children: [
              { key: 'apple', label: 'Apple' },
              { key: 'banana', label: 'Banana' },
            ],
          },
        ],
        defaultOpen: true,
      },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    await flush()
    expect(document.querySelector('[data-slot="list-box-section-title"]')?.textContent).toContain(
      'Fruits',
    )
    expect(document.querySelectorAll('[data-slot="list-box-item"]').length).toBe(2)
  })

  it('filters grouped items without throwing', async () => {
    mount(ComboBox, {
      attachTo: document.body,
      props: {
        items: [
          {
            title: 'Fruits',
            children: [
              { key: 'apple', label: 'Apple' },
              { key: 'banana', label: 'Banana' },
            ],
          },
        ],
        defaultOpen: true,
      },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    await flush()
    const input = document.querySelector('input[data-slot="input"]') as HTMLInputElement
    input.value = 'ban'
    input.dispatchEvent(new Event('input'))
    await flush()

    expect(document.querySelectorAll('[data-slot="list-box-item"]').length).toBe(1)
    expect(document.querySelector('[data-slot="combo-box-empty"]')).toBeNull()
  })

  it('shows the empty state when nothing matches', async () => {
    mount(ComboBox, {
      attachTo: document.body,
      props: { items: fruitItems, defaultOpen: true },
      global: { components: { ListBoxItem } },
    })

    await flush()
    const input = document.querySelector('input[data-slot="input"]') as HTMLInputElement
    input.value = 'zzz'
    input.dispatchEvent(new Event('input'))
    await flush()

    expect(document.querySelector('[data-slot="combo-box-empty"]')).not.toBeNull()
    expect(document.querySelectorAll('[data-slot="list-box-item"]').length).toBe(0)
  })

  it('clear button clears the selection without opening the popover', async () => {
    const wrapper = mount(ComboBox, {
      attachTo: document.body,
      props: { items: fruitItems, defaultSelectedKey: 'apple' },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    await flush()
    await wrapper.find('[data-slot="combo-box-clear"]').trigger('click')
    await flush()

    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([null])
    expect(document.querySelector('[data-slot="combo-box-popover"]')).toBeNull()
  })

  it('associates the label with the input via id', () => {
    const wrapper = mount(ComboBox, {
      attachTo: document.body,
      props: { id: 'fruit', label: 'Favorite fruit' },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    expect(wrapper.find('label[data-slot="label"]').attributes('for')).toBe('fruit')
    expect(wrapper.find('input[data-slot="input"]').attributes('id')).toBe('fruit')
  })

  it('moves focus to the first option on ArrowDown', async () => {
    const wrapper = mount(ComboBox, {
      attachTo: document.body,
      props: { items: fruitItems },
      slots: { default: '' },
      global: { components: { ListBoxItem } },
    })

    await flush()
    await wrapper.find('input[data-slot="input"]').trigger('keydown', { key: 'ArrowDown' })
    await flush()

    expect(document.querySelector('[data-slot="combo-box-popover"]')).not.toBeNull()
    await flush()
    const active = document.activeElement as HTMLElement
    expect(active?.getAttribute('data-slot')).toBe('list-box-item')
  })
})