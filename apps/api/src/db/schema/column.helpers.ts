import { timestamp, uuid } from 'drizzle-orm/pg-core';

const timestampsColumns = {
  created_at: timestamp().defaultNow().notNull(),
  deleted_at: timestamp(),
};

const defaultColumns = {
  id: uuid().defaultRandom().primaryKey(),
  ...timestampsColumns,
};

export { defaultColumns };
