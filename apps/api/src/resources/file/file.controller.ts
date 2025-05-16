import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { createFileSchema } from '@repo/schemas';

const app = new Hono()
  .get('/', (c) => c.json('list books'))
  .post('/', zValidator('json', createFileSchema), (c) =>
    c.json('create a book', 201),
  )
  .get('/:id', (c) => c.json(`get ${c.req.param('id')}`));

export default app;
