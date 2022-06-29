import { Container, Grid, List, Text } from '@mantine/core';
import { Point } from 'tabler-icons-react';

import SectionTitle from '../components/SectionTitle';
import { SECONDARY_COLOR, TEXT_COLOR } from '../constants';

const Skills = (): JSX.Element => {
  return (
    <Container id="skills" style={{ color: TEXT_COLOR, paddingTop: 140, paddingBottom: 80 }}>
      <Container
        sx={() => ({
          paddingRight: 80,
          '@media (max-width: 500px)': { paddingLeft: 0, paddingRight: 0 },
        })}
      >
        <SectionTitle title="My skills" />
        <Text
          align="justify"
          sx={() => ({
            fontSize: 20,
            paddingLeft: 30,
            paddingTop: 40,
            paddingBottom: 80,
            '@media (max-width: 500px)': { fontSize: '6vw', paddingLeft: 0, paddingRight: 0 },
          })}
        >
          As a self-taught developer I've dedicated a lot of time in learning and applying
          everything learned in real-world applications. I try to focus on writing clean code and
          architecture.
        </Text>

        <Grid justify="left" columns={24} style={{ paddingBottom: 100 }}>
          <Grid.Col xs={15} sm={8} offset={4}>
            <List
              icon={<Point size={25} color={SECONDARY_COLOR} />}
              sx={() => ({
                color: TEXT_COLOR,
                fontSize: 20,
                fontWeight: 500,
                '@media (max-width: 500px)': {
                  fontSize: '6vw',
                  paddingRight: 0,
                  justifyContent: 'left',
                },
              })}
            >
              <List.Item>Node.js</List.Item>
              <List.Item>JavaScript</List.Item>
              <List.Item>TypeScript</List.Item>
              <List.Item>Docker</List.Item>
            </List>
          </Grid.Col>

          <Grid.Col xs={15} sm={8} offset={4}>
            <List
              icon={<Point size={25} color={SECONDARY_COLOR} />}
              sx={() => ({
                color: TEXT_COLOR,
                fontSize: 20,
                fontWeight: 500,
                '@media (max-width: 500px)': { fontSize: '6vw' },
              })}
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
