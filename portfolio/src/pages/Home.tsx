import { Container } from '@mantine/core';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import ScrollToTopArrow from '../components/ScrollToTopArrow';
import ContactMe from '../components/ContactMe';

const Home = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
      <ScrollToTopArrow />
    </Container>
  );
};

export default Home;
