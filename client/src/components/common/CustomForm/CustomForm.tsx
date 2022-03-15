import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';
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

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    author: Yup.string().required('This field is required'),
  });

  const renderFields = (formField: FormField) => {
    switch (formField.type) {
      case FormFieldType.RADIO:
        return formField.optionsType && formField.options && (
          <RadioButtons
            title={formField.title}
            type={formField.optionsType}
            radioButtons={formField.options}
            initialValue={`${initialValues}.${formField.id}`}
          />
        );
      case FormFieldType.INPUT:
        return (
          <InputField title={formField.title} />
        );
      case FormFieldType.COLOUR:
        return (
          <ColourButton title={formField.title} />
        );
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        onComplete(values);
      }}
      validationSchema={validationSchema}
    >
      <Form>
        {formFields.map((formField) => (
          renderFields(formField)
        ))}
        <Button type="submit">
          {submitLabel}
        </Button>
      </Form>
    </Formik>
  );
};

export default CustomForm;
