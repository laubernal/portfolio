import React, { useRef } from 'react';
import { ActionIcon, Affix, Container, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { ArrowBarToUp } from 'tabler-icons-react';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import { primaryColor } from '../constants';

function Home(): JSX.Element {
  const [scroll, scrollTo] = useWindowScroll();
  const ref = useRef(null);

  return (
    <Container>
      <Header />
      <Hero />
      <AboutMe ref={ref} />
      <Skills />
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
}

export default Home;
