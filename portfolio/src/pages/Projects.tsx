import React from 'react';
import { Anchor, Card, CardSection, Container, Group, Paper, Text, Title } from '@mantine/core';

import SectionTitle from '../components/SectionTitle';

function Projects(): JSX.Element {
  return (
    <Container style={{ paddingTop: 40, paddingBottom: 40 }}>
      <Container style={{ paddingRight: 80 }}>
        <SectionTitle title="My projects" />
        <Group>
          <Card shadow="sm" p="lg" style={{ width: 340, margin: 'auto' }}>
            <CardSection>
              <Text
                style={{ color: '#707070', fontSize: 25, fontWeight: 600, alignContent: 'center' }}
              >
                Training app
              </Text>
            </CardSection>
            <Paper>
              <Text>
                A web app to help you keep track on your workout weights and see your evolution
              </Text>
              <Anchor
                href="https://github.com/laubernal/training-app"
                target="_blank"
                style={{ color: '#707070' }}
              >
                <Text>VIEW PROJECT &#8250;</Text>
              </Anchor>
            </Paper>
          </Card>
          <Card shadow="sm" p="lg" style={{ width: 340, margin: 'auto' }}>
            <CardSection>
              <Text style={{ color: '#707070', fontSize: 25, fontWeight: 600 }}>
                Resource links
              </Text>
            </CardSection>
            <Text>A web app to save the links to interesting resources</Text>
            <Anchor
              href="https://github.com/laubernal/resources-links"
              target="_blank"
              style={{ color: '#707070' }}
            >
              <Text>VIEW PROJECT &#8250;</Text>
            </Anchor>
          </Card>
        </Group>
      </Container>
    </Container>
  );
}

export default Projects;
