import { Box } from '@mui/material';
import React, { SetStateAction } from 'react';
import ColourPicker from '../../ColourPicker/ColourPicker';
import { ConfigPopover, FormFieldType } from '../../template/types';
import styles from './CustomPopover.module.css';

interface CustomPopoverProps {
  configPopover: ConfigPopover;
  setConfigPopover: React.Dispatch<SetStateAction<ConfigPopover | undefined>>;
  type: string;
  value: string;
  handleChange: (e: React.SyntheticEvent<HTMLElement> | null, newValue: string | string[]) => void;
  colourValues?: string[];
}

const CustomPopover: React.FC<CustomPopoverProps> = (props) => {
  const {
    configPopover, setConfigPopover, type, value, colourValues, handleChange,
  } = props;

  const setPosition = () => {
    if (configPopover.where) {
      const top = configPopover.where.bottom + 7;
      return (
        { marginLeft: configPopover.where.left, marginTop: top }
      );
    }
    return undefined;
  };

  const close = (e?: React.MouseEvent<HTMLElement>) => {
    if (e) {
      e.stopPropagation();
    } else {
      setConfigPopover({ isOpen: false, content: configPopover.content });
    }
  };

  const renderByType = () => {
    switch (type) {
      case FormFieldType.COLOUR:
        return colourValues && (
          <ColourPicker
            colour={value}
            handleChange={handleChange}
            colourValues={colourValues}
            configPopover={configPopover}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Box className={styles.outsidePopover} role="button" onClick={() => close()} />
      <Box className={styles.popover} style={setPosition()} role="button" onClick={(e: React.MouseEvent<HTMLElement>) => close(e)}>
        {renderByType()}
      </Box>
    </>
  );
};

export default CustomPopover;
