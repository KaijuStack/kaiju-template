import { IconBrandFinder, IconFilePlus, IconHome } from '@tabler/icons-react';
import { Box, Group, Stack, Text } from '@mantine/core';
import { Outlet, NavLink } from 'react-router';
import clsx from 'clsx';

import classes from './styles.module.css';

const data = [{ link: '/', label: 'Home', icon: IconHome }];

const Navbar = () => {
  const links = data.map((item) => (
    <NavLink
      className={({ isActive }) =>
        clsx(classes.link, isActive && classes.linkActive)
      }
      to={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} />
      <Text className={classes.linkLabel}>{item.label}</Text>
    </NavLink>
  ));

  return (
    <Group
      h="100vh"
      gap={0}
    >
      <nav className={classes.navbar}>
        <Box className={classes.navbarMain}>
          <Group className={classes.header}>
            <IconBrandFinder className={classes.headerIcon} />
            <Text className={classes.headerTitle}>Documents Parser</Text>
          </Group>
          {links}
        </Box>

        <Box className={classes.footer}>
          <NavLink
            to="/upload-file"
            className={({ isActive }) =>
              clsx(classes.link, isActive && classes.linkActive)
            }
          >
            <IconFilePlus className={classes.linkIcon} />
            <Text className={classes.linkLabel}>Upload File</Text>
          </NavLink>
        </Box>
      </nav>
      <Stack className={classes.main}>
        <Outlet />
      </Stack>
    </Group>
  );
};

export default Navbar;
