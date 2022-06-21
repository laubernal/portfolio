import { Container, Grid, List, Text } from '@mantine/core';
import { Point } from 'tabler-icons-react';

import SectionTitle from '../components/SectionTitle';
import { secondaryColor, textColor } from '../constants';

const Skills = (): JSX.Element => {
  return (
    <Container id="skills" style={{ color: textColor, paddingTop: 140, paddingBottom: 80 }}>
      <Container style={{ paddingRight: 80 }}>
        <SectionTitle title="My skills" />
        <Text
          align="justify"
          style={{ fontSize: 20, paddingLeft: 30, paddingTop: 40, paddingBottom: 80 }}
        >
          As a self-taught developer I've dedicated a lot of time in learning and applying
          everything learned in real-world applications. I try to focus on writing clean code and
          architecture.
        </Text>
        <Grid style={{ paddingBottom: 100 }}>
          <Grid.Col offset={2} span={4}>
            <List
              icon={<Point size={25} color={secondaryColor} />}
              style={{ color: textColor, fontSize: 20, fontWeight: 500 }}
            >
              <List.Item>Node.js</List.Item>
              <List.Item>JavaScript</List.Item>
              <List.Item>TypeScript</List.Item>
              <List.Item>Docker</List.Item>
            </List>
          </Grid.Col>
          <Grid.Col span={6}>
            <List
              icon={<Point size={25} color={secondaryColor} />}
              style={{ color: textColor, fontSize: 20, fontWeight: 500, paddingLeft: 120 }}
            >
              <List.Item>PostgreSQL</List.Item>
              <List.Item>React.js</List.Item>
              <List.Item>Hexagonal architecture</List.Item>
              <List.Item>SOLID principles</List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
};

export default Skills;
