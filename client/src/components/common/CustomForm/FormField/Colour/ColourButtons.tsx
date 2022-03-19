import React from 'react';
import { Box, Button } from '@mui/material';
import styles from './ColourButtons.module.css';
import randomColour from '../../../../../helpers/utils';

interface ColourButtonsProps {
  name: string;
  colourValues: string[];
  handleChange: (e: React.MouseEvent<HTMLElement> | null, newValue: string[]) => void;
  isError: boolean;
}

const ColourButtons: React.FC<ColourButtonsProps> = (props) => {
  const {
    name, colourValues, isError, handleChange,
  } = props;

  const setRandomColours = () => {
    const newColourValues: string[] = [];
    colourValues.forEach(() => {
      newColourValues.push(`#${randomColour()}`);
    });
    handleChange(null, newColourValues);
  };

  return (
    <Box className={styles.colourBox}>
      {colourValues.map((value) => (
        <Button
          key={value}
          name={name}
          value={value}
          className={`${styles.colourBtn} ${isError && styles.error}`}
          style={{ background: value }}
          onClick={(e: React.MouseEvent<HTMLElement>) => handleChange(e, colourValues)}
        />
      ))}
      <Button className={styles.colourBtn} onClick={() => setRandomColours()}>Random</Button>
    </Box>
  );
};

export default ColourButtons;
