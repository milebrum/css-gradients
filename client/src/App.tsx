import React from 'react';
import { Layout, Sidebar } from './components';
import { About, Display, Templates } from './views';

const App = () => {
  return (
    <Layout>
      <Sidebar />
      <Display />
      <Templates />
      <About />
    </Layout>
  );
};

export default App;
