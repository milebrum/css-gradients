import React from 'react';
import Sidebar from './components';
import { Layout } from './components/Layout';
import { About, Display, Templates } from './views';

const App: React.FC<{}> = () => (
  <Layout>
    <Sidebar />
    <Display />
    <Templates />
    <About />
  </Layout>
);

export default App;
