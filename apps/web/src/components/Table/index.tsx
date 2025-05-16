import {
  Table as BaseTable,
  TableProps as BaseTableProps,
  Pagination,
  Stack,
  Group,
  Text,
  Title,
} from '@mantine/core';

interface TableProps extends BaseTableProps {
  title: string;
  page: number;
  onPageChange: (page: number) => void;
  perPage: number;
  count: number;
}

export function Table({
  title,
  page,
  onPageChange,
  count,
  perPage,
  ...props
}: TableProps) {
  const message = `Showing ${perPage * (page - 1) + 1} – ${Math.min(count, perPage * page)} of ${count}`;

  return (
    <Stack align="flex-end">
      <Group
        pl="xs"
        w="100%"
        justify="space-between"
      >
        <Title order={3}>{title}</Title>
        <Group justify="flex-end">
          <Text size="sm">{message}</Text>
          <Pagination
            withPages={false}
            total={count}
            value={page}
            onChange={onPageChange}
          />
        </Group>
      </Group>
      <BaseTable
        verticalSpacing="xs"
        {...props}
      />
    </Stack>
  );
}

export default Table;
