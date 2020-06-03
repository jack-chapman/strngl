import { endsWithChar } from './index'

describe('Starts with', () => {
  test('undefined inputs', () => {
    expect(endsWithChar(undefined).validator(undefined).valid).toBe(false)
  })

  test('null inputs', () => {
    expect(endsWithChar(null).validator(null).valid).toBe(false)
  })

  test('empty inputs', () => {
    expect(endsWithChar('').validator('').valid).toBe(false)
  })

  test('validate B against A', () => {
    expect(endsWithChar('A').validator('B').valid).toBe(false)
  })

  test('validate A against A', () => {
    expect(endsWithChar('A').validator('A').valid).toBe(true)
  })

  test('validate A against Apple', () => {
    expect(endsWithChar('e').validator('Apple').valid).toBe(true)
  })
})