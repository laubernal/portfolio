import React from 'react';
import {
  Anchor,
  Avatar,
  Container,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';

import GitHubLogo from '../../images/social/GitHubLogo.png';
import LinkedInLogo from '../../images/social/LinkedInLogo.png';

function Hero(): JSX.Element {
  return (
    <Container style={{ paddingTop: 150, paddingBottom: 275 }}>
      <Stack align="flex-start" spacing={1} style={{ color: '#8F98B3' }}>
        <Text style={{ fontSize: 25 }}>HI, MY NAME IS</Text>
        <Text style={{ fontSize: 50, fontWeight: 700 }}>LAURA BERNAL</Text>
        <Text style={{ fontSize: 30 }}>BACK END DEVELOPER</Text>
      </Stack>

      <Group style={{ paddingTop: 50 }}>
        <Anchor href="https://github.com/laubernal" target="_blank">
          <Image width={25} height={25} src={GitHubLogo} alt="GitHub logo" />
        </Anchor>
        <Anchor href="https://www.linkedin.com/in/laura-bernal-rodríguez-141156239" target="_blank">
          <Image width={25} height={25} src={LinkedInLogo} alt="LinkedIn logo" />
        </Anchor>
      </Group>
    </Container>
  );
}

export default Hero;
