import { Anchor, Container, Group, Image, Text, Tooltip } from '@mantine/core';

import {
  DOCKER_WEB,
  MANTINE_WEB,
  NODE_WEB,
  POSTGRESQL_WEB,
  PRIMARY_COLOR,
  PRISMA_WEB,
  REACT_WEB,
  RESOURCES_LINKS_GITHUB_LINK,
  SECONDARY_COLOR,
  TEXT_COLOR,
  TYPESCRIPT_WEB,
} from '../constants';
import ReactLogo from '../images/technologies/ReactLogo.png';
import NodeLogo from '../images/technologies/NodeLogo.png';
import TypescriptLogo from '../images/technologies/TypeScriptLogo.png';
import PostgreSqlLogo from '../images/technologies/PostgreSqlLogo.png';
import PrismaLogo from '../images/technologies/PrismaLogo.png';
import MantineLogo from '../images/technologies/MantineLogo.png';
import DockerLogo from '../images/technologies/DockerLogo.png';
import Footer from '../components/footer/Footer';
import SectionTitle from '../components/SectionTitle';
import BackToHomeArrow from '../components/BackToHomeArrow';

const textStyles = { color: TEXT_COLOR, fontSize: 20, paddingTop: 25, paddingBottom: 90 };

const ResourcesLinks = (): JSX.Element => {
  return (
    <Container
      sx={() => ({
        paddingTop: 200,
        '@media (max-width: 1024px)': { paddingTop: 100 },
      })}
    >
      <BackToHomeArrow />
      <Text
        style={{}}
        sx={() => ({
          color: PRIMARY_COLOR,
          fontSize: 60,
          fontWeight: 700,
          letterSpacing: 5,
          '@media (max-width: 500px)': { fontSize: '16vw' },
        })}
      >
        Resources links 🔗
      </Text>

      <Container style={{ paddingBottom: 90, paddingLeft: 0 }}>
        <Text
          style={{
            color: TEXT_COLOR,
            fontSize: 20,
            paddingTop: 40,
            paddingBottom: 40,
          }}
        >
          Resources links is an application that allows you to keep all the links of resources that
          you want to look for in the future in one place.
        </Text>

        <Anchor
          href={RESOURCES_LINKS_GITHUB_LINK}
          target="_blank"
          style={{ color: SECONDARY_COLOR, fontWeight: 500, paddingBottom: 60 }}
        >
          <Text>VIEW SOURCE CODE &#8250;</Text>
        </Anchor>
      </Container>

      <SectionTitle title="Purpose and goals" />

      <Text style={textStyles}>
        I always want that my projects have real impact on my life so they can help me do things
        faster, so with Resources Links what I wanted was to have in one place all the links to the
        resources that I find interesting or that I know that I will need in the future. You can add
        a title, a description and categories so you have all the details of each resource and to be
        able of doing a search and obtain the best result.
      </Text>

      <SectionTitle title="Tech stack and explanation" />

      <Text style={textStyles}>
        For this project I used Node.js with TypeScript to build the back end with an hexagonal
        architecture. For the database I used PostgreSQL with Prisma and Docker to containerize it
        so I didn't have to install it locally. Lastly, I used React.js for the front end with the
        help of Mantine's components.
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
            <Image src={TypescriptLogo} alt="TypeScript logo" />
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
          label="Prisma"
          withArrow
          position="bottom"
          transition="slide-down"
          transitionDuration={300}
          transitionTimingFunction="ease"
        >
          <Anchor href={PRISMA_WEB} target="_blank">
            <Image height={48} width={48} src={PrismaLogo} alt="Prisma logo" />
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

        <Tooltip
          label="React"
          withArrow
          position="bottom"
          transition="slide-down"
          transitionDuration={300}
          transitionTimingFunction="ease"
        >
          <Anchor href={REACT_WEB} target="_blank">
            <Image src={ReactLogo} alt="React logo" />
          </Anchor>
        </Tooltip>

        <Tooltip
          label="Mantine"
          withArrow
          position="bottom"
          transition="slide-down"
          transitionDuration={300}
          transitionTimingFunction="ease"
        >
          <Anchor href={MANTINE_WEB} target="_blank">
            <Image height={48} width={48} src={MantineLogo} alt="Mantine logo" />
          </Anchor>
        </Tooltip>
      </Group>

      <SectionTitle title="Problems and thought process" />

      <Text style={textStyles}>
        As my first project using React.js I faced the complexity of state handling. I had to
        understand how the state works and how to manage it.
      </Text>

      <SectionTitle title="Lessons learned" />

      <Text style={{ color: TEXT_COLOR, fontSize: 20, paddingTop: 25, paddingBottom: 120 }}>
        This was my second project implementing an hexagonal architecture so it helped me
        solidifying my knowledge. Since the app doesn't have much business logic I focused in
        learning the front end side and I have found the complexity of handling states in an SPA. I
        have tried to improve my coding skills to make it more readable.
      </Text>

      <Footer />
    </Container>
  );
};

export default ResourcesLinks;
