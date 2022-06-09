import React from 'react';
import { Container, Text } from '@mantine/core';

import SectionTitle from '../components/SectionTitle';
import { textColor } from '../constants';

interface props {
  reference: any;
}

const getAge = (): number => {
  const birthdayDate = new Date(1995, 9, 17);
  const currentDate = new Date();

  const age = Math.abs(currentDate.getFullYear() - birthdayDate.getFullYear() - 1);

  if (
    currentDate.getMonth() >= birthdayDate.getMonth() &&
    currentDate.getDate() >= birthdayDate.getDate()
  ) {
    return age + 1;
  }

  return age;
};

const AboutMe = ({ reference }: props): JSX.Element => {
  return (
    <Container ref={reference} style={{ paddingTop: 40, paddingBottom: 40 }}>
      <Container style={{ paddingRight: 80 }}>
        <SectionTitle title="About me" />
        <Text align="justify" style={{ color: textColor, paddingLeft: 30, paddingTop: 25 }}>
          I'm a {getAge()}-year-old back end developer passionate about writing clean, mantainable
          and scalable code. I'm keen on working with clean architecture and good practices. <br />
          <br /> It was in 2015 when I wrote my first lines of code and the world of software began
          to attract my attention. Although it was not until the Covid pandemic that I decided to
          start learning how to program in a self-taught way. I have focused on learning the basics
          of programming and building architectures that facilitate code maintainability and
          scalability. <br /> <br /> I like coding applications that have a useful impact on my day
          to day.
        </Text>
      </Container>
    </Container>
  );
};

export default AboutMe;
