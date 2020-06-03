import { validate } from './index';
import { required } from '../required/index';
import { startsWithChar } from '../startsWithChar/index';
import { endsWithChar } from '../endsWithChar/index';
import { hasMinMax } from '../hasMinMax/index';

describe('validate', () => {
  test('no input or rules', () => {
    const {valid, message} = validate('', [])
    expect(valid).toBe(true)
    expect(message).toBe(undefined)
  })

  test('one rule, failing', () => {
    const {valid, message} = validate('', [ required() ])
    expect(valid).toBe(false)
    expect(message).toBe('Required')
  })

  test('one rule, passing', () => {
    const {valid, message} = validate('hello!', [ required() ])
    expect(valid).toBe(true)
    expect(message).toBe(undefined)
  })

  test('multiple rules, failing first', () => {
    const {valid, message} = validate('b', [ startsWithChar('a'), hasMinMax({ min: 10 }) ])
    expect(valid).toBe(false)
    expect(message).toBe('Must begin with [a]')
  })

  test('multiple rules, failing second', () => {
    const {valid, message} = validate('a', [ startsWithChar('a'), hasMinMax({ min: 10 }) ])
    expect(valid).toBe(false)
    expect(message).toBe('Must have length greater than [10]')
  })

  test('multiple rules, failing second - rule order swapped', () => {
    const {valid, message} = validate('bbb', [ hasMinMax({ min: 2 }), startsWithChar('a') ])
    expect(valid).toBe(false)
    expect(message).toBe('Must begin with [a]')
  })

  test('multiple rules, passing', () => {
    const {valid, message} = validate('hello!', [ required(), hasMinMax({ min: 2 }), startsWithChar('h') ])
    expect(valid).toBe(true)
    expect(message).toBe(undefined)
  })
});
