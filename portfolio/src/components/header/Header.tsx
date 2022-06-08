import React from 'react';
import { ActionIcon, Container, Grid, Text } from '@mantine/core';

import { primaryColor } from '../../constants';

interface props {
  scrollToSection: () => void;
}

const Header = ({ scrollToSection }: props): JSX.Element => {
  const onClickHeaderSectionTitle = () => {
    console.log('clicked');
    scrollToSection();
  };

  return (
    <Container style={{ paddingLeft: 450, paddingTop: 30 }}>
      <Grid grow style={{ color: primaryColor, fontWeight: 500 }}>
        <Grid.Col span={2} offset={1}>
          <ActionIcon>
            <Text
              style={{ backgroundColor: 'white', color: primaryColor, fontWeight: 500 }}
              onClick={onClickHeaderSectionTitle}
            >
              About me
            </Text>
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span={2}>
          <ActionIcon>
            <Text
              style={{ backgroundColor: 'white', color: primaryColor, fontWeight: 500 }}
              onClick={onClickHeaderSectionTitle}
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
