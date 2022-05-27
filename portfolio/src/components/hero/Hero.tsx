import React from 'react';
import { Anchor, Container, Group, Image, Stack, Text } from '@mantine/core';

import GitHubLogo from '../../images/social/GitHubLogo.png';
import LinkedInLogo from '../../images/social/LinkedInLogo.png';

import { primaryColor, linkedInLink, gitHubLink } from '../../constants';

function Hero(): JSX.Element {
  return (
    <Container style={{ paddingTop: 150, paddingBottom: 275 }}>
      <Stack align="flex-start" spacing={1} style={{ color: primaryColor }}>
        <Text style={{ fontSize: 25 }}>HI, MY NAME IS</Text>
        <Text style={{ fontSize: 50, fontWeight: 700 }}>LAURA BERNAL</Text>
        <Text style={{ fontSize: 30 }}>BACK END DEVELOPER</Text>
      </Stack>

      <Group style={{ paddingTop: 50 }}>
        <Anchor href={gitHubLink} target="_blank">
          <Image width={25} height={25} src={GitHubLogo} alt="GitHub logo" />
        </Anchor>
        <Anchor href={linkedInLink} target="_blank">
          <Image width={25} height={25} src={LinkedInLogo} alt="LinkedIn logo" />
        </Anchor>
      </Group>
    </Container>
  );
}

export default Hero;
