import { useState } from 'react';
import { NavLink } from 'react-router';
import { Text, Loader, Center } from '@mantine/core';

import { Table } from 'components';
import { filesApi } from 'api';

const data = [
  {
    title: 'Foundation',
    author: 'Isaac Asimov',
    year: 1951,
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    year: 1818,
  },
  {
    title: 'Solaris',
    author: 'Stanislaw Lem',
    year: 1961,
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
  },
  {
    title: 'The Left Hand of Darkness',
    author: 'Ursula K. Le Guin',
    year: 1969,
  },
  {
    title: 'A Scanner Darkly',
    author: 'Philip K Dick',
    year: 1977,
  },
];

const tableData = {
  head: ['Title', 'Author', 'Year'],
  body: data.map((row) => [
    <NavLink
      to={`/files/${row.title}`}
      key={row.title}
      style={{ textDecoration: 'none', outline: 'none' }}
    >
      <Text c="blue">{row.title}</Text>
    </NavLink>,
    row.author,
    row.year,
  ]),
};

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
