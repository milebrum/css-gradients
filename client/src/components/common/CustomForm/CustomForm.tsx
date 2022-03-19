import React from 'react';
import { InferType, BaseSchema } from 'yup';
import {
  Formik, Form, FormikErrors, FormikTouched,
} from 'formik';
import { Button } from '@mui/material';
import styles from './CustomForm.module.css';
import { ConfigFormField } from '../template/types';
import FormField from './FormField/FormField';

interface FormProps {
  onComplete: (values: Record<string, any>) => void;
  formFields: ConfigFormField[];
  submitLabel: string;
  initialValues: Record<string, any>;
  validationSchema: InferType<BaseSchema>;
}

const CustomForm: React.FC<FormProps> = (props) => {
  const {
    onComplete, formFields, submitLabel, initialValues, validationSchema,
  } = props;
  const [hiddenFields, setHiddenFields] = React.useState(false);

  React.useEffect(() => {
    formFields.forEach((formField) => {
      if (!formField.display) {
        setHiddenFields(true);
      }
    });
  }, [formFields]);

  const renderField = (
    formField: ConfigFormField,
    setFieldValue: any,
    errors: FormikErrors<any>,
    touched: FormikTouched<any>,
  ) => (
    <FormField
      key={formField.id}
      hiddenFields={hiddenFields}
      formField={formField}
      initialValue={initialValues[formField.id]}
      setFieldValue={setFieldValue}
      errors={errors}
      touched={touched}
    />
  );

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
            renderField(formField, setFieldValue, errors, touched)
          ))}
          <Button type="submit" onClick={() => hiddenFields && setHiddenFields(false)}>
            {submitLabel}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
