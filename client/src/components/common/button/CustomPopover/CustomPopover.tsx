import { Box } from '@mui/material';
import React, { SetStateAction } from 'react';
import { ConfigPopover } from '../../template/types';
import styles from './CustomPopover.module.css';

interface CustomPopoverProps {
  configPopover: ConfigPopover;
  setConfigPopover: React.Dispatch<SetStateAction<ConfigPopover | undefined>>;
}

const CustomPopover: React.FC<CustomPopoverProps> = (props) => {
  const {
    configPopover, setConfigPopover,
  } = props;
  const popoverContent = configPopover.content;

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

  return (
    <>
      <Box className={styles.outsidePopover} role="button" onClick={() => close()} />
      <Box className={styles.popover} style={setPosition()} role="button" onClick={(e: React.MouseEvent<HTMLElement>) => close(e)}>
        {popoverContent.map((content: any) => (
          content
        ))}
      </Box>
    </>
  );
};

export default CustomPopover;
