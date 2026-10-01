import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { Table, TableColumn, TableRow, TableCell } from '../index'

describe('Table', () => {
  it('renders the table root', () => {
    const wrapper = mount(Table)
    expect(wrapper.find('[data-slot="table-root"]').exists()).toBe(true)
    expect(wrapper.find('table').exists()).toBe(true)
  })

  it('renders the header slot when provided', () => {
    const wrapper = mount(Table, {
      slots: {
        header: '<tr><th>Custom Header</th></tr>',
      },
    })
    expect(wrapper.text()).toContain('Custom Header')
    expect(wrapper.find('[data-slot="table-header"]').exists()).toBe(true)
  })

  it('renders body slot content', () => {
    const wrapper = mount(Table, {
      slots: {
        default: '<tr><td>Row</td></tr>',
      },
    })
    expect(wrapper.text()).toContain('Row')
    expect(wrapper.find('[data-slot="table-body"]').exists()).toBe(true)
  })

  it('marks data-hoverable on the body', () => {
    const wrapper = mount(Table, {
      props: { hoverable: true },
    })
    expect(wrapper.find('[data-slot="table-body"]').attributes('data-hoverable')).toBe('true')
  })

  it('marks data-striped on the body', () => {
    const wrapper = mount(Table, {
      props: { striped: true },
    })
    expect(wrapper.find('[data-slot="table-body"]').attributes('data-striped')).toBe('true')
  })

  it('respects fullWidth prop', () => {
    const wrapper = mount(Table, {
      props: { fullWidth: true },
    })
    expect(wrapper.find('table').classes()).toContain('w-full')
  })

  it('respects variant prop', () => {
    const wrapper = mount(Table, {
      props: { variant: 'secondary' },
    })
    expect(wrapper.find('[data-slot="table-root"]').classes()).toContain('table-root--secondary')
  })

  it('renders the footer slot', () => {
    const wrapper = mount(Table, {
      slots: {
        footer: '<tr><td>Footer</td></tr>',
      },
    })
    expect(wrapper.find('[data-slot="table-footer"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Footer')
  })

  it('merges custom class with table base class', () => {
    const wrapper = mount(Table, {
      props: { class: 'rounded-md' },
    })
    expect(wrapper.find('[data-slot="table-root"]').classes()).toContain('rounded-md')
  })

  it('TableColumn renders a th', () => {
    const wrapper = mount(TableColumn, {
      slots: { default: 'Name' },
    })
    expect(wrapper.element.tagName).toBe('TH')
    expect(wrapper.text()).toContain('Name')
  })

  it('TableRow renders a tr', () => {
    const wrapper = mount(TableRow, {
      slots: { default: '<td>Cell</td>' },
    })
    expect(wrapper.element.tagName).toBe('TR')
    expect(wrapper.find('td').exists()).toBe(true)
  })

  it('TableCell renders a td', () => {
    const wrapper = mount(TableCell, {
      slots: { default: 'Value' },
    })
    expect(wrapper.element.tagName).toBe('TD')
    expect(wrapper.text()).toContain('Value')
  })

  it('TableRow supports isSelected prop', () => {
    const wrapper = mount(TableRow, {
      props: { isSelected: true },
    })
    expect(wrapper.find('[data-slot="table-row"]').attributes('data-selected')).toBe('true')
  })

  it('TableRow supports isDisabled prop', () => {
    const wrapper = mount(TableRow, {
      props: { isDisabled: true },
    })
    expect(wrapper.find('[data-slot="table-row"]').attributes('data-disabled')).toBe('true')
  })
})