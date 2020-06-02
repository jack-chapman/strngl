import { Status, Rule } from "../types/index";

export const validate = (value: string, rules: Rule[]): Status => {
  for (const rule of rules) {
    if (!rule.validator(value).valid) {
      return {
        valid: false,
        message: rule.message
      }
    }
  }

  return {
    valid: true
  }
};