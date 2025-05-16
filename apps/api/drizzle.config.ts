import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

import { postgresConfig } from './src/config';

export default defineConfig({
  out: './src/db/migrations',
  schema: './src/db/**/*.schema.ts',
  dialect: 'postgresql',
  dbCredentials: postgresConfig,
  migrations: {
    table: '__drizzle_migrations',
    schema: 'public',
  },
  casing: 'snake_case',
});
