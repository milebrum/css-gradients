import { Box } from '@mui/material';
import React from 'react';
import styles from './Header.module.css';

const Header: React.FC<{}> = () => (
  <Box>
    <h1 className={styles.textLogo}>
      <a href="/">
        CSS Gradient Generator
      </a>
    </h1>
  </Box>
);

export default Header;
