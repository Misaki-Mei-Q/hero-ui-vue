import { describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Slider from '../Slider.vue'

describe('Slider debug', () => {
  it('logs rendered html', () => {
    const wrapper = mount(Slider, {
      props: { label: 'Test', modelValue: 30 },
    })
    console.log('HTML:', wrapper.html())
    console.log('element tagName:', wrapper.element.tagName)
    console.log('element outerHTML start:', wrapper.element?.outerHTML?.slice(0, 500))
  })
})