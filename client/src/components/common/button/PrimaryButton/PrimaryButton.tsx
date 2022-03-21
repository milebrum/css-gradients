import { Button } from '@mui/material';
import React from 'react';
import styles from './PrimaryButton.module.css';

interface PrimaryButtonProps {
  label: string;
  onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  const { label, onClick } = props;

  return (
    <Button className={styles.btn} onClick={() => onClick()}>{label}</Button>
  );
};

export default PrimaryButton;
