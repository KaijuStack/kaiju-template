import { IconBrandFinder, IconFilePlus, IconHome } from '@tabler/icons-react';
import { Box, Button, Group, Stack, Text } from '@mantine/core';
import { useFileDialog } from '@mantine/hooks';
import { Outlet } from 'react-router';

import { filesApi } from 'api';

import NavBarButton from './NavBarButton';
import classes from './styles.module.css';

const links = [{ link: '/', label: 'Home', icon: IconHome }];

const Navbar = () => {
  const { mutate: createFile } = filesApi.useCreate();

  const fileDialog = useFileDialog({
    multiple: false,
    onChange: (files) => {
      console.log(files);

      const file = files?.[0];

      if (!file) return;

      createFile({
        name: file.name,
        file: file,
      });
    },
  });

  return (
    <Group className={classes.container}>
      <nav className={classes.navbar}>
        <Box className={classes.navbarMain}>
          <Group className={classes.header}>
            <IconBrandFinder className={classes.headerIcon} />
            <Text className={classes.headerTitle}>Parser</Text>
          </Group>
          {links.map((link) => (
            <NavBarButton
              key={link.label}
              {...link}
            />
          ))}
        </Box>

        <Box className={classes.footer}>
          <Button
            w="100%"
            onClick={() => fileDialog.open()}
            leftSection={<IconFilePlus />}
          >
            Upload File
          </Button>
        </Box>
      </nav>
      <Stack className={classes.main}>
        <Outlet />
      </Stack>
    </Group>
  );
};

export default Navbar;
