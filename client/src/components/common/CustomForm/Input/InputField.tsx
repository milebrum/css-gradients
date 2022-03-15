import { TextField } from '@mui/material';
import React from 'react';
import styles from './InputField.module.css';

interface InputFieldProps {
  title: string;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { title } = props;

  return (
    <>
      <h2>{title}</h2>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" className={styles.class} />
    </>
  );
};

export default InputField;
