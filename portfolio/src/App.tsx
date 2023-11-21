import { MantineProvider } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import TrainingApp from './pages/TrainingApp';
import ResourcesLinks from './pages/ResourcesLinks';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopArrow from './components/ScrollToTopArrow';
import './app.css';

const App = (): JSX.Element => {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Quicksand, sans-serif',
        breakpoints: {
          xs: 275,
        },
      }}
    >
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training-app" element={<TrainingApp />} />
          <Route path="/resources-links" element={<ResourcesLinks />} />
        </Routes>
        <ScrollToTopArrow />
      </ScrollToTop>
    </MantineProvider>
  );
};

export default App;
