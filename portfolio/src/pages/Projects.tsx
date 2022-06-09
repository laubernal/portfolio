import React from 'react';
import { Container, Group, Text } from '@mantine/core';

import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { trainingAppGitHubLink, resourceLinksGitHubLink, textColor } from '../constants';
import trainingAppImage from '../images/projects/trainingAppImage.jpg';
import resourcesLinksImage from '../images/projects/resourcesLinksImage.jpg';

const Projects = (): JSX.Element => {
  return (
    <Container style={{ paddingTop: 140, paddingBottom: 40 }}>
      <Container style={{ paddingRight: 80 }}>
        <SectionTitle title="What I've been working on" />
        <Text align="justify" style={{ color: textColor, paddingLeft: 30, paddingTop: 25 }}>
          I like to always have my hands on a project so I can improve my coding skills. Take a look
          at some of the projects I've dedicated my time to.
        </Text>
        <Group style={{ paddingTop: 25 }}>
          <ProjectCard
            imageSrc={trainingAppImage}
            imageAlt="Training App Image"
            title="Training app"
            descriptionPreview="A web app to help you keep track of your workout weights and see your evolution"
            link={trainingAppGitHubLink}
            fullDescription="Training app description"
          />
          <ProjectCard
            imageSrc={resourcesLinksImage}
            imageAlt="Resource Links Image"
            title="Resource links"
            descriptionPreview="A web app to save links of interesting resources"
            link={resourceLinksGitHubLink}
            fullDescription="Resources links description"
          />
        </Group>
      </Container>
    </Container>
  );
};

export default Projects;
