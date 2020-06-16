import { uppercase } from './index'

describe('uppercase', () => {
  test('undefined inputs', () => {
    const { valid, message } = uppercase(undefined).validator(undefined);
    expect(valid).toBe(false);
    expect(message).toBe('No input value');
  });

  test('null inputs', () => {
    const { valid, message } = uppercase(null).validator(null);
    expect(valid).toBe(false);
    expect(message).toBe('No input value');
  });

  test('loose, passing', () => {
    const { valid, message } = uppercase().validator('aAaAaA');
    expect(valid).toBe(true);
    expect(message).toBeUndefined();
  })

  test('loose, failing', () => {
    const { valid, message } = uppercase().validator('aaaaaa');
    expect(valid).toBe(false);
    expect(message).toBe('Must contain at least one uppercase character');
  })

  test('strict, passing', () => {
    const { valid, message } = uppercase(true).validator('AAAAAA');
    expect(valid).toBe(true);
    expect(message).toBeUndefined();
  })

  test('strict, failing', () => {
    const { valid, message } = uppercase(true).validator('aaaaaa');
    expect(valid).toBe(false);
    expect(message).toBe('Must contain only uppercase characters');
  })
})
