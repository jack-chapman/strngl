import { endsWithChar } from './index';

describe('Ends with char', () => {
  test('undefined inputs', () => {
    const { valid, message } = endsWithChar(undefined).validator(undefined);
    expect(valid).toBe(false);
    expect(message).toBe('No input value');
  });

  test('null inputs', () => {
    const { valid, message } = endsWithChar(null).validator(null);
    expect(valid).toBe(false);
    expect(message).toBe('No input value');
  });

  test('empty rule options', () => {
    const { valid, message } = endsWithChar(undefined).validator('A');
    expect(valid).toBe(false);
    expect(message).toBe('Rule options invalid');
  });

  test('validate B against A', () => {
    const { valid, message } = endsWithChar('A').validator('B');
    expect(valid).toBe(false);
    expect(message).toBe('Must end with [A]');
  });

  test('validate A against A', () => {
    const { valid, message } = endsWithChar('A').validator('A');
    expect(valid).toBe(true);
    expect(message).toBeUndefined();
  });

  test('validate e against Apple', () => {
    const { valid, message } = endsWithChar('e').validator('Apple');
    expect(valid).toBe(true);
    expect(message).toBeUndefined();
  });
});
