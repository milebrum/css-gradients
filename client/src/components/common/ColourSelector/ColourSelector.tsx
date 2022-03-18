import { Box } from '@mui/material';
import React, { SetStateAction } from 'react';
import { ConfigColourSelector } from '../template/types';
import styles from './ColourSelector.module.css';

interface ColourSelectorProps {
  configColourSelector: ConfigColourSelector;
  setConfigColourSelector: React.Dispatch<SetStateAction<ConfigColourSelector>>;
}

const ColourSelector: React.FC<ColourSelectorProps> = (props) => {
  const { configColourSelector, setConfigColourSelector } = props;

  const setPosition = () => {
    if (configColourSelector.where) {
      const top = configColourSelector.where.bottom + 7;
      return (
        { marginLeft: configColourSelector.where?.left, marginTop: top }
      );
    }
    return undefined;
  };

  const closeColourSelector = (e?: React.MouseEvent<HTMLElement>) => {
    if (e) {
      e.stopPropagation();
    } else {
      setConfigColourSelector({ isOpen: false });
    }
  };

  return (
    <>
      <Box className={styles.outsideColourSelector} role="button" onClick={() => closeColourSelector()} />
      <Box className={styles.colourSelector} style={setPosition()} role="button" onClick={(e: React.MouseEvent<HTMLElement>) => closeColourSelector(e)}>
        <Box className={styles.selectorContent}>
          <Box className={styles.palette}>
            <Box />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ColourSelector;
