import { Status, Rule } from '../types/index';

export const validate = (value: string, rules: Rule[]): Status => {
  for (const rule of rules) {
    const { valid, message } = rule.validator(value);
    if (!valid) {
      return {
        valid: false,
        message: message,
      };
    }
  }

  return {
    valid: true,
  };
};
