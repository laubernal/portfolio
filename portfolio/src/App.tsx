import { Container, Image, Space } from '@mantine/core';
import React from 'react';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App(): JSX.Element {
  return (
    <Container>
      <Header />
      <Space h="xl" />
      <Hero />
      <Footer />
    </Container>
  );
}

export default App;
