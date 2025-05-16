import { count, eq } from 'drizzle-orm';
import { CreateFileDto, GetFilesDto } from '@repo/schemas';

import { file, fileBase } from 'db';
import { db } from 'services';
import { formatPagination } from 'utils';

export const createFile = async ({ data }: { data: CreateFileDto }) => {
  const [existingFile] = await db
    .select()
    .from(fileBase)
    .where(eq(fileBase.name, data.name));

  if (existingFile) {
    throw new Error('File name already exists');
  }

  return db.insert(fileBase).values(data);
};

export const getFile = async ({ id }: { id: string }) => {
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

export const getFiles = async ({ params }: { params: GetFilesDto }) => {
  const { limit, offset } = formatPagination(params.page, params.limit);

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
