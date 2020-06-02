import { Rule } from '../types/index';
import { isEmpty } from '../utils/isEmpty';

export const required = (): Rule => {
  return {
    validator(value) {
      if (value !== '' && !isEmpty(value)) {
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
