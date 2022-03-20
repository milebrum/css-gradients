import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useSelector } from 'react-redux';
import styles from './RadioButtons.module.css';
import showGradientOptions from '../../../template/ShowGradientOptions';
import { DirectionIconsType, FormFieldOptions, StyleType } from '../../../template/types';

interface RadioButtonsProps {
  name: string;
  radioButtons: string[];
  handleChange: (e: React.MouseEvent<HTMLElement>, newValue: string) => void;
  isError: boolean;
}

const RadioButtons: React.FC<RadioButtonsProps> = (props) => {
  const {
    name, radioButtons, handleChange, isError,
  } = props;

  const gradientStyle = useSelector((state: any) => state.gradient.gradient.style);
  const gradientDirection = useSelector((state: any) => state.gradient.gradient.direction);
  const gradientOutput = useSelector((state: any) => state.gradient.gradient.outputFormat);

  // value selector buttons
  const handleSelect = (e: React.MouseEvent<HTMLElement>, newSelected: string) => {
    if (newSelected !== null) {
      handleChange(e, newSelected);
    }
  };

  const setValue = () => {
    switch (name) {
      case FormFieldOptions.STYLE:
        return gradientStyle;
      case FormFieldOptions.DIRECTION:
        return gradientDirection;
      case FormFieldOptions.OUTPUT_FORMAT:
        return gradientOutput;
      default:
        return null;
    }
  };

  // // set value selected in redux
  // React.useEffect(() => {
  //   dispatch(setBrandProductAction(valueSelected));
  //   /* eslint-disable react-hooks/exhaustive-deps */
  // }, [valueSelected]);

  return (
    <ToggleButtonGroup
      className={styles.radioBtnBox}
      value={setValue()}
      exclusive
      onChange={handleSelect}
    >
      {radioButtons.map(
        (button) => (
          <ToggleButton
            key={button}
            name={name}
            color={isError ? 'error' : 'standard'}
            value={button}
            aria-label={button}
            className={`${styles.radioBtn} ${gradientStyle === StyleType.LINEAR && button === DirectionIconsType.CENTER && styles.hidden}`}
          >
            {name === FormFieldOptions.OUTPUT_FORMAT ? (
              button
            ) : (
              showGradientOptions(button)
            )}
          </ToggleButton>
        ),
      )}
    </ToggleButtonGroup>
  );
};

export default RadioButtons;
