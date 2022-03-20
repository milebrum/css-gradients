import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import Theme from './styles/theme/material-theme';
import { Layout } from './components/Layout';
import {
  About, GradientsConfig, Display, Templates,
} from './views';

const App: React.FC<{}> = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Layout>
          <GradientsConfig />
          <Display />
          <Templates />
          <About />
        </Layout>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

export default App;
