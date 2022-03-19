import { Box } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import { ColourButtons, InputField, RadioButtons } from '..';
import { ConfigFormField, FormFieldType } from '../../template/types';
import styles from './FormField.module.css';

interface FormFieldProps {
  hiddenFields: boolean;
  formField: ConfigFormField;
  initialValue: any;
  setFieldValue: (field: string, value: any) => void;
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}

const FormField: React.FC<FormFieldProps> = (props) => {
  const {
    hiddenFields, formField, initialValue, setFieldValue, errors, touched,
  } = props;
  const [value, setValue] = React.useState(initialValue);
  const isError = !!errors[formField.id] && !!touched[formField.id];

  React.useEffect(() => {
    setFieldValue(formField.id, value);
  }, [value]);

  const renderByType = () => {
    switch (formField.type) {
      case FormFieldType.RADIO:
        return formField.optionsType && formField.options && (
          <RadioButtons
            name={formField.id}
            type={formField.optionsType}
            radioButtons={formField.options}
            value={value}
            setValue={setValue}
            isError={isError}
          />
        );
      case FormFieldType.INPUT:
        return formField.label && (
          <InputField
            name={formField.id}
            label={formField.label}
            value={value}
            setValue={setValue}
            isError={isError}
            helperText={errors[formField.id]}
          />
        );
      case FormFieldType.COLOUR:
        return (
          <ColourButtons
            name={formField.id}
            colourValues={value}
            setValue={setValue}
            isError={isError}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box className={styles.root}>
      <>
        {((hiddenFields && formField.display) || !hiddenFields) && (
          <Box className={styles.formSection} key={formField.id}>
            <h2>{formField.title}</h2>
            {renderByType()}
          </Box>
        )}
        {isError && formField.type !== FormFieldType.INPUT && (
          <Box className={styles.error}>{errors[formField.id]}</Box>
        )}
      </>
    </Box>
  );
};

export default FormField;
