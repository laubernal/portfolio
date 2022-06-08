import React, { createRef, useRef } from 'react';
import { useScrollIntoView, useWindowScroll } from '@mantine/hooks';
import { ActionIcon, Affix, Container, Transition } from '@mantine/core';
import { ArrowBarToUp } from 'tabler-icons-react';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import { primaryColor } from '../constants';

const Home = (): JSX.Element => {
  const [scroll, scrollTo] = useWindowScroll();
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 0,
  });
  const skillsRef = createRef();

  return (
    <Container>
      <Header scrollToSection={scrollIntoView} />
      <Hero />
      <AboutMe reference={targetRef} />
      <Skills reference={skillsRef} />
      <Projects />
      <Footer />
      <Affix position={{ bottom: 30, right: 30 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {transitionStyles => (
            <ActionIcon style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
              <ArrowBarToUp size={40} strokeWidth={3} color={primaryColor} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </Container>
  );
};

export default Home;
