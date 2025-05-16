import { hc } from 'hono/client';

import { AppType } from './routes';

export type Client = ReturnType<typeof hc<AppType>>;

export const hcWithType = (...args: Parameters<typeof hc>): Client =>
  hc<AppType>(...args);
