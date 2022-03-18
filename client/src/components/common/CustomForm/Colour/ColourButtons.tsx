import React from 'react';
import { Box, Button } from '@mui/material';
import styles from './ColourButtons.module.css';
import ColourSelector from '../../ColourSelector/ColourSelector';
import randomColour from '../../../../helpers/utils';
import { ConfigColourSelector } from '../../template/types';

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
  const
    [configColourSelector, setConfigColourSelector] = React.useState<ConfigColourSelector>(
      { isOpen: false },
    );

  const setRandomColours = () => {
    const newColourValues: string[] = [];
    colourValues.forEach(() => {
      newColourValues.push(`#${randomColour()}`);
    });
    setFieldValue(name, newColourValues);
    setColourValues(newColourValues);
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
            onClick={(e: React.MouseEvent<HTMLElement>) => setConfigColourSelector(
              { isOpen: true, where: e.currentTarget.getBoundingClientRect() },
            )}
          />
        ))}
        <Button className={styles.colourBtn} onClick={() => setRandomColours()}>Random</Button>
      </Box>
      {configColourSelector.isOpen && (
        <ColourSelector
          configColourSelector={configColourSelector}
          setConfigColourSelector={setConfigColourSelector}
        />
      )}
    </>
  );
};

export default ColourButtons;
