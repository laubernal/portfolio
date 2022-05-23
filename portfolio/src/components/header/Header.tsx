import React from 'react';
import { Grid, Image, Text } from '@mantine/core';

function Header(): JSX.Element {
  return (
    <Grid grow>
      <Grid.Col span={2} offset={1}>
        <Text>About me</Text>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text>Projects</Text>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text>Contact me</Text>
      </Grid.Col>
    </Grid>
  );
}

export default Header;
