import { z } from 'zod';

import validationField from '../validation-util';

export const createFileSchema = z.object({
  name: validationField.string({ isRequired: true, max: 20 }),
});

export const updateFileSchema = z.object({
  name: validationField.string({ max: 20 }),
});
