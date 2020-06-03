import { hasMinMax } from './index';

describe('Has min max', () => {
  test('undefined inputs', () => {
    const { valid, message } = hasMinMax(undefined).validator(undefined);
    expect(valid).toBe(false);
    expect(message).toBe('No input value');
  });

  test('null inputs', () => {
    const { valid, message } = hasMinMax(null).validator(null);
    expect(valid).toBe(false);
    expect(message).toBe('No input value');
  });

  test('invalid rule input', () => {
    const { valid, message } = hasMinMax(undefined).validator('a');
    expect(valid).toBe(false);
    expect(message).toBe('Rule options invalid');
  });

  test('no input', () => {
    const { valid, message } = hasMinMax({}).validator('a');
    expect(valid).toBe(true);
    expect(message).toBe(undefined);
  });

  test('min only, passing', () => {
    const { valid, message } = hasMinMax({ min: 0 }).validator('a');
    expect(valid).toBe(true);
    expect(message).toBe(undefined);
  });

  test('max only, passing', () => {
    const { valid, message } = hasMinMax({ max: 5 }).validator('a');
    expect(valid).toBe(true);
    expect(message).toBe(undefined);
  });

  test('min only, failing', () => {
    const { valid, message } = hasMinMax({ min: 3 }).validator('a');
    expect(valid).toBe(false);
    expect(message).toBe('Must have length greater than [3]');
  });

  test('max only, failing', () => {
    const { valid, message } = hasMinMax({ max: 5 }).validator('aaaaaa');
    expect(valid).toBe(false);
    expect(message).toBe('Must have length less than [5]');
  });

  test('min and max, passing', () => {
    const { valid, message } = hasMinMax({ min: 3, max: 5 }).validator('aaaa');
    expect(valid).toBe(true);
    expect(message).toBe(undefined);
  });

  test('min and max, failing - too short', () => {
    const { valid, message } = hasMinMax({ min: 3, max: 5 }).validator('a');
    expect(valid).toBe(false);
    expect(message).toBe('Must have length greater than [3]');
  });

  test('min and max, failing - too long', () => {
    const { valid, message } = hasMinMax({ min: 3, max: 5 }).validator(
      'aaaaaa'
    );
    expect(valid).toBe(false);
    expect(message).toBe('Must have length less than [5]');
  });
});
