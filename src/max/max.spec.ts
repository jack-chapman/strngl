import { max } from './index';

describe('max', () => {
  test('undefined inputs', () => {
    const { valid, message } = max(undefined).validator(undefined);
    expect(valid).toBe(false);
    expect(message).toBe('No input value');
  });

  test('null inputs', () => {
    const { valid, message } = max(null).validator(null);
    expect(valid).toBe(false);
    expect(message).toBe('No input value');
  });

  test('invalid rule input', () => {
    const { valid, message } = max(undefined).validator('a');
    expect(valid).toBe(false);
    expect(message).toBe('Rule options invalid');
  });

  test('zero size', () => {
    const { valid, message } = max(0).validator('');
    expect(valid).toBe(true);
    expect(message).toBe(undefined);
  });

  test('one size, passing', () => {
    const { valid, message } = max(1).validator('a');
    expect(valid).toBe(true);
    expect(message).toBe(undefined);
  });

  test('two size, failing', () => {
    const { valid, message } = max(2).validator('aaa');
    expect(valid).toBe(false);
    expect(message).toBe('Must have length less than or equal to [2]');
  });

  test('five size, passing', () => {
    const { valid, message } = max(5).validator('aaaaa');
    expect(valid).toBe(true);
    expect(message).toBe(undefined);
  });

  test('five size, failing', () => {
    const { valid, message } = max(5).validator('aaaaaa');
    expect(valid).toBe(false);
    expect(message).toBe('Must have length less than or equal to [5]');
  });

  test('exclusive, passing', () => {
    const { valid, message } = max(5, false).validator('aaaa');
    expect(valid).toBe(true);
    expect(message).toBe(undefined);
  })

  test('exclusive, failing', () => {
    const { valid, message } = max(5, false).validator('aaaaa');
    expect(valid).toBe(false);
    expect(message).toBe('Must have length less than [5]');
  })
});
