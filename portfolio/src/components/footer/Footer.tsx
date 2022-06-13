import { Anchor, Container, Group, Image, Text, Tooltip } from '@mantine/core';

import { gitHubLink, linkedInLink, mailLink, textColor, primaryColor } from '../../constants';
import SectionTitle from '../SectionTitle';
import ReactLogo from '../../images/technologies/ReactLogo.png';
import NodeLogo from '../../images/technologies/NodeLogo.png';
import TypescriptLogo from '../../images/technologies/TypeScriptLogo.png';

const anchorStyles = {
  color: primaryColor,
  fontSize: 18,
  fontWeight: 600,
  paddingTop: 10,
};

const Footer = (): JSX.Element => {
  return (
    <Container
      id="contact"
      style={{
        color: textColor,
        paddingTop: 140,
        paddingBottom: 50,
      }}
    >
      <SectionTitle title="Let's work together" />
      <Text style={{ fontSize: 20, paddingTop: 25 }}>
        If you're looking for a developer feel free to reach out:
        <Group style={{ paddingBottom: 10, paddingLeft: 50 }}>
          <Anchor href={`mailto: ${mailLink}`} style={anchorStyles}>
            {mailLink}
          </Anchor>
          <Anchor href={linkedInLink} target="_blank" style={anchorStyles}>
            linkedin
          </Anchor>
        </Group>
        Or just take a look at my repositories:
        <Group style={{ paddingLeft: 150 }}>
          <Anchor href={gitHubLink} target="_blank" style={anchorStyles}>
            github
          </Anchor>
        </Group>
      </Text>

      <Group position="right">
        <Text>Site built with</Text>

        <Tooltip
          label="React"
          withArrow
          transition="slide-down"
          transitionDuration={300}
          transitionTimingFunction="ease"
        >
          <Anchor href="https://reactjs.org/" target="_blank">
            <Image width={25} height={25} src={ReactLogo} alt="React logo" />
          </Anchor>
        </Tooltip>

        <Tooltip
          label="Node.js"
          withArrow
          transition="slide-down"
          transitionDuration={300}
          transitionTimingFunction="ease"
        >
          <Anchor href="https://nodejs.dev/" target="_blank">
            <Image width={40} height={25} src={NodeLogo} alt="Node logo" />
          </Anchor>
        </Tooltip>

        <Tooltip
          label="TypeScript"
          withArrow
          transition="slide-down"
          transitionDuration={300}
          transitionTimingFunction="ease"
        >
          <Anchor href="https://www.typescriptlang.org/" target="_blank">
            <Image width={25} height={25} src={TypescriptLogo} alt="TypeScript logo" />
          </Anchor>
        </Tooltip>
      </Group>

      <Group position="right" style={{ paddingTop: 15 }}>
        <Text>
          Images designed by&nbsp;
          <Anchor href="https://www.freepik.com/author/pch-vector" target="_blank">
            pch.vector&nbsp;
          </Anchor>
          from&nbsp;
          <Anchor href="https://www.freepik.com/" target="_blank">
            Freepik
          </Anchor>
        </Text>
      </Group>
    </Container>
  );
};

export default Footer;
