import React from 'react';
import { ActionIcon, Container, Grid, Text } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';

import { primaryColor } from '../../constants';

function Header(): JSX.Element {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <Container style={{ paddingLeft: 450, paddingTop: 30 }}>
      <Grid grow style={{ color: primaryColor, fontWeight: 500 }}>
        <Grid.Col span={2} offset={1}>
          <ActionIcon>
            <Text
              style={{ backgroundColor: 'white', color: primaryColor, fontWeight: 500 }}
              onClick={() => scrollIntoView({ alignment: 'center' })}
            >
              About me
            </Text>
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span={2}>
          <Text>Projects</Text>
        </Grid.Col>
        <Grid.Col span={2}>
          <Text>Contact me</Text>
        </Grid.Col>
      </Grid>
      <div style={{ height: '50vh' }} />
      <Text ref={targetRef}>Hello there</Text>
    </Container>
  );
}

export default Header;
