import { Hono } from 'hono';
import { hc } from 'hono/client';

export const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

// assign the client to a variable to calculate the type when compiling
const client = hc<typeof app>('');
export type Client = typeof client;

export const hcWithType = (...args: Parameters<typeof hc>): Client =>
  hc<typeof app>(...args);
