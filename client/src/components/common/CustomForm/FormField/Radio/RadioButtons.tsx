import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { RadioButtonType } from '../../../template/types';
import styles from './RadioButtons.module.css';
import DirectionIcons from '../../../template/DirectionIcons';

interface RadioButtonsProps {
  name: string;
  type: string;
  radioButtons: string[];
  value: string;
  handleChange: (e: React.MouseEvent<HTMLElement>, newValue: string) => void;
  isError: boolean;
}

const RadioButtons: React.FC<RadioButtonsProps> = (props) => {
  const {
    name, type, radioButtons, value, handleChange, isError,
  } = props;

  // value selector buttons
  const handleSelect = (e: React.MouseEvent<HTMLElement>, newSelected: string) => {
    if (newSelected !== null) {
      handleChange(e, newSelected);
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
      value={value}
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
  );
};

export default RadioButtons;
