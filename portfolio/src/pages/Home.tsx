import { createRef } from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { Container } from '@mantine/core';

import Footer from '../components/footer/Footer';
// import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import ScrollToTopArrow from '../components/ScrollToTopArrow';

const Home = (): JSX.Element => {
  // const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
  //   offset: 0,
  // });
  const { targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 0,
  });
  const skillsRef = createRef();

  return (
    <Container>
      {/* <Header scrollToSection={scrollIntoView} /> */}
      <Hero />
      <AboutMe reference={targetRef} />
      <Skills reference={skillsRef} />
      <Projects />
      <Footer />
      <ScrollToTopArrow />
    </Container>
  );
};

export default Home;
