import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Button } from '@mui/material';
import styles from './CustomForm.module.css';
import { FormField, FormFieldType } from '../template/types';
import { ColourButton, InputField, RadioButtons } from '.';

interface FormProps {
  onComplete: (values: Record<string, any>) => void;
  formFields: FormField[];
  submitLabel: string;
  initialValues: Record<string, any>;
}

const CustomForm: React.FC<FormProps> = (props) => {
  const {
    onComplete, formFields, submitLabel, initialValues,
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

  const renderFields = (formField: FormField) => {
    switch (formField.type) {
      case FormFieldType.RADIO:
        return formField.optionsType && formField.options && (
          <Box className={styles.formSection} key={formField.id}>
            <RadioButtons
              title={formField.title}
              type={formField.optionsType}
              radioButtons={formField.options}
              initialValue={initialValues[formField.id]}
            />
          </Box>
        );
      case FormFieldType.INPUT:
        return (
          <Box className={styles.formSection} key={formField.id}>
            <InputField title={formField.title} />
          </Box>
        );
      case FormFieldType.COLOUR:
        return (
          <Box className={styles.formSection} key={formField.id}>
            <ColourButton title={formField.title} />
          </Box>
        );
      default:
        return null;
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    author: Yup.string().required('This field is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        onComplete(values);
      }}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        {formFields.map((formField) => (
          formField.display && renderFields(formField)
        ))}
        {hiddenFields.map((hiddenField) => (
          renderFields(hiddenField)
        ))}
        <Button type={areHiddenFields ? 'button' : 'submit'} onClick={() => areHiddenFields && showHiddenFields()}>
          {submitLabel}
        </Button>
      </Form>
    </Formik>
  );
};

export default CustomForm;
