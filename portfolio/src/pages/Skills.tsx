import React from 'react';
import { Container, Group, List, Text } from '@mantine/core';

function Skills(): JSX.Element {
  return (
    <Container style={{ color: '#707070', paddingTop: 40, paddingBottom: 40 }}>
      <Container style={{ paddingRight: 80 }}>
        <Text style={{ color: '#8F98B3', fontSize: 35, fontWeight: 700 }}>My skills</Text>
        <Text align="justify" style={{ paddingLeft: 30 }}>
          As a self-taught developer I've dedicated a lot of time in learning and applying
          everything learned in real-world applications. I try to focus on writing clean code and
          architecture.
        </Text>
        <Group style={{ paddingTop: 20, paddingLeft: 250 }}>
          <List style={{ color: '#8F98B3' }}>
            <List.Item>Node.js</List.Item>
            <List.Item>JavaScript</List.Item>
            <List.Item>TypeScript</List.Item>
            <List.Item>Docker</List.Item>
          </List>
          <List style={{ color: '#8F98B3', paddingLeft: 120 }}>
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
