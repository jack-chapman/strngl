import { validate } from './index';
import { required } from '../required/index';
import { startsWithChar } from '../startsWithChar/index';
import { endsWithChar } from '../endsWithChar/index';

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

  test('with startsWithChar, valid', () => {
    const { valid } = validate('test', [startsWithChar('t')]);

    expect(valid).toBe(true);
  });

  test('with startsWithChar, failing options', () => {
    const { valid, message } = validate('', [startsWithChar('o')]);

    expect(valid).toBe(false);
    expect(message).toBe('No input value');
  });

  test('with startsWithChar, failing', () => {
    const { valid, message } = validate('p', [startsWithChar('o')]);

    expect(valid).toBe(false);
    expect(message).toBe('Must begin with o');
  });

  test('with endsWithChar, valid', () => {
    const { valid } = validate('test', [endsWithChar('t')]);

    expect(valid).toBe(true);
  });

  test('with endsWithChar, failing options', () => {
    const { valid, message } = validate('', [endsWithChar('o')]);

    expect(valid).toBe(false);
    expect(message).toBe('No input value');
  });

  test('with endsWithChar, failing', () => {
    const { valid, message } = validate('p', [endsWithChar('o')]);

    expect(valid).toBe(false);
    expect(message).toBe('Must end with o');
  });
});
