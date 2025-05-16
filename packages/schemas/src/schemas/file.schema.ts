import { z } from 'zod';

import validationField from '../validation-util';

export const createFileSchema = z.object({
  name: validationField.string({ isRequired: true, max: 20 }),
});

export type CreateFileDto = z.infer<typeof createFileSchema>;

export const getFilesSchema = z.object({
  page: validationField.number({
    isRequired: true,
    min: 1,
  }),
  limit: validationField.number({
    isRequired: true,
    min: 1,
    max: 100,
  }),
});

export type GetFilesDto = z.infer<typeof getFilesSchema>;
