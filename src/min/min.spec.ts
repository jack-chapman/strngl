import { min } from './index';

describe('min', () => {
  test('undefined inputs', () => {
    const { valid, message } = min(undefined).validator(undefined);
    expect(valid).toBe(false);
    expect(message).toBe('No input value');
  });

  test('null inputs', () => {
    const { valid, message } = min(null).validator(null);
    expect(valid).toBe(false);
    expect(message).toBe('No input value');
  });

  test('invalid rule input', () => {
    const { valid, message } = min(undefined).validator('a');
    expect(valid).toBe(false);
    expect(message).toBe('Rule options invalid');
  });

  test('zero size', () => {
    const { valid, message } = min(0).validator('');
    expect(valid).toBe(true);
    expect(message).toBe(undefined);
  });

  test('one size, passing', () => {
    const { valid, message } = min(1).validator('a');
    expect(valid).toBe(true);
    expect(message).toBe(undefined);
  });

  test('two size, failing', () => {
    const { valid, message } = min(2).validator('a');
    expect(valid).toBe(false);
    expect(message).toBe('Must have length greater than [2]');
  });

  test('five size, passing', () => {
    const { valid, message } = min(5).validator('aaaaaa');
    expect(valid).toBe(true);
    expect(message).toBe(undefined);
  });

  test('five size, failing', () => {
    const { valid, message } = min(5).validator('aaaa');
    expect(valid).toBe(false);
    expect(message).toBe('Must have length greater than [5]');
  });
});
