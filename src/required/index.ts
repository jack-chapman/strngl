import { Rule } from '../types/index'
import { isEmpty } from '../utils/isEmpty'

export const required = (): Rule => {
  return {
    message: 'Required',
    validator (value) {
      if (value !== '' && !isEmpty(value)) {
        return {
          valid: true
        }
      }
      return {
        valid: false,
        message: 'Required'
      }
    }
  }
}