import { Container } from '@mantine/core';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import ContactMe from '../components/ContactMe';
import ProfessionalCarrer from './ProfessionalCareer';

const Home = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <Hero />
      <AboutMe />
      <ProfessionalCarrer />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </Container>
  );
};

export default Home;
