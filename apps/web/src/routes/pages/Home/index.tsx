import { useState } from 'react';
import { NavLink } from 'react-router';
import { Text, Loader, Center } from '@mantine/core';

import { Table } from 'components';
import { filesApi } from 'api';

export function FilesPage() {
  const [page, setPage] = useState(1);

  const { data: files, isLoading } = filesApi.useList({
    page,
    limit: 10,
  });

  if (isLoading) {
    return (
      <Center h="100vh">
        <Loader />
      </Center>
    );
  }

  const tableData = {
    head: ['Title'],
    body: files?.results?.map((row) => [
      <NavLink
        to={`/files/${row.id}`}
        key={row.id}
        style={{ textDecoration: 'none', outline: 'none' }}
      >
        <Text c="blue">{row.name}</Text>
      </NavLink>,
    ]),
  };

  return (
    <Table
      title="Files"
      page={page}
      onPageChange={setPage}
      count={files?.count || 0}
      data={tableData}
    />
  );
}

export default FilesPage;
