import { Container, Text } from '@mantine/core';

import SectionTitle from '../components/SectionTitle';
import { TEXT_COLOR } from '../constants';

const calculateAge = (): number => {
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

const AboutMe = (): JSX.Element => {
  return (
    <Container id="aboutMe" style={{ paddingTop: 140, paddingBottom: 100 }}>
      <Container
        sx={() => ({ paddingRight: 80, '@media (max-width: 500px)': { paddingRight: 0 } })}
      >
        <SectionTitle title="About me" />
        {/* <Text
          align="justify"
          sx={() => ({
            color: TEXT_COLOR,
            fontSize: 20,
            paddingLeft: 30,
            paddingTop: 40,
            '@media (max-width: 500px)': { fontSize: '6vw', paddingLeft: 0 },
          })}
        >
          I'm a {calculateAge()}-year-old back end developer passionate about writing clean,
          mantainable and scalable code. I'm keen on working with clean architecture and good
          practices. <br />
          <br /> It was in 2015 when I wrote my first lines of code and the world of software began
          to attract my attention. Although it was not until the Covid pandemic that I decided to
          start learning how to program in a self-taught way. I have focused on learning the basics
          of programming and building architectures that facilitate code maintainability and
          scalability. <br /> <br /> I like coding applications that have a useful impact on my day
          to day.
        </Text> */}
        <Text
          align="justify"
          sx={() => ({
            color: TEXT_COLOR,
            fontSize: 20,
            paddingLeft: 30,
            paddingTop: 40,
            '@media (max-width: 500px)': { fontSize: '6vw', paddingLeft: 0 },
          })}
        >
          I'm a software engineer with 3+ years of experience architecting software solutions
          grounded in hexagonal architecture, DDD, and SOLID principles.
          <br />
          <br />
          All the projects I have worked on are focused on adding the most value to the final customer. 
        </Text>
      </Container>
    </Container>
  );
};

export default AboutMe;
