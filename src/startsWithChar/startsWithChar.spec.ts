import { startsWithChar } from './index'

describe('Starts with', () => {
  test('undefined inputs', () => {
    expect(startsWithChar(undefined).validator(undefined).valid).toBe(false)
  })

  test('null inputs', () => {
    expect(startsWithChar(null).validator(null).valid).toBe(false)
  })

  test('empty inputs', () => {
    expect(startsWithChar('').validator('').valid).toBe(false)
  })

  test('validate B against A', () => {
    expect(startsWithChar('A').validator('B').valid).toBe(false)
  })

  test('validate A against A', () => {
    expect(startsWithChar('A').validator('A').valid).toBe(true)
  })

  test('validate A against Apple', () => {
    expect(startsWithChar('A').validator('Apple').valid).toBe(true)
  })
})