import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { isDev, corsDevConfig } from 'config';

import file from './file/file.controller';

const app = new Hono().basePath('/api');

if (isDev) {
  app.use('*', cors(corsDevConfig));
}

// eslint-disable-next-line
const _routes = app.route('/files', file);

export default app;
export type AppType = typeof _routes;
