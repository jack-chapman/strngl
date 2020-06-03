import { Rule } from '../types/index';
import { isEmpty, noInputStatus, invalidOptionsStatus } from '../utils/index';

export const endsWithChar = (character: string): Rule => {
  return {
    validator(value) {
      const noInput = isEmpty(value);
      if (noInput) {
        return noInputStatus();
      }
      const noChar = isEmpty(character);
      if (noChar) {
        return invalidOptionsStatus();
      }
      const noMatch = value.charAt(value.length - 1) !== character;
      if (noMatch) {
        return {
          valid: false,
          message: `Must end with [${character}]`,
        };
      }
      return {
        valid: true,
      };
    },
  };
};
