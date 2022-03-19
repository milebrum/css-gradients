import { TextField } from '@mui/material';
import { FormikErrors } from 'formik';
import React, { SetStateAction } from 'react';
import styles from './InputField.module.css';

interface InputFieldProps {
  name: string;
  label: string;
  value: string;
  setValue: React.Dispatch<SetStateAction<any>>;
  isError: boolean;
  helperText?: string | FormikErrors<any> | string[] | FormikErrors<any>[];
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    name, label, value, setValue, isError, helperText,
  } = props;

  return (
    <TextField
      error={isError}
      helperText={helperText}
      id="outlined-basic"
      name={name}
      variant="outlined"
      size="small"
      className={styles.input}
      label={label}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
    />
  );
};

export default InputField;
