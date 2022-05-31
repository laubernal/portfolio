import React from 'react';
import { Container, Group } from '@mantine/core';

import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { trainingAppGitHubLink, resourceLinksGitHubLink } from '../constants';

function Projects(): JSX.Element {
  return (
    <Container style={{ paddingTop: 140, paddingBottom: 40 }}>
      <Container>
        <SectionTitle title="My projects" />
        <Group style={{ paddingTop: 25 }}>
          <ProjectCard
            title="Training app"
            description="A web app to help you keep track of your workout weights and see your evolution"
            link={trainingAppGitHubLink}
          />
          <ProjectCard
            title="Resource links"
            description="A web app to save links of interesting resources"
            link={resourceLinksGitHubLink}
          />
        </Group>
      </Container>
    </Container>
  );
}

export default Projects;
