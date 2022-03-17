import React from 'react';
import { InferType, BaseSchema } from 'yup';
import {
  Formik, Form, FormikErrors, FormikTouched,
} from 'formik';
import { Box, Button } from '@mui/material';
import styles from './CustomForm.module.css';
import { FormField, FormFieldType } from '../template/types';
import { ColourButton, InputField, RadioButtons } from '.';

interface FormProps {
  onComplete: (values: Record<string, any>) => void;
  formFields: FormField[];
  submitLabel: string;
  initialValues: Record<string, any>;
  validationSchema: InferType<BaseSchema>;
}

const CustomForm: React.FC<FormProps> = (props) => {
  const {
    onComplete, formFields, submitLabel, initialValues, validationSchema,
  } = props;
  const [areHiddenFields, setAreHiddenFields] = React.useState(false);
  const [hiddenFields, setHiddenFields] = React.useState<FormField[]>([]);

  React.useEffect(() => {
    formFields.forEach((formField) => {
      if (!formField.display) {
        setAreHiddenFields(true);
      }
    });
  }, [formFields]);

  const showHiddenFields = () => {
    const onlyHiddenFields = formFields.filter((f) => !f.display);
    onlyHiddenFields.forEach((field) => {
      hiddenFields.push(field);
    });
    setHiddenFields(hiddenFields);
    setAreHiddenFields(false);
  };

  const renderFields = (
    formField: FormField,
    setFieldValue: any,
    errors: FormikErrors<any>,
    touched: FormikTouched<any>,
  ) => {
    switch (formField.type) {
      case FormFieldType.RADIO:
        return formField.optionsType && formField.options && (
          <Box className={styles.formSection} key={formField.id}>
            <RadioButtons
              name={formField.id}
              title={formField.title}
              type={formField.optionsType}
              radioButtons={formField.options}
              initialValue={initialValues[formField.id]}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
            />
          </Box>
        );
      case FormFieldType.INPUT:
        return formField.label && (
          <Box className={styles.formSection} key={formField.id}>
            <InputField
              name={formField.id}
              title={formField.title}
              label={formField.label}
              initialValue={initialValues[formField.id]}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
            />
          </Box>
        );
      case FormFieldType.COLOUR:
        return (
          <Box className={styles.formSection} key={formField.id}>
            <ColourButton
              title={formField.title}
            />
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        onComplete(values);
      }}
    >
      {({ setFieldValue, errors, touched }) => (
        <Form className={styles.form}>
          {formFields.map((formField) => (
            formField.display && renderFields(formField, setFieldValue, errors, touched)
          ))}
          {hiddenFields.map((hiddenField) => (
            renderFields(hiddenField, setFieldValue, errors, touched)
          ))}
          <Button type="submit" onClick={() => areHiddenFields && showHiddenFields()}>
            {submitLabel}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
