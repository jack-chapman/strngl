import { Rule } from '../types/index';
import { isEmpty } from '../utils/isEmpty';

export const startsWith = (character: string): Rule => {
  return {
    validator(value) {
      const inputsEmpty = isEmpty(value) || isEmpty(character);
      if (inputsEmpty) {
        return {
          valid: false,
          message: 'Validation rules invalid',
        };
      }
      const noMatch = value.charAt(0) !== character;
      if (noMatch) {
        return {
          valid: false,
          message: `Must begin with ${character}`,
        };
      }
      return {
        valid: true,
      };
    },
  };
};
