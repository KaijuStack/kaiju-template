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
  const minError = JSON.stringify({ key: 'too_short', min });
  const maxError = JSON.stringify({ key: 'too_long', max });
  const invalidSymbol = JSON.stringify({ key: 'invalid_symbol' });

  let schema = z.string().trim().min(min, minError).max(max, maxError);

  if (allowedPatternRegex) {
    schema = schema.regex(allowedPatternRegex, invalidSymbol);
  }

  if (isRequired) {
    return schema as StringReturn<T>;
  }

  if (isNullable) {
    return schema.nullable().optional() as StringReturn<T>;
  }

  return schema.optional() as StringReturn<T>;
};

export default { string };
