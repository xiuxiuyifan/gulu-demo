import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import GCheckbox from '../../src/components/checkbox/g-checkbox'

describe('checkbox.vue', () => {
  it('checkbox存在', () => {
    const wrapper = mount(GCheckbox)
    console.log(wrapper.exists())
    expect(wrapper.exists()).to.be.true
  })
})

