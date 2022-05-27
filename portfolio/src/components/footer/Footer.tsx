import React from 'react';
import { Anchor, Container, Text } from '@mantine/core';

import { linkedInLink, mailLink } from '../../constants';
import SectionTitle from '../SectionTitle';

function Footer(): JSX.Element {
  return (
    <Container>
      <SectionTitle title="Let's work together" />
      <Text>Feel free to reach out if you're looking for a developer</Text>
      <Anchor href={`mailto: ${mailLink}`}>
        <Text>{mailLink}</Text>
      </Anchor>
      <Text>
        Or contact me through <Anchor href={linkedInLink}>LinkedIn</Anchor> if you prefer
      </Text>
    </Container>
  );
}

export default Footer;
