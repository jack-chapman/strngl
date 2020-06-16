import { Rule } from '../types/index';
import {
  isEmpty,
  isNull,
  isUndefined,
  noInputStatus,
  invalidOptionsStatus,
} from '../utils/index';

export const uppercase = (strict = false): Rule => {
  return {
    validator(value) {
      const noInput = isEmpty(value);
      if (noInput) {
        return noInputStatus();
      }
      if (isUndefined(strict) || isNull(strict)) {
        return invalidOptionsStatus();
      }
      const hasUppercaseOnly = !/[^A-Z]/.test(value)
      const hasSomeUppercase = /[A-Z]/.test(value)
      if (strict && !hasUppercaseOnly) {
        return {
          valid: false,
          message: 'Must contain only uppercase characters',
        };
      }
      if (!strict && !hasSomeUppercase) {
        return {
          valid: false,
          message: 'Must contain at least one uppercase character',
        };
      }
      return {
        valid: true,
      };
    },
  };
};
