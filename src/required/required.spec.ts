import { required } from './index';

describe('required', () => {
  test('undefined input', () => {
    const { valid, message } = required().validator(undefined);
    expect(valid).toBe(false);
    expect(message).toBe('Required');
  });

  test('null input', () => {
    const { valid, message } = required().validator(null);
    expect(valid).toBe(false);
    expect(message).toBe('Required');
  });

  test('empty string input', () => {
    const { valid, message } = required().validator('');
    expect(valid).toBe(false);
    expect(message).toBe('Required');
  });

  test('short string input', () => {
    const { valid, message } = required().validator('test');
    expect(valid).toBe(true);
    expect(message).toBeUndefined();
  });

  test('long string input', () => {
    const { valid, message } = required().validator('pwouefwpieufbwpiebweig');
    expect(valid).toBe(true);
    expect(message).toBeUndefined();
  });
});
