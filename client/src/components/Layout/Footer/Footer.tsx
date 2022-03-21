import { Box } from '@mui/material';
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC<{}> = () => (
  <Box className={styles.root}>
    <p>
      Made with ❤ by
      <a href="https://github.com/milebrum" target="_blank" rel="noopener noreferrer">
        {' '}
        Milena Brum • 2022
      </a>
    </p>
  </Box>
);

export default Footer;
