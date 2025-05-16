import {
  Table as BaseTable,
  TableProps as BaseTableProps,
  Pagination,
  Stack,
  Group,
  Text,
  Title,
  Center,
} from '@mantine/core';

interface TableProps extends BaseTableProps {
  title: string;
  page: number;
  onPageChange: (page: number) => void;
  perPage?: number;
  count: number;
}

export function Table({
  title,
  page,
  onPageChange,
  count,
  perPage = 10,
  ...props
}: TableProps) {
  const message = `Showing ${perPage * (page - 1) + 1} – ${Math.min(count, perPage * page)} of ${count}`;

  const totalPages = Math.ceil(count / perPage);

  return (
    <Stack align="flex-end">
      <Group
        pl="xs"
        w="100%"
        justify="space-between"
      >
        <Title order={3}>{title}</Title>
        {count > 0 && (
          <Group justify="flex-end">
            <Text size="sm">{message}</Text>
            {count > perPage && (
              <Pagination
                withPages={false}
                total={totalPages}
                value={page}
                onChange={onPageChange}
              />
            )}
          </Group>
        )}
      </Group>
      {count > 0 ? (
        <BaseTable
          verticalSpacing="xs"
          {...props}
        />
      ) : (
        <Center
          h={400}
          w="100%"
        >
          <Title
            order={5}
            c="gray"
          >
            {`No ${title.toLowerCase()} found`}
          </Title>
        </Center>
      )}
    </Stack>
  );
}

export default Table;
