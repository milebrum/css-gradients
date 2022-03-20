import { Box } from '@mui/material';
import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { ConfigPopover } from '../template/types';
import styles from './ColourPicker.module.css';

interface ColourPickerProps {
  colour: string;
  handleChange: (e: React.SyntheticEvent<HTMLElement> | null, newValue: string[]) => void;
  colourValues: string[];
  configPopover: ConfigPopover;
}

const ColourPicker: React.FC<ColourPickerProps> = (props) => {
  const {
    colour, colourValues, configPopover, handleChange,
  } = props;

  const [spliceStart, setSpliceStart] = React.useState<number>(colourValues.indexOf(colour));
  const [colourSelected, setColourSelected] = React.useState(colour);

  React.useEffect(() => {
    setSpliceStart(colourValues.indexOf(colour));
  }, [configPopover]);

  React.useEffect(() => {
    colourValues.splice(spliceStart, 1, colourSelected);
    handleChange(null, colourValues);
  }, [colourSelected]);

  return (
    <Box className={styles.cunt}>
      <HexColorPicker color={colour} onChange={setColourSelected} />
    </Box>
  );
};

export default ColourPicker;
