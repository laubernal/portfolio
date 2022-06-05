import React from 'react';
import { Container, Text } from '@mantine/core';

import SectionTitle from '../components/SectionTitle';
import { textColor } from '../constants';

interface props {
  targetRef: any;
}

const AboutMe = ({ targetRef: cosa }: props): JSX.Element => {
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

  return (
    <Container ref={cosa} style={{ paddingTop: 40, paddingBottom: 40 }}>
      <Container style={{ paddingRight: 80 }}>
        <SectionTitle title="About me" />
        <Text align="justify" style={{ color: textColor, paddingLeft: 30, paddingTop: 25 }}>
          I'm a {getAge()}-year-old self-taught back end developer constantly seeking to learn more
          about this vast software world. <br /> <br /> I'm keen on working alongside developers
          that can teach me more about clean and maintainable code. <br /> <br /> ------------
          Answer how I got into coding
        </Text>
      </Container>
    </Container>
  );
};

export default AboutMe;
