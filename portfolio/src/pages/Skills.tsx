import React from 'react';
import { Container, Group, List, Text } from '@mantine/core';

function Skills(): JSX.Element {
  return (
    <Container style={{ paddingTop: 40, paddingBottom: 40 }}>
      <Container style={{ paddingRight: 80 }}>
        <Text style={{ color: '#8F98B3', fontSize: 35, fontWeight: 700 }}>My skills</Text>
        <Text align="justify" style={{ color: '#707070', paddingLeft: 30 }}>
          As a self-taught developer I've dedicated a lot of time in learning and applying
          everything learned in real-world applications. I try to focus on writing clean code and
          architecture.
        </Text>
        <Group>
          <List>
            <List.Item>JavaScript</List.Item>
            <List.Item>Node.js</List.Item>
          </List>
        </Group>
      </Container>
    </Container>
  );
}

export default Skills;
