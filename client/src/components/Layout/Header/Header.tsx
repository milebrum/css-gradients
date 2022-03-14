import React from 'react';
import styles from './Header.module.css';

const Header: React.FC<{}> = () => (
  <div className={styles.root}>
    <h1 className={styles.textLogo}>
      <a href="/">
        CSS Gradient Generator
      </a>
    </h1>
  </div>
);

export default Header;
