import { required } from './index'

describe('required', () => {
  test('undefined input', () => {
    const { valid } = required().validator(undefined)
    expect(valid).toBe(false)
  })

  test('null input', () => {
    const { valid } = required().validator(null)
    expect(valid).toBe(false)
  })

  test('empty string input', () => {
    const { valid } = required().validator('')
    expect(valid).toBe(false)
  })

  test('short string input', () => {
    const { valid } = required().validator('test')
    expect(valid).toBe(true)
  })

  test('long string input', () => {
    const { valid } = required().validator('pwouefwpieufbwpiebweig')
    expect(valid).toBe(true)
  })
})