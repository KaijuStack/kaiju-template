import { z } from 'zod';

type StringOptions = {
  isRequired?: boolean;
  min?: number;
  max?: number;
  allowedPatternRegex?: RegExp;
  isNullable?: boolean;
};

type StringReturn<T extends StringOptions> = T['isRequired'] extends true
  ? z.ZodString
  : T['isNullable'] extends true
    ? z.ZodOptional<z.ZodNullable<z.ZodString>>
    : z.ZodOptional<z.ZodString>;

const string = <T extends StringOptions>(
  {
    isRequired = false,
    min = 3,
    max = 64,
    allowedPatternRegex,
    isNullable = false,
  }: T = {} as T,
): StringReturn<T> => {
  let schema = z.string().trim().min(min).max(max);

  if (allowedPatternRegex) {
    schema = schema.regex(allowedPatternRegex);
  }

  if (isRequired) {
    return schema as StringReturn<T>;
  }

  if (isNullable) {
    return schema.nullable().optional() as StringReturn<T>;
  }

  return schema.optional() as StringReturn<T>;
};

type NumberOptions = {
  isRequired?: boolean;
  min?: number;
  max?: number;
  isNullable?: boolean;
};

type NumberReturn<T extends NumberOptions> = T['isRequired'] extends true
  ? z.ZodNumber
  : T['isNullable'] extends true
    ? z.ZodOptional<z.ZodNullable<z.ZodNumber>>
    : z.ZodOptional<z.ZodNumber>;

const number = <T extends NumberOptions>(
  { isRequired = false, min = 1, max = 65535, isNullable = false }: T = {} as T,
): NumberReturn<T> => {
  let schema = z.coerce.number();

  if (min !== undefined) {
    schema = schema.min(min);
  }

  if (max !== undefined) {
    schema = schema.max(max);
  }

  if (isRequired) {
    return schema as NumberReturn<T>;
  }

  if (isNullable) {
    return schema.nullable().optional() as NumberReturn<T>;
  }

  return schema.optional() as NumberReturn<T>;
};

export default { string, number };
