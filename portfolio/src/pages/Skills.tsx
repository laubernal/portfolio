import React from 'react';
import { Container, Group, List, Text } from '@mantine/core';

import SectionTitle from '../components/SectionTitle';
import { primaryColor, textColor } from '../constants';

function Skills(): JSX.Element {
  return (
    <Container style={{ color: textColor, paddingTop: 140, paddingBottom: 40 }}>
      <Container style={{ paddingRight: 80 }}>
        <SectionTitle title="My skills" />
        <Text align="justify" style={{ paddingLeft: 30, paddingTop: 25 }}>
          As a self-taught developer I've dedicated a lot of time in learning and applying
          everything learned in real-world applications. I try to focus on writing clean code and
          architecture.
        </Text>
        <Group style={{ paddingTop: 30, paddingLeft: 220 }}>
          <List style={{ color: primaryColor, fontSize: 20 }}>
            <List.Item>Node.js</List.Item>
            <List.Item>JavaScript</List.Item>
            <List.Item>TypeScript</List.Item>
            <List.Item>Docker</List.Item>
          </List>
          <List style={{ color: primaryColor, fontSize: 20, paddingLeft: 120 }}>
            <List.Item>PostgreSQL</List.Item>
            <List.Item>React.js</List.Item>
            <List.Item>Hexagonal architecture</List.Item>
            <List.Item>SOLID principles</List.Item>
          </List>
        </Group>
      </Container>
    </Container>
  );
}

export default Skills;
