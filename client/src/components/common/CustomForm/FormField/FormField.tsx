import { Box } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ColourButtons, InputField, RadioButtons } from '..';
import { gradientActions } from '../../../../redux/store/gradientSlice';
import CustomPopover from '../../button/CustomPopover/CustomPopover';
import {
  ConfigFormField, ConfigPopover, FormFieldOptions, FormFieldType,
} from '../../template/types';
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
  const [configPopover, setConfigPopover] = React.useState<ConfigPopover>();

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (formField.popover) {
      setConfigPopover(formField.popover);
    }
  }, []);

  React.useEffect(() => {
    setFieldValue(formField.id, value);
  }, [value]);

  const handleChange = (
    e: React.SyntheticEvent<HTMLElement> | null,
    newValue: string | string[],
    popoverContent?: string,
  ) => {
    if (configPopover && e) {
      setConfigPopover(
        {
          isOpen: true,
          where: e.currentTarget.getBoundingClientRect(),
          content: popoverContent,
        },
      );
    }
    setValue(newValue);
    switch (formField.id) {
      case FormFieldOptions.STYLE:
        dispatch(gradientActions.setStyle(newValue));
        break;
      case FormFieldOptions.DIRECTION:
        dispatch(gradientActions.setDirection(newValue));
        break;
      case FormFieldOptions.COLOURS:
        dispatch(gradientActions.setColours(newValue));
        break;
      case FormFieldOptions.OUTPUT_FORMAT:
        dispatch(gradientActions.setOutputFormat(newValue));
        break;
      default:
        break;
    }
  };

  const renderByType = () => {
    switch (formField.type) {
      case FormFieldType.RADIO:
        return formField.options && (
          <RadioButtons
            name={formField.id}
            radioButtons={formField.options}
            value={value}
            handleChange={handleChange}
            isError={isError}
          />
        );
      case FormFieldType.INPUT:
        return formField.label && (
          <InputField
            name={formField.id}
            label={formField.label}
            value={value}
            handleChange={handleChange}
            isError={isError}
            helperText={errors[formField.id]}
          />
        );
      case FormFieldType.COLOUR:
        return (
          <ColourButtons
            name={formField.id}
            handleChange={handleChange}
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
        {configPopover?.isOpen && configPopover?.content && (
          <CustomPopover
            configPopover={configPopover}
            setConfigPopover={setConfigPopover}
            type={formField.type}
            value={configPopover.content}
            handleChange={handleChange}
            colourValues={value}
          />
        )}
      </>
    </Box>
  );
};

export default FormField;
