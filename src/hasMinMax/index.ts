import { Rule } from '../types/index';
import {
  isEmpty,
  isNull,
  isUndefined,
  noInputStatus,
  invalidOptionsStatus,
} from '../utils/index';

export const hasMinMax = (options: { min?: number; max?: number }): Rule => {
  return {
    validator(value) {
      const noInput = isEmpty(value);
      if (noInput) {
        return noInputStatus();
      }
      if (isUndefined(options) || isNull(options)) {
        return invalidOptionsStatus();
      }
      const hasMin = !isUndefined(options.min);
      const hasMax = !isUndefined(options.max);
      if (!hasMin && !hasMax) {
        return {
          valid: true,
        };
      }
      if (hasMin) {
        if (value.length < options.min) {
          return {
            valid: false,
            message: `Must have length greater than [${options.min}]`,
          };
        }
      }
      if (hasMax) {
        if (value.length > options.max) {
          return {
            valid: false,
            message: `Must have length less than [${options.max}]`,
          };
        }
      }
      return {
        valid: true,
      };
    },
  };
};
