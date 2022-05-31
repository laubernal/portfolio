import React from 'react';
import { Anchor, Container, Text } from '@mantine/core';

import { linkedInLink, mailLink } from '../../constants';
import SectionTitle from '../SectionTitle';
import { textColor } from '../../constants';

function Footer(): JSX.Element {
  return (
    <Container style={{ paddingTop: 140, paddingBottom: 25, color: textColor }}>
      <SectionTitle title="Let's work together" />
      <Text style={{ paddingTop: 25 }}>
        If you're looking for a developer feel free to reach out via email
      </Text>
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
