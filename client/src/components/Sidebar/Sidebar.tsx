import { Box } from '@mui/material';
import React from 'react';
import styles from './Sidebar.module.css';

interface SidebarProps {
  sidebarElements: JSX.Element[];
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { sidebarElements } = props;

  return (
    <Box className={styles.root}>
      {sidebarElements.map((elem) => (
        elem
      ))}
    </Box>
  );
};

export default Sidebar;
