import { count, eq } from 'drizzle-orm';
import { CreateFileDto, GetFilesDto } from '@repo/schemas';

import { file, fileBase } from 'db';
import { db } from 'services';
import { formatPagination } from 'utils';

const createFile = async ({ data }: { data: CreateFileDto }) => {
  return db.insert(fileBase).values({
    name: data.file.name,
  });
};

const getFile = async ({ id }: { id: string }) => {
  const [fileRow] = await db
    .select({
      id: file.id,
      name: file.name,
      createdAt: file.created_at,
    })
    .from(file)
    .where(eq(file.id, id));

  if (!fileRow) {
    throw new Error('File not found');
  }

  return fileRow;
};

const getFiles = async ({ data }: { data: GetFilesDto }) => {
  const { limit, offset } = formatPagination(data.page, data.limit);

  const [filesRows, [total]] = await Promise.all([
    db
      .select({
        id: file.id,
        name: file.name,
        createdAt: file.created_at,
      })
      .from(file)
      .limit(limit)
      .offset(offset),
    db
      .select({
        count: count(),
      })
      .from(file),
  ]);

  return {
    results: filesRows,
    count: total?.count ?? 0,
  };
};

export default {
  createFile,
  getFile,
  getFiles,
};
