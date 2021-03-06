import { Anchor, Container, Grid, Group, Image, Text, Tooltip } from '@mantine/core';

import NodeLogo from '../images/technologies/NodeLogo.png';
import TypeScriptLogo from '../images/technologies/TypeScriptLogo.png';
import PostgreSqlLogo from '../images/technologies/PostgreSqlLogo.png';
import DockerLogo from '../images/technologies/DockerLogo.png';
import {
  DOCKER_WEB,
  NODE_WEB,
  POSTGRESQL_WEB,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TEXT_COLOR,
  TRAINING_APP_GITHUB_LINK,
  TYPESCRIPT_WEB,
} from '../constants';
import Footer from '../components/footer/Footer';
import SectionTitle from '../components/SectionTitle';
import BackToHomeArrow from '../components/BackToHomeArrow';
import trainingAppImage from '../images/projects/trainingAppImage.jpg';

const textStyles = { color: TEXT_COLOR, fontSize: 20, paddingTop: 25, paddingBottom: 90 };

const TrainingApp = (): JSX.Element => {
  return (
    <Container
      sx={() => ({
        paddingTop: 200,
        '@media (max-width: 1024px)': { paddingTop: 100 },
      })}
    >
      <BackToHomeArrow />
      <Text
        sx={() => ({
          color: PRIMARY_COLOR,
          fontSize: 60,
          fontWeight: 700,
          letterSpacing: 5,
          '@media (max-width: 500px)': { fontSize: '16vw' },
        })}
      >
        Training app 🏋🏻‍♀️
      </Text>

      <Grid style={{ paddingBottom: 90 }}>
        <Grid.Col span={12}>
          <Text style={{ color: TEXT_COLOR, fontSize: 20, paddingTop: 40, paddingBottom: 40 }}>
            Training app is an application that allows you to track your gym sessions so you can see
            your weightlifting progression.
          </Text>

          <Anchor
            href={TRAINING_APP_GITHUB_LINK}
            target="_blank"
            style={{ color: SECONDARY_COLOR, fontWeight: 500, paddingBottom: 60 }}
          >
            <Text>VIEW SOURCE CODE &#8250;</Text>
          </Anchor>
        </Grid.Col>
        <Grid.Col span={12}>
          <Image
            src={trainingAppImage}
            alt="Training App Image"
            sx={() => ({
              paddingTop: 40,
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '75%',
              '@media (max-width: 500px)': { width: '100%' },
            })}
          />
        </Grid.Col>
      </Grid>

      <SectionTitle title="Purpose and goals" />

      <Text style={textStyles}>
        In 2019 I started going to the gym, and two years later I wanted to know how I was
        progressing and how I was performing. Later that year I started learning to code so I
        thought it would be a great idea if I coded my own app to keep track of my trainings. <br />
        <br /> My first goal was just to save the exercises for each training, with its weights and
        reps. In the future, I want to add a front end and to add graphics so you can see in a
        clearer way your evolution with your weights in every exercise.
      </Text>

      <SectionTitle title="Tech stack and explanation" />

      <Text style={textStyles}>
        For this project I used Node.js with TypeScript to build the backend with an hexagonal
        architecture. Regarding the database I used PostgreSQL and Docker to containerize it so I
        didn't have to install it locally.
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
          <Anchor href={NODE_WEB} target="_blank">
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
          <Anchor href={TYPESCRIPT_WEB} target="_blank">
            <Image src={TypeScriptLogo} alt="TypeScript logo" />
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
          <Anchor href={POSTGRESQL_WEB} target="_blank">
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
          <Anchor href={DOCKER_WEB} target="_blank">
            <Image src={DockerLogo} alt="Docker logo" />
          </Anchor>
        </Tooltip>
      </Group>

      <SectionTitle title="Problems and thought process" />

      <Text style={textStyles}>
        This was my first project applying hexagonal architecture so at the beginning it was hard to
        code without having a solid understanding and clear vision of how the hexagonal architecture
        works. But as I kept researching and coding it became a lot clearer and I started to
        understand the benefits of using it. <br /> <br /> At the beginning I used MySQL as my
        database but later I decided to change it to PostgreSQL and thanks to the hexagonal
        architecture it was very easy to make that change. Another challenge I faced was handling
        complex objects and making operations with them.
      </Text>

      <SectionTitle title="Lessons learned" />

      <Text style={{ color: TEXT_COLOR, fontSize: 20, paddingTop: 25, paddingBottom: 120 }}>
        This project has helped me to solidify my knowledge of hexagonal architecture, its benefits,
        the ease of making major changes and not having to touch each implementation where it is
        used. I also learned a lot more on TypeScript and how to handle complex objects of data.
      </Text>

      <Footer />
    </Container>
  );
};

export default TrainingApp;
