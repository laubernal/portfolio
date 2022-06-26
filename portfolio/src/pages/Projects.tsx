import { Container, Grid, Text } from '@mantine/core';

import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { trainingAppGitHubLink, resourceLinksGitHubLink, textColor } from '../constants';
import trainingAppImage from '../images/projects/trainingAppImage.jpg';
import resourcesLinksImage from '../images/projects/resourcesLinksImage.jpg';

const Projects = (): JSX.Element => {
  return (
    <Container id="projects" style={{ paddingTop: 140, paddingBottom: 100 }}>
      <Container
        style={{}}
        sx={() => ({
          paddingRight: 80,
          '@media (max-width: 500px)': { paddingRight: 0 },
        })}
      >
        <SectionTitle title="What I've been working on" />
        <Text
          align="justify"
          style={{}}
          sx={() => ({
            color: textColor,
            fontSize: 20,
            paddingLeft: 30,
            paddingTop: 25,
            paddingBottom: 40,
            '@media (max-width: 500px)': { fontSize: '6vw', paddingLeft: 0, paddingRight: 0 },
          })}
        >
          I like to always have my hands on a project so I can improve my coding skills. Take a look
          at some of the projects I've dedicated my time to.
        </Text>

        <Grid justify="center">
          <Grid.Col xs={12} md={6}>
            <ProjectCard
              imageSrc={trainingAppImage}
              imageAlt="Training App Image"
              title="Training app"
              descriptionPreview="A web app to help you keep track of your workout weights and see your evolution"
              link={trainingAppGitHubLink}
              urlProjectName="training-app"
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <ProjectCard
              imageSrc={resourcesLinksImage}
              imageAlt="Resource Links Image"
              title="Resources links"
              descriptionPreview="A web app to save links of interesting resources"
              link={resourceLinksGitHubLink}
              urlProjectName="resources-links"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
};

export default Projects;
