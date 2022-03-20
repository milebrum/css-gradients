import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import DisplayStyle from '../../components/common/template/DisplayStyle';
import styles from './Display.module.css';

const Display: React.FC<{}> = () => {
  const gradient = useSelector((state: any) => state.gradient);
  const [gradientStyle, setGradientStyle] = React.useState('');

  React.useEffect(() => {
    setGradientStyle(DisplayStyle(gradient));
  }, [gradient]);

  return (
    <Box
      className={styles.root}
      style={{ background: gradientStyle }}
    />
  );
};

export default Display;
