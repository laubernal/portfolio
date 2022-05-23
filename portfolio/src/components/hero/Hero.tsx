import React from 'react';
import { Grid, Text, Title } from '@mantine/core';

function Hero(): JSX.Element {
  return (
    <Grid>
      <Grid.Col>
        <Text>HI, MY NAME IS</Text>
      </Grid.Col>
      <Grid.Col>
        <Title order={3}>LAURA BERNAL</Title>
      </Grid.Col>
      <Grid.Col>
        <Text>BACK END DEVELOPER</Text>
      </Grid.Col>
    </Grid>
  );
}

export default Hero;
