import React from 'react';
import { Container, Group } from '@mantine/core';

import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

function Projects(): JSX.Element {
  return (
    <Container style={{ paddingTop: 40, paddingBottom: 40 }}>
      <Container style={{ paddingTop: 25, paddingRight: 80 }}>
        <SectionTitle title="My projects" />
        <Group>
          <ProjectCard
            title="Training app"
            description="A web app to help you keep track of your workout weights and see your evolution"
          />
          <ProjectCard
            title="Resource links"
            description="A web app to save the links to interesting resources"
          />
        </Group>
      </Container>
    </Container>
  );
}

export default Projects;
