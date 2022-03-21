import { Box } from '@mui/material';
import React from 'react';
import styles from './TemplatesPage.module.css';
import ListItem from '../../components/common/list/ListItem/ListItem';
import RoutePaths from '../../config/constants/route-paths';

const Templates: React.FC<{}> = () => {
  const [templates, setTemplates] = React.useState<any>([]);
  const [storedTemplates, setStoredTemplates] = React.useState<any>([]);

  React.useEffect(() => {
    fetch('/templates')
      .then((res) => res.json())
      .then((response) => setTemplates(response));
  }, []);

  React.useEffect(() => {
    if (templates) {
      const cleanTemplates = templates.filter((t: any) => Object.keys(t).length);
      setStoredTemplates(cleanTemplates);
    }
  }, [templates]);

  const onClick = (template: any) => {
    window.location.assign(`${RoutePaths.main}?s=${template.style}&d=${template.direction.replace(/\s+/g, '-')}${template.colours.toString().replace(/,#|#+/g, '&c=')}`);
  };

  return (
    <Box className={styles.root}>
      {storedTemplates.map((template: any) => (
        <ListItem key={template.name} template={template} onClick={() => onClick(template)} />
      ))}
    </Box>
  );
};

export default Templates;
