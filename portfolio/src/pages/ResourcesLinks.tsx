import { Anchor, Container, Group, Image, Text, Tooltip } from '@mantine/core';

import {
  dockerWeb,
  nodeWeb,
  postgresqlWeb,
  primaryColor,
  reactWeb,
  resourceLinksGitHubLink,
  secondaryColor,
  textColor,
  typescriptWeb,
} from '../constants';
import ReactLogo from '../images/technologies/ReactLogo.png';
import NodeLogo from '../images/technologies/NodeLogo.png';
import TypescriptLogo from '../images/technologies/TypeScriptLogo.png';
import PostgreSqlLogo from '../images/technologies/PostgreSqlLogo.png';
import DockerLogo from '../images/technologies/DockerLogo.png';
import Footer from '../components/footer/Footer';
import SectionTitle from '../components/SectionTitle';
import BackToHomeArrow from '../components/BackToHomeArrow';

const textStyles = { color: textColor, fontSize: 20, paddingTop: 25, paddingBottom: 90 };

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
          color: primaryColor,
          fontSize: 60,
          fontWeight: 700,
          letterSpacing: 5,
          '@media (max-width: 500px)': { fontSize: '16vw' },
        })}
      >
        Resources links 🔗
      </Text>

      <Container style={{ paddingBottom: 90 }}>
        <Text style={{ color: textColor, fontSize: 20, paddingTop: 40, paddingBottom: 40 }}>
          Resources links is an application that allows you to keep all the links of resources that
          you want to look for in the future all in one place.
        </Text>

        <Anchor
          href={resourceLinksGitHubLink}
          target="_blank"
          style={{ color: secondaryColor, fontWeight: 500, paddingBottom: 60 }}
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
        architecture. For the database I used PostgreSQL and Docker to containerize it so I didn't
        have to install it locally. Lastly, f¡I used React.js for the front end.
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

      <Text style={textStyles}>
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

      <Text style={textStyles}>
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
    </Container>
  );
};

export default ResourcesLinks;
