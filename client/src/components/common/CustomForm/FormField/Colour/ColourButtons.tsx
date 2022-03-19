import React, { SetStateAction } from 'react';
import { Box, Button } from '@mui/material';
import styles from './ColourButtons.module.css';
import ColourSelector from '../../../ColourSelector/ColourSelector';
import randomColour from '../../../../../helpers/utils';
import { ConfigColourSelector } from '../../../template/types';

interface ColourButtonsProps {
  name: string;
  colourValues: string[];
  setValue: React.Dispatch<SetStateAction<any>>;
  isError: boolean;
}

const ColourButtons: React.FC<ColourButtonsProps> = (props) => {
  const {
    name, colourValues, setValue, isError,
  } = props;
  const
    [configColourSelector, setConfigColourSelector] = React.useState<ConfigColourSelector>(
      { isOpen: false },
    );

  const setRandomColours = () => {
    const newColourValues: string[] = [];
    colourValues.forEach(() => {
      newColourValues.push(`#${randomColour()}`);
    });
    setValue(newColourValues);
  };

  return (
    <>
      <Box className={styles.colourBox}>
        {colourValues.map((value) => (
          <Button
            key={value}
            name={name}
            value={value}
            className={`${styles.colourBtn} ${isError && styles.error}`}
            style={{ background: value }}
            onClick={(e: React.MouseEvent<HTMLElement>) => setConfigColourSelector(
              { isOpen: true, where: e.currentTarget.getBoundingClientRect(), color: value },
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
