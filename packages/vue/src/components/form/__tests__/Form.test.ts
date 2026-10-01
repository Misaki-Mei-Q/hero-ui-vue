import { afterEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { Form } from '../index'

afterEach(() => {
  document.body.innerHTML = ''
})

describe('Form', () => {
  it('renders a form element with default slot content', () => {
    const wrapper = mount(Form, {
      slots: { default: '<input name="email" />' },
    })

    expect(wrapper.element.tagName).toBe('FORM')
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('emits submit event when form is submitted', async () => {
    const wrapper = mount(Form, {
      attachTo: document.body,
      slots: { default: '<button type="submit">Submit</button>' },
    })

    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('submit')).toBeTruthy()
  })

  it('prevents the default submit reload behavior', async () => {
    mount(Form, {
      attachTo: document.body,
      slots: { default: '<button type="submit">Submit</button>' },
    })

    const form = document.querySelector('form') as HTMLFormElement
    const submitEvent = new Event('submit', { cancelable: true })
    form.dispatchEvent(submitEvent)
    expect(submitEvent.defaultPrevented).toBe(true)
  })

  it('marks data-submitted attribute after submission', async () => {
    const wrapper = mount(Form, {
      attachTo: document.body,
      slots: { default: '<button type="submit">Submit</button>' },
    })

    await wrapper.find('form').trigger('submit')

    const attrs = wrapper.find('form').attributes()
    expect(attrs['data-submitted']).toBe('true')
  })

  it('emits reset event when reset is triggered on the form', async () => {
    const wrapper = mount(Form, {
      attachTo: document.body,
      slots: { default: '<button type="reset">Reset</button>' },
    })

    await wrapper.find('form').trigger('reset')
    expect(wrapper.emitted('reset')).toBeTruthy()
  })

  it('reactive errors prop is reflected in the rendered form', async () => {
    const wrapper = mount(Form, {
      props: { errors: { email: 'Invalid email' } },
    })

    await wrapper.setProps({ errors: { email: 'Email already taken' } })
    const nextErrors = wrapper.props('errors')
    expect(nextErrors?.email).toBe('Email already taken')
  })

  it('uses provided className and merges with form classes', () => {
    const wrapper = mount(Form, {
      props: { class: 'rounded-md' },
    })

    expect(wrapper.find('form').classes()).toContain('rounded-md')
  })

  it('marks data-submitting when isSubmitting prop is true', () => {
    const wrapper = mount(Form, {
      props: { isSubmitting: true },
    })

    expect(wrapper.find('form').attributes('data-submitting')).toBe('true')
  })

  it('renders novalidate so HTML5 validation can be opted in via prop', () => {
    const wrapper = mount(Form, { props: { validationBehavior: 'aria' } })
    expect(wrapper.find('form').attributes('novalidate')).toBe('')
  })
})