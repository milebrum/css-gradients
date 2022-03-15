import React from 'react';
import { ThemeProvider } from '@mui/material';
import Theme from './styles/theme/material-theme';
import Sidebar from './components';
import { Layout } from './components/Layout';
import { About, Display, Templates } from './views';

const App: React.FC<{}> = () => (
  <ThemeProvider theme={Theme}>
    <Layout>
      <Sidebar />
      <Display />
      <Templates />
      <About />
    </Layout>
  </ThemeProvider>
);

export default App;
