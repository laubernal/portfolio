import { Anchor, Container, Group, Image, Text, Tooltip } from '@mantine/core';

import ReactLogo from '../images/technologies/ReactLogo.png';
import NodeLogo from '../images/technologies/NodeLogo.png';
import TypescriptLogo from '../images/technologies/TypeScriptLogo.png';
import PostgreSqlLogo from '../images/technologies/PostgreSqlLogo.png';
import DockerLogo from '../images/technologies/DockerLogo.png';
import {
  dockerWeb,
  nodeWeb,
  postgresqlWeb,
  primaryColor,
  reactWeb,
  secondaryColor,
  textColor,
  trainingAppGitHubLink,
  typescriptWeb,
} from '../constants';
import Footer from '../components/footer/Footer';
import ScrollToTopArrow from '../components/ScrollToTopArrow';
import SectionTitle from '../components/SectionTitle';
import BackToHomeArrow from '../components/BackToHomeArrow';

const TrainingApp = (): JSX.Element => {
  return (
    <Container style={{ paddingTop: 200 }}>
      <BackToHomeArrow />
      <Text style={{ color: primaryColor, fontSize: 60, fontWeight: 700, letterSpacing: 5 }}>
        Training app 🏋🏻‍♀️
      </Text>

      <Container style={{ paddingBottom: 90 }}>
        <Text style={{ color: textColor, fontSize: 20, paddingTop: 40, paddingBottom: 40 }}>
          Training app is an application that allows you to keep track of your gym sessions so you
          can see your progression.
        </Text>

        <Anchor
          href={trainingAppGitHubLink}
          target="_blank"
          style={{ color: secondaryColor, fontWeight: 500, paddingBottom: 60 }}
        >
          <Text>VIEW SOURCE CODE &#8250;</Text>
        </Anchor>
      </Container>

      <SectionTitle title="Purpose and goals" />

      <Text style={{ color: textColor, fontSize: 20, paddingTop: 25, paddingBottom: 90 }}>
        In 2019 I started going to the gym, and two years later I wanted to know how I was
        progressing and how I was performing. Later that year I started learning to code so I
        thought it would be a great idea if I coded my own app to keep track of my trainings. <br />
        <br /> My first goal was just to save the exercises for each training, with it's weights and
        reps. In the future, my goal is to add graphs so you can see in a clear way your evolution
        with your weights in every exercise.
      </Text>

      <SectionTitle title="Tech stack and explanation" />

      <Text style={{ color: textColor, fontSize: 20, paddingTop: 25, paddingBottom: 30 }}>
        For this project I used Node.js with TypeScript for the backend, PostgreSQL for the
        database, and Docker.
      </Text>

      <Group position="center" spacing={50} style={{ paddingBottom: 90 }}>
        <Tooltip
          label="Node.js"
          withArrow
          position="bottom"
          transition="slide-down"
          transitionDuration={300}
          transitionTimingFunction="ease"
        >
          <Anchor href={nodeWeb} target="_blank">
            <Image src={NodeLogo} alt="Node logo" />
          </Anchor>
        </Tooltip>

        <Tooltip
          label="TypeScript"
          withArrow
          position="bottom"
          transition="slide-down"
          transitionDuration={300}
          transitionTimingFunction="ease"
        >
          <Anchor href={typescriptWeb} target="_blank">
            <Image src={TypescriptLogo} alt="TypeScript logo" />
          </Anchor>
        </Tooltip>

        <Tooltip
          label="React"
          withArrow
          position="bottom"
          transition="slide-down"
          transitionDuration={300}
          transitionTimingFunction="ease"
        >
          <Anchor href={reactWeb} target="_blank">
            <Image src={ReactLogo} alt="React logo" />
          </Anchor>
        </Tooltip>

        <Tooltip
          label="PostgreSQL"
          withArrow
          position="bottom"
          transition="slide-down"
          transitionDuration={300}
          transitionTimingFunction="ease"
        >
          <Anchor href={postgresqlWeb} target="_blank">
            <Image src={PostgreSqlLogo} alt="PostgreSQL logo" />
          </Anchor>
        </Tooltip>

        <Tooltip
          label="Docker"
          withArrow
          position="bottom"
          transition="slide-down"
          transitionDuration={300}
          transitionTimingFunction="ease"
        >
          <Anchor href={dockerWeb} target="_blank">
            <Image src={DockerLogo} alt="Docker logo" />
          </Anchor>
        </Tooltip>
      </Group>

      <SectionTitle title="Problems and thought process" />

      <Text style={{ color: textColor, fontSize: 20, paddingTop: 25, paddingBottom: 90 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae placerat tellus. Aliquam
        pulvinar, orci sit amet condimentum auctor, leo turpis venenatis lectus, sit amet porttitor
        risus odio sit amet tortor. In eget odio ut est maximus elementum id ac tellus. Pellentesque
        tincidunt nisl ac nulla placerat, at sagittis massa dictum. Morbi gravida dui nec nisl
        sollicitudin iaculis. Maecenas velit quam, finibus vitae lacinia eget, tristique nec ipsum.
        Nulla facilisi. Maecenas at justo eros. Aenean auctor lectus et fermentum posuere. Ut metus
        purus, tempus id nulla at, semper fermentum ligula. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Pellentesque convallis eu mauris vel feugiat.
      </Text>

      <SectionTitle title="Lessons learned" />

      <Text style={{ color: textColor, fontSize: 20, paddingTop: 25, paddingBottom: 90 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae placerat tellus. Aliquam
        pulvinar, orci sit amet condimentum auctor, leo turpis venenatis lectus, sit amet porttitor
        risus odio sit amet tortor. In eget odio ut est maximus elementum id ac tellus. Pellentesque
        tincidunt nisl ac nulla placerat, at sagittis massa dictum. Morbi gravida dui nec nisl
        sollicitudin iaculis. Maecenas velit quam, finibus vitae lacinia eget, tristique nec ipsum.
        Nulla facilisi. Maecenas at justo eros. Aenean auctor lectus et fermentum posuere. Ut metus
        purus, tempus id nulla at, semper fermentum ligula. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Pellentesque convallis eu mauris vel feugiat.
      </Text>

      <Footer />
      <ScrollToTopArrow />
    </Container>
  );
};

export default TrainingApp;
