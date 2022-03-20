import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { ConfigPopover } from '../template/types';

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
    const splicedColours = [...colourValues];
    splicedColours.splice(spliceStart, 1, colourSelected);
    handleChange(null, splicedColours);
  }, [colourSelected]);

  return (
    <HexColorPicker color={colour} onChange={setColourSelected} />
  );
};

export default ColourPicker;
