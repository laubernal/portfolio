import React from 'react';
import { Container, MantineProvider } from '@mantine/core';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';

function App(): JSX.Element {
  return (
    <MantineProvider theme={{ fontFamily: 'Quicksand' }}>
      <Container>
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Footer />
      </Container>
    </MantineProvider>
  );
}

export default App;
