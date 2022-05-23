import React from 'react';
import { Anchor, Container, Text, Title } from '@mantine/core';

function Footer(): JSX.Element {
  return (
    // <Container size="md" px="md">
    <>
      <Title order={2}>Let's work together</Title>
      <Text>Feel free to reach out if you're looking for a developer</Text>
      <Anchor href="mailto: laurabernaldev@gmail.com">
        <Text>laurabernaldev@gmail.com</Text>
      </Anchor>
      <Text>
        Or contact me through{' '}
        <Anchor href="https://www.linkedin.com/in/laura-bernal-rodr%C3%ADguez-141156239/">
          LinkedIn
        </Anchor>{' '}
        if you prefer
      </Text>
      {/* </Container> */}
    </>
  );
}

export default Footer;
