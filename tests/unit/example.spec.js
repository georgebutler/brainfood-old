import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import AppNavbar from '@/components/AppNavbar.vue'

describe('AppNavbar.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(AppNavbar, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
