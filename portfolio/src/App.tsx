import { Container, Image, MantineProvider, Space } from '@mantine/core';
import React from 'react';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App(): JSX.Element {
  return (
    <MantineProvider theme={{ fontFamily: 'Quicksand' }}>
      <Container>
        <Header />
        <Space h="xl" />
        <Hero />
        <Footer />
      </Container>
    </MantineProvider>
  );
}

export default App;
