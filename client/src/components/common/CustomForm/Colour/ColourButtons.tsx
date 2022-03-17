import React from 'react';
import { Box, Button } from '@mui/material';
import styles from './ColourButtons.module.css';
import ColourSelector from '../../ColourSelector/ColourSelector';
import randomColour from '../../../../helpers/utils';

interface ColourButtonsProps {
  name: string;
  title: string;
  initialValue: string[];
  setFieldValue: (field: string, value: any) => void;
}

const ColourButtons: React.FC<ColourButtonsProps> = (props) => {
  const {
    name, title, initialValue, setFieldValue,
  } = props;
  const [colourValues, setColourValues] = React.useState(initialValue);

  const setRandomColours = () => {
    setFieldValue(name, [`#${randomColour()}`, `#${randomColour()}`]);
    setColourValues([`#${randomColour()}`, `#${randomColour()}`]);
  };

  return (
    <>
      <h2 className={styles.btn}>{title}</h2>
      <Box className={styles.colourBox}>
        {colourValues.map((value) => (
          <Button
            key={value}
            name={name}
            value={value}
            className={styles.colourBtn}
            style={{ background: value }}
          />
        ))}
        <Button className={styles.colourBtn} onClick={() => setRandomColours()}>Random</Button>
      </Box>
      <ColourSelector />
    </>
  );
};

export default ColourButtons;
