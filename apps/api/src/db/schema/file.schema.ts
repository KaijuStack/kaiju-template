import { index, pgSchema, text } from 'drizzle-orm/pg-core';
import { isNull } from 'drizzle-orm';

import { defaultColumns } from './column.helpers';

export const fileSchema = pgSchema('file');

export const fileBase = fileSchema.table(
  'file_base',
  {
    ...defaultColumns,
    name: text().notNull(),
  },
  (t) => ({
    deletedAtIdx: index().on(t.deleted_at).where(isNull(t.deleted_at)),
  }),
);

export const file = fileSchema
  .view('file')
  .as((qb) => qb.select().from(fileBase).where(isNull(fileBase.deleted_at)));
