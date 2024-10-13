import { Container, Text } from '@mantine/core';

import SectionTitle from '../components/SectionTitle';
import { TEXT_COLOR } from '../constants';

const AboutMe = (): JSX.Element => {
  return (
    <Container id="aboutMe" style={{ paddingTop: 140, paddingBottom: 100 }}>
      <Container
        sx={() => ({ paddingRight: 80, '@media (max-width: 500px)': { paddingRight: 0 } })}
      >
        <SectionTitle title="About me" />
        <Text
          align="justify"
          sx={() => ({
            color: TEXT_COLOR,
            fontSize: 20,
            paddingTop: 40,
            '@media (max-width: 500px)': { fontSize: '6vw', paddingLeft: 0 },
          })}
        >
          I'm a backend developer with 3+ years of experience creating scalable solutions and
          optimizing systems to improve performance and efficiency. architecting software solutions.
          <br />I focus on applying clean architecture principles, DDD, and TDD, with a strong
          commitment to maintainable code and continuous improvement while adding the most value to
          the product.
        </Text>
      </Container>
    </Container>
  );
};

export default AboutMe;
