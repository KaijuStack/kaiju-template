import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { createFileSchema, getFilesSchema } from '@repo/schemas';

import fileService from './file.service';

const app = new Hono()
  .get('/', zValidator('query', getFilesSchema), async (c) => {
    const files = await fileService.getFiles({
      data: c.req.valid('query'),
    });

    return c.json(files);
  })
  .post('/', zValidator('json', createFileSchema), async (c) => {
    const file = await fileService.createFile({
      data: c.req.valid('json'),
    });

    return c.json(file, 201);
  })
  .get('/:id', async (c) => {
    const file = await fileService.getFile({
      id: c.req.param('id'),
    });

    return c.json(file);
  });

export default app;
