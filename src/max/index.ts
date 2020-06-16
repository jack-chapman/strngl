import { Rule } from '../types/index';
import {
  isEmpty,
  isNull,
  isUndefined,
  noInputStatus,
  invalidOptionsStatus,
} from '../utils/index';

export const max = (size: number, inclusive = true): Rule => {
  return {
    validator(value) {
      const noInput = isEmpty(value);
      if (noInput) {
        return noInputStatus();
      }
      if (isUndefined(size) || isNull(size)) {
        return invalidOptionsStatus();
      }
      if (inclusive && value.length > size) {
        return {
          valid: false,
          message: `Must have length less than or equal to [${size}]`,
        };
      }
      if (!inclusive && value.length >= size) {
        return {
          valid: false,
          message: `Must have length less than [${size}]`,
        };
      }
      return {
        valid: true,
      };
    },
  };
};
