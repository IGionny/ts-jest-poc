import {isFoo} from './is-foo'

describe('isFoo', () => {
  it('should test strings', () => {
    expect(isFoo('bar')).toBe(false)
    expect(isFoo('foo')).toBe(true)
  })
})