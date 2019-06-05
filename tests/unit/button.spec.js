import { expect } from 'chai'
import GButton from '../../src/button'

describe('button.vue', () => {
  it('测试button存在', () => {
    console.log(typeof GButton)
    expect(typeof GButton).eq('object')
  })
})

