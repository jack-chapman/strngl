import { Rule } from '../types/index';
import { isEmpty } from '../utils/isEmpty';

export const startsWithChar = (character: string): Rule => {
  return {
    validator(value) {
      const noChar = isEmpty(character);
      if (noChar) {
        return {
          valid: false,
          message: 'Validation rules invalid',
        };
      }
      const noInput = isEmpty(value);
      if (noInput) {
        return {
          valid: false,
          message: `No input value`,
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
