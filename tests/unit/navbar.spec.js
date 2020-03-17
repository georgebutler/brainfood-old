import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import AppNavbar from '@/components/AppNavbar.vue'

describe('AppNavbar.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'Hello World!'
    const wrapper = shallowMount(AppNavbar, {
      propsData: { title }
    })

    expect(wrapper.text()).to.include(title)
  })
})
