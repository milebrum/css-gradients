import React from 'react';
import { useDispatch } from 'react-redux';
import getQueryParam from '../../helpers/url';
import { gradientActions } from '../../redux/store/gradientSlice';
import styles from './Layout.module.css';

const Layout: React.FC<{}> = (props) => {
  const { children } = props;
  const [colourValues, setColourValues] = React.useState<string[] | undefined>(['']);

  const searchParams = window.location.search;
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (searchParams) {
      const colours = getQueryParam('c')?.value;
      setColourValues(colours?.map((colour) => `#${colour}`));

      dispatch(gradientActions.setStyle(getQueryParam('s')?.value.toString()));
      dispatch(gradientActions.setDirection(getQueryParam('d')?.value.toString().replace(/-/g, ' ')));
    }
  }, [searchParams]);

  React.useEffect(() => {
    if (searchParams) {
      dispatch(gradientActions.setColours(colourValues));
      console.log(colourValues);
    }
  }, [colourValues]);

  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

export default Layout;
