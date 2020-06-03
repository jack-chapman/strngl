import { startsWithChar } from './index'

describe('Starts with char', () => {
  test('undefined inputs', () => {
    const { valid, message } = startsWithChar(undefined).validator(undefined);
    expect(valid).toBe(false);
    expect(message).toBe('No input value');
  });

  test('null inputs', () => {
    const { valid, message } = startsWithChar(null).validator(null);
    expect(valid).toBe(false);
    expect(message).toBe('No input value');
  });

  test('empty rule options', () => {
    const { valid, message } = startsWithChar(undefined).validator('A');
    expect(valid).toBe(false);
    expect(message).toBe('Rule options invalid');
  });

  test('validate B against A', () => {
    const { valid, message } = startsWithChar('A').validator('B');
    expect(valid).toBe(false);
    expect(message).toBe('Must begin with [A]');
  });

  test('validate A against A', () => {
    const { valid, message } = startsWithChar('A').validator('A');
    expect(valid).toBe(true);
    expect(message).toBeUndefined();
  });

  test('validate A against Apple', () => {
    const { valid, message } = startsWithChar('A').validator('Apple');
    expect(valid).toBe(true);
    expect(message).toBeUndefined();
  });
})