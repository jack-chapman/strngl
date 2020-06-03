import { Rule } from '../types/index';
import { isEmpty, noInputStatus, invalidOptionsStatus } from '../utils/index';

export const startsWithChar = (character: string): Rule => {
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
      const noMatch = value.charAt(0) !== character;
      if (noMatch) {
        return {
          valid: false,
          message: `Must begin with [${character}]`,
        };
      }
      return {
        valid: true,
      };
    },
  };
};
