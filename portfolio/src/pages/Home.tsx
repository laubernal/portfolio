import { Container } from '@mantine/core';
import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';

function Home(): JSX.Element {
  return (
    <Container>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </Container>
  );
}

export default Home;
