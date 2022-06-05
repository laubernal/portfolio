import React from 'react';
import { ActionIcon, Container, Grid, Text } from '@mantine/core';

import { primaryColor } from '../../constants';

interface props {
  scrollToSection: any;
}

const Header = ({ scrollToSection }: props): JSX.Element => {
  return (
    <Container style={{ paddingLeft: 450, paddingTop: 30 }}>
      <Grid grow style={{ color: primaryColor, fontWeight: 500 }}>
        <Grid.Col span={2} offset={1}>
          <ActionIcon>
            <Text
              style={{ backgroundColor: 'white', color: primaryColor, fontWeight: 500 }}
              onClick={() => scrollToSection()}
            >
              About me
            </Text>
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span={2}>
          <ActionIcon>
            <Text
              style={{ backgroundColor: 'white', color: primaryColor, fontWeight: 500 }}
              onClick={() => scrollToSection()}
            >
              Skills
            </Text>
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span={2}>
          <Text>Contact me</Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Header;
