import { useParams } from 'react-router';
import { Center, Loader, Text } from '@mantine/core';

import { filesApi } from 'api';

const FilePage = () => {
  const { id } = useParams();

  const { data, isLoading } = filesApi.useGet(id);

  if (isLoading) {
    return (
      <Center h="100vh">
        <Loader />
      </Center>
    );
  }

  return <Text>{data?.name}</Text>;
};

export default FilePage;
