import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

function App(): JSX.Element {
  return (
    <MantineProvider theme={{ fontFamily: 'Quicksand' }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
