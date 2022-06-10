import { MantineProvider } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import TrainingApp from './pages/TrainingApp';
import ResourcesLinks from './pages/ResourcesLinks';

const App = (): JSX.Element => {
  return (
    <MantineProvider theme={{ fontFamily: 'Quicksand' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training-app" element={<TrainingApp />} />
        <Route path="/resources-links" element={<ResourcesLinks />} />
      </Routes>
    </MantineProvider>
  );
};

export default App;
