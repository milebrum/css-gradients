import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
// import { IconName } from '@fortawesome/fontawesome-svg-core';
import { RadioButtonType } from '../../template/types';
import styles from './RadioButtons.module.css';
import DirectionIcons from '../../template/DirectionIcons';

interface RadioButtonsProps {
  title: string;
  type: string;
  radioButtons: string[];
  initialValue: string;
}

const RadioButtons: React.FC<RadioButtonsProps> = (props) => {
  const {
    title, type, radioButtons, initialValue,
  } = props;
  const [valueSelected, setValueSelected] = React.useState(initialValue);

  // value selector buttons
  const handleSelect = (event: React.MouseEvent<HTMLElement>, newSelected: string) => {
    if (newSelected !== null && newSelected !== valueSelected) {
      setValueSelected(newSelected);
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
        className={styles.btnGroup}
        value={valueSelected}
        exclusive
        onChange={handleSelect}
        aria-label={`${title} options`}
      >
        {radioButtons.map(
          (button) => (
            <ToggleButton
              key={button}
              value={button}
              aria-label={button}
              className={styles.radioBtn}
            >
              {type === RadioButtonType.TEXT ? (
                button
              ) : type === RadioButtonType.ICON && (
                DirectionIcons(button)
              )}
            </ToggleButton>
          ),
        )}
      </ToggleButtonGroup>
    </>
  );
};

export default RadioButtons;
