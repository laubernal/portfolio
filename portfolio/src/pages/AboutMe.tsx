import React, { forwardRef } from 'react';
import { Container, Text } from '@mantine/core';

import SectionTitle from '../components/SectionTitle';
import { textColor } from '../constants';

type props = {
  ref: any;
};

// const Results = forwardRef(({ ref }: props) => {
//   return (
//     <div ref={ref}>
//       <h1>Results</h1>
//     </div>
//   );
// });

function AboutMe({ ref }: props): JSX.Element {
  return (
    <Container ref={ref} style={{ paddingTop: 40, paddingBottom: 40 }}>
      <Container style={{ paddingRight: 80 }}>
        <SectionTitle title="About me" />
        <Text align="justify" style={{ color: textColor, paddingLeft: 30, paddingTop: 25 }}>
          I'm a 26-year-old self-taught back end developer constantly seeking to learn more about
          this vast software world. <br /> <br /> I'm keen on working alongside developers that can
          teach me more about clean and maintainable code. <br /> <br /> ------------ Answer how I
          got into coding
        </Text>
      </Container>
    </Container>
  );
}

export default AboutMe;
