import React from 'react';
import styles from './Layout.module.css';

const Layout: React.FC<{}> = (props) => {
  const { children } = props;

  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

export default Layout;
