import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import GButton from '../../src/button'

describe('button.vue', () => {
  it('测试button存在', () => {
    const wrapper = mount(GButton)
    expect(typeof GButton).eq('object')
  })
  it('button可以设置 icon', () => {
    const wrapper = mount(GButton, {
      propsData: {
        icon: 'setting',
      },
    })
    expect(wrapper.find('use').attributes()['href']).eq('#i-setting')
  })
  it('button可以进行lodding 数据加载', () => {
    const wrapper = mount(GButton, {
      propsData: {},
    })
  })
})

