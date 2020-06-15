import { Rule } from '../types/index';
import {
  isEmpty,
  isNull,
  isUndefined,
  noInputStatus,
  invalidOptionsStatus,
} from '../utils/index';

export const min = (size: number): Rule => {
  return {
    validator(value) {
      const noInput = isEmpty(value);
      if (noInput) {
        return noInputStatus();
      }
      if (isUndefined(size) || isNull(size)) {
        return invalidOptionsStatus();
      }
      if (value.length < size) {
        return {
          valid: false,
          message: `Must have length greater than [${size}]`,
        };
      }
      return {
        valid: true,
      };
    },
  };
};
