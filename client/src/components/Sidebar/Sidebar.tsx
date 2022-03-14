import React from 'react';
import { ColourSelector, Form, PrimaryButton } from '../common';
import { Footer, Header } from '../Layout';
import styles from './Sidebar.module.css';

const Sidebar: React.FC<{}> = () => (
  <div className={styles.root}>
    <Header />
    <PrimaryButton
      label="Load from template"
    />
    <Form />
    <ColourSelector />
    <Footer />
  </div>
);

export default Sidebar;
