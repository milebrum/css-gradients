import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import Theme from './styles/theme/material-theme';
import { Layout } from './components/Layout';
import { About } from './views';
import { RoutesArray } from './config/constants/routes';
import { RouteType } from './config/constants/routes.types';
import GradientsConfig from './views/GradientsConfig/GradientsConfig';

const App: React.FC<{}> = () => {
  const renderRoute = (route: RouteType) => (
    <Routes key={route.path}>
      <Route
        key={route.path}
        path={route.path}
        element={<route.component />}
      />
    </Routes>
  );

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <Layout>
            <GradientsConfig />
            {RoutesArray.map((route) => (
              renderRoute(route)
            ))}
            <About />
          </Layout>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
