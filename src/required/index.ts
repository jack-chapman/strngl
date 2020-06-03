import { Rule } from '../types/index';
import { isEmpty } from '../utils/index';

export const required = (): Rule => {
  return {
    validator(value) {
      if (!isEmpty(value)) {
        return {
          valid: true,
        };
      }
      return {
        valid: false,
        message: 'Required',
      };
    },
  };
};
