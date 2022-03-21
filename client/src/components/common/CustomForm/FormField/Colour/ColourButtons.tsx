import React from 'react';
import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import styles from './ColourButtons.module.css';
import randomColour from '../../../../../helpers/utils';

interface ColourButtonsProps {
  name: string;
  handleChange: (
    e: React.MouseEvent<HTMLElement> | null,
    newValue: string[],
    popoverContent?: string
  ) => void;
  isError: boolean;
}

const ColourButtons: React.FC<ColourButtonsProps> = (props) => {
  const {
    name, isError, handleChange,
  } = props;

  const gradientColours = useSelector((state: any) => state.gradient.gradient.colours);

  const setRandomColours = () => {
    const newColourValues: string[] = [];
    gradientColours.forEach(() => {
      newColourValues.push(`#${randomColour()}`);
    });
    handleChange(null, newColourValues);
  };

  return (
    <Box className={styles.colourBox}>
      {gradientColours.map((value: string) => (
        <Button
          key={value}
          name={name}
          value={value}
          className={`${styles.colourBtn} ${isError && styles.error}`}
          style={{ background: value }}
          onClick={(
            e: React.MouseEvent<HTMLElement>,
          ) => handleChange(e, gradientColours, value)}
        />
      ))}
      <Button className={styles.colourBtn} onClick={() => setRandomColours()}>Random</Button>
    </Box>
  );
};

export default ColourButtons;
