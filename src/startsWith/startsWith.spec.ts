import { startsWith } from './index'

describe('Starts with', () => {
  test('undefined inputs', () => {
    expect(startsWith(undefined).validator(undefined).valid).toBe(false)
  })

  test('null inputs', () => {
    expect(startsWith(null).validator(null).valid).toBe(false)
  })

  test('empty inputs', () => {
    expect(startsWith('').validator('').valid).toBe(false)
  })

  test('validate B against A', () => {
    expect(startsWith('A').validator('B').valid).toBe(false)
  })

  test('validate A against A', () => {
    expect(startsWith('A').validator('A').valid).toBe(true)
  })

  test('validate A against Apple', () => {
    expect(startsWith('A').validator('Apple').valid).toBe(true)
  })
})