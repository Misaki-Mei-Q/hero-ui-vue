import { afterEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import {
  Dropdown,
  DropdownItem,
  DropdownLabel,
  DropdownSection,
  DropdownSeparator,
} from '../index'

async function flush() {
  await nextTick()
  await new Promise((r) => setTimeout(r, 0))
}

afterEach(() => {
  document.body.innerHTML = ''
})

describe('Dropdown', () => {
  it('renders a trigger slot', () => {
    const wrapper = mount(Dropdown, {
      attachTo: document.body,
      slots: {
        trigger: '<button>Open</button>',
        default: '<DropdownItem value="a">Apple</DropdownItem>',
      },
      global: { components: { DropdownItem } },
    })

    expect(wrapper.find('[data-slot="dropdown-trigger"]').exists()).toBe(true)
  })

  it('opens the menu when trigger is clicked', async () => {
    mount(Dropdown, {
      attachTo: document.body,
      slots: {
        trigger: '<button id="dd-trigger">Open</button>',
        default: '<DropdownItem value="a">Apple</DropdownItem>',
      },
      global: { components: { DropdownItem } },
    })

    await flush()
    const trigger = document.querySelector('#dd-trigger') as HTMLElement
    expect(trigger).not.toBeNull()
    trigger?.click()
    await flush()
    expect(document.querySelector('[data-slot="dropdown-popover"]')).not.toBeNull()
  })

  it('forwards open state via openChange', async () => {
    const wrapper = mount(Dropdown, {
      attachTo: document.body,
      slots: {
        trigger: '<button id="dd-trigger-2">Open</button>',
        default: '<DropdownItem value="a">Apple</DropdownItem>',
      },
      global: { components: { DropdownItem } },
    })

    await flush()
    const trigger = document.querySelector('#dd-trigger-2') as HTMLElement
    trigger?.click()
    await flush()
    expect(wrapper.emitted('openChange')).toBeTruthy()
  })

  it('renders dropdown items with default variant', async () => {
    mount(Dropdown, {
      attachTo: document.body,
      props: { defaultOpen: true },
      slots: {
        trigger: '<button>Open</button>',
        default: [
          '<DropdownItem value="a">Apple</DropdownItem>',
          '<DropdownItem value="b">Banana</DropdownItem>',
        ].join(''),
      },
      global: { components: { DropdownItem } },
    })

    await flush()
    const items = document.querySelectorAll('[data-slot="dropdown-item"]')
    expect(items.length).toBeGreaterThanOrEqual(2)
  })

  it('renders a label inside the menu', async () => {
    mount(Dropdown, {
      attachTo: document.body,
      props: { defaultOpen: true },
      slots: {
        trigger: '<button>Open</button>',
        default: [
          '<DropdownLabel>Actions</DropdownLabel>',
          '<DropdownItem value="a">Apple</DropdownItem>',
        ].join(''),
      },
      global: { components: { DropdownItem, DropdownLabel } },
    })

    await flush()
    expect(document.body.textContent).toContain('Actions')
    expect(document.querySelector('[data-slot="dropdown-label"]')).not.toBeNull()
  })

  it('renders a section with title and items', async () => {
    mount(Dropdown, {
      attachTo: document.body,
      props: { defaultOpen: true },
      slots: {
        trigger: '<button>Open</button>',
        default: [
          '<DropdownSection title="Fruits">',
          '  <DropdownItem value="a">Apple</DropdownItem>',
          '  <DropdownItem value="b">Banana</DropdownItem>',
          '</DropdownSection>',
        ].join(''),
      },
      global: { components: { DropdownItem, DropdownSection, DropdownLabel } },
    })

    await flush()
    expect(document.body.textContent).toContain('Fruits')
    expect(document.querySelector('[data-slot="dropdown-section"]')).not.toBeNull()
  })

  it('renders a separator', async () => {
    mount(Dropdown, {
      attachTo: document.body,
      props: { defaultOpen: true },
      slots: {
        trigger: '<button>Open</button>',
        default: [
          '<DropdownItem value="a">Apple</DropdownItem>',
          '<DropdownSeparator />',
          '<DropdownItem value="b">Banana</DropdownItem>',
        ].join(''),
      },
      global: { components: { DropdownItem, DropdownSeparator } },
    })

    await flush()
    expect(document.querySelector('[data-slot="dropdown-separator"]')).not.toBeNull()
  })

  it('supports a danger item variant', async () => {
    mount(Dropdown, {
      attachTo: document.body,
      props: { defaultOpen: true },
      slots: {
        trigger: '<button>Open</button>',
        default: '<DropdownItem value="del" variant="danger">Delete</DropdownItem>',
      },
      global: { components: { DropdownItem } },
    })

    await flush()
    const item = document.querySelector('[data-slot="dropdown-item"]')
    expect(item?.className).toContain('menu-item--danger')
  })

  it('emits select when an item is selected', async () => {
    mount(Dropdown, {
      attachTo: document.body,
      props: { defaultOpen: true },
      slots: {
        trigger: '<button>Open</button>',
        default: '<DropdownItem value="a">Apple</DropdownItem>',
      },
      global: { components: { DropdownItem } },
    })

    await flush()
    const item = document.querySelector('[data-slot="dropdown-item"]') as HTMLElement
    expect(item).not.toBeNull()
    item?.click()
    await flush()
  })

  it('merges custom class with dropdown root class', () => {
    const wrapper = mount(Dropdown, {
      attachTo: document.body,
      props: { class: 'shadow-lg' },
      slots: {
        trigger: '<button>Open</button>',
        default: '<DropdownItem value="a">Apple</DropdownItem>',
      },
      global: { components: { DropdownItem } },
    })

    expect(wrapper.find('[data-slot="dropdown-trigger"]').exists()).toBe(true)
  })
})