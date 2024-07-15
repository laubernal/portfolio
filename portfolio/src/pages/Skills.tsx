import { Container, Grid, List, Text } from '@mantine/core';
import { Point } from 'tabler-icons-react';

import SectionTitle from '../components/SectionTitle';
import { SECONDARY_COLOR, TEXT_COLOR } from '../constants';

const Skills = (): JSX.Element => {
  const skills = [
    'Node.js',
    'JavaScript',
    'TypeScript',
    'Docker',
    'NestJS',
    'Hexagonal architecture',
    'SOLID principles',
    'Domain Driven Design',
    'CI/CD',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Mongoose',
    'TypeORM',
    'MikroORM',
    'Socket.IO',
    'Amazon S3',
    'React.js',
    'Jest'
  ];

  const halfNumberOfItemsInSkills = Math.ceil(skills.length / 2);
  const skillsColumn1 = skills.slice(0, halfNumberOfItemsInSkills);
  const skillsColumn2 = skills.slice(halfNumberOfItemsInSkills);

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
              {skillsColumn1.map(skill => (
                <List.Item key={skill}>{skill}</List.Item>
              ))}
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
              {skillsColumn2.map(skill => (
                <List.Item key={skill}>{skill}</List.Item>
              ))}
            </List>
          </Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
};

export default Skills;
