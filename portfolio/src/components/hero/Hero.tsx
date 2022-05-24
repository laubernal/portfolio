import React from 'react';
import { Anchor, Avatar, Container, Grid, Image, SimpleGrid, Stack, Text } from '@mantine/core';

import GitHubLogo from '../../images/social/GitHubLogo.png';
import LinkedInLogo from '../../images/social/LinkedInLogo.png';

function Hero(): JSX.Element {
  return (
    <Container style={{ paddingTop: 120, paddingBottom: 500 }}>
      <Stack align="flex-start" spacing={1} style={{ color: '#8F98B3' }}>
        <Text style={{ fontSize: 30 }}>HI, MY NAME IS</Text>
        <Text style={{ fontSize: 40, fontWeight: 700 }}>LAURA BERNAL</Text>
        <Text style={{ fontSize: 30 }}>BACK END DEVELOPER</Text>
      </Stack>
      <Grid gutter={20} style={{ paddingTop: 50, paddingRight: 600 }}>
        <Grid.Col span={2}>
          <Anchor href="https://github.com/laubernal" target="_blank">
            <Image width={25} height={25} src={GitHubLogo} alt="GitHub logo" />
          </Anchor>
        </Grid.Col>
        <Grid.Col span={1}>
          <Anchor
            href="https://www.linkedin.com/in/laura-bernal-rodríguez-141156239"
            target="_blank"
          >
            <Image width={25} height={25} src={LinkedInLogo} />
          </Anchor>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Hero;
