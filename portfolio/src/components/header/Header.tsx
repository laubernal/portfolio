import React from 'react';
import { Container, Grid, Text } from '@mantine/core';

import { primaryColor } from '../../constants';

function Header(): JSX.Element {
  const onClickScrollTo = (): void => {};

  return (
    <Container style={{ paddingLeft: 450, paddingTop: 30 }}>
      <Grid grow style={{ color: primaryColor, fontWeight: 500 }}>
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
    </Container>
  );
}

export default Header;
