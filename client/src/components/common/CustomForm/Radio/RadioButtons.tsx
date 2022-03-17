import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import { RadioButtonType } from '../../template/types';
import styles from './RadioButtons.module.css';
import DirectionIcons from '../../template/DirectionIcons';

interface RadioButtonsProps {
  name: string;
  title: string;
  type: string;
  radioButtons: string[];
  initialValue: any;
  setFieldValue: (field: string, value: any) => void;
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}

const RadioButtons: React.FC<RadioButtonsProps> = (props) => {
  const {
    name, title, type, radioButtons, initialValue, setFieldValue, errors, touched,
  } = props;
  const [value, setValue] = React.useState(initialValue);

  // value selector buttons
  const handleSelect = (event: React.MouseEvent<HTMLElement>, newSelected: string) => {
    if (newSelected !== null && newSelected !== value) {
      setFieldValue(name, newSelected);
      setValue(newSelected);
    }
  };

  // // set value selected in redux
  // React.useEffect(() => {
  //   dispatch(setBrandProductAction(valueSelected));
  //   /* eslint-disable react-hooks/exhaustive-deps */
  // }, [valueSelected]);

  return (
    <>
      <h2>{title}</h2>
      <ToggleButtonGroup
        className={styles.radioBtnBox}
        value={value}
        exclusive
        onChange={handleSelect}
        aria-label={`${title} options`}
      >
        {radioButtons.map(
          (button) => (
            <ToggleButton
              key={button}
              name={name}
              color={errors[name] && touched[name] ? 'error' : 'standard'}
              value={button}
              aria-label={button}
              className={styles.radioBtn}
            >
              {type === RadioButtonType.TEXT ? (
                button
              ) : (
                type === RadioButtonType.ICON && (
                  DirectionIcons(button)
                ))}
            </ToggleButton>
          ),
        )}
      </ToggleButtonGroup>
      {errors[name] && touched[name] && (
        <div className={styles.error}>{errors.name}</div>
      )}
    </>
  );
};

export default RadioButtons;
