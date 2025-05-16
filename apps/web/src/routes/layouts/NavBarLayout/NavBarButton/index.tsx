import { NavLink } from 'react-router';
import clsx from 'clsx';
import { Text } from '@mantine/core';

import classes from './styles.module.css';

interface NavBarButtonProps {
  link: string;
  label: string;
  icon: React.ElementType;
}

const NavBarButton = ({ link, label, icon: Icon }: NavBarButtonProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(classes.link, isActive && classes.linkActive)
      }
      to={link}
      key={label}
    >
      <Icon className={classes.linkIcon} />
      <Text className={classes.linkLabel}>{label}</Text>
    </NavLink>
  );
};

export default NavBarButton;
