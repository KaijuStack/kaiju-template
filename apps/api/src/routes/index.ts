import { Hono } from 'hono';

import file from './file/file.controller';

const app = new Hono().basePath('/api');

// eslint-disable-next-line
const _routes = app.route('/files', file);

export default app;
export type AppType = typeof _routes;
