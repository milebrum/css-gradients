import { TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import styles from './InputField.module.css';

interface InputFieldProps {
  name: string;
  title: string;
  label: string;
  initialValue: any;
  setFieldValue: (field: string, value: any) => void;
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    name, title, label, initialValue, setFieldValue, errors, touched,
  } = props;
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(name, event.target.value);
    setValue(event.target.value);
  };

  return (
    <>
      <h2 className={styles.inputTitle}>{title}</h2>
      <TextField
        error={!!errors[name] && !!touched[name]}
        helperText={errors[name]}
        id="outlined-basic"
        name={name}
        variant="outlined"
        size="small"
        className={styles.class}
        label={label}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default InputField;
