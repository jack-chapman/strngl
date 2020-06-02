import { validate } from './index';
import { required } from '../required/index';

describe('validate', () => {
  test('with required, valid', () => {
    const { valid } = validate('test', [required()]);
    
    expect(valid).toBe(true)
  });

  test('with required, failing', () => {
    const { valid, message } = validate('', [required()]);
    
    expect(valid).toBe(false)
    expect(message).toBe('Required')
  });
});
