import AppHeader from '@/components/AppHeader.vue'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('AppHeader.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'Hello World!'
    const wrapper = shallowMount(AppHeader, { propsData: { title } })

    expect(wrapper.text()).to.include(title)
  })
})
