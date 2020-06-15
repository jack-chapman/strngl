import { Status } from '../types/index';

export const isEmpty = (value: string): boolean => {
  return value === undefined || value === null;
};

export const isUndefined = (value: any): boolean => {
  return value === undefined;
};

export const isNull = (value: any): boolean => {
  return value === null;
};

export const noInputStatus = (): Status => {
  return {
    valid: false,
    message: 'No input value',
  };
};

export const invalidOptionsStatus = (): Status => {
  return {
    valid: false,
    message: 'Rule options invalid',
  };
};
