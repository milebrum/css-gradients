import { Button } from '@mui/material';
import React from 'react';
import styles from './PrimaryButton.module.css';

interface PrimaryButtonProps {
  label: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  const { label } = props;

  return (
    <Button className={styles.btn}>{label}</Button>
  );
};

export default PrimaryButton;
