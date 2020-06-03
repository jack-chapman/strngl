import { Rule } from '../types/index';
import { isEmpty } from '../utils/isEmpty';

export const endsWithChar = (character: string): Rule => {
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
      const noMatch = value.charAt(value.length - 1) !== character;
      if (noMatch) {
        return {
          valid: false,
          message: `Must end with ${character}`,
        };
      }
      return {
        valid: true,
      };
    },
  };
};
