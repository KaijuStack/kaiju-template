import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

import { postgresConfig } from 'config';

import * as schema from 'db';

const pool = new Pool(postgresConfig);
const db = drizzle(pool, { schema });

export default db;
