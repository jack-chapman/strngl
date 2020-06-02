import { validate } from './index';
import { required } from '../required/index';
import { startsWith } from '../startsWith/index';

describe('validate', () => {
  test('with required, valid', () => {
    const { valid } = validate('test', [required()]);

    expect(valid).toBe(true);
  });

  test('with required, failing', () => {
    const { valid, message } = validate('', [required()]);

    expect(valid).toBe(false);
    expect(message).toBe('Required');
  });

  test('with startsWith, valid', () => {
    const { valid } = validate('test', [startsWith('t')]);

    expect(valid).toBe(true);
  });

  test('with startsWith, failing options', () => {
    const { valid, message } = validate('', [startsWith('o')]);

    expect(valid).toBe(false);
    expect(message).toBe('Validation rules invalid');
  });

  test('with startsWith, failing', () => {
    const { valid, message } = validate('p', [startsWith('o')]);

    expect(valid).toBe(false);
    expect(message).toBe('Must begin with o');
  });
});
