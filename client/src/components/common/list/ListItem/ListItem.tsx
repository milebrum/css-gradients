import { Box, Typography } from '@mui/material';
import React from 'react';
import DisplayStyle from '../../template/DisplayStyle';
import styles from './ListItem.module.css';

interface ListItemProps {
  template: any;
  onClick: (item: any) => void;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  const { template, onClick } = props;

  return (
    <Box className={styles.root} onClick={(item) => onClick(item)}>
      <Box
        style={{ background: DisplayStyle(template) }}
        className={styles.item}
      />
      <Box className={styles.itemText}>
        <Typography>{template.name}</Typography>
        <Typography>
          <span>By </span>
          {template.author}
        </Typography>
      </Box>
    </Box>
  );
};

export default ListItem;
