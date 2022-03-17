import React from 'react';
import { ThemeProvider } from '@mui/material';
import Theme from './styles/theme/material-theme';
import { Layout } from './components/Layout';
import {
  About, GradientsConfig, Display, Templates,
} from './views';

const App: React.FC<{}> = () => (
  <ThemeProvider theme={Theme}>
    <Layout>
      <GradientsConfig />
      <Display />
      <Templates />
      <About />
    </Layout>
  </ThemeProvider>
);

export default App;
