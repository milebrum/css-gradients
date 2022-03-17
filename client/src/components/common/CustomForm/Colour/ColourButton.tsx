import React from 'react';
import { Button } from '@mui/material';
import styles from './ColourButton.module.css';
import ColourSelector from '../../ColourSelector/ColourSelector';

interface ColourButtonProps {
  title: string;
}

const ColourButton: React.FC<ColourButtonProps> = (props) => {
  const { title } = props;

  return (
    <>
      <h2 className={styles.btn}>{title}</h2>
      <Button />
      <ColourSelector />
    </>
  );
};

export default ColourButton;
