import { Anchor, Container, Group, Image, Text } from '@mantine/core';

import { gitHubLink, linkedInLink, mailLink, textColor, primaryColor } from '../../constants';
import SectionTitle from '../SectionTitle';
import ReactLogo from '../../images/technologies/ReactLogo.png';
import NodeLogo from '../../images/technologies/NodeLogo.png';
import TypescriptLogo from '../../images/technologies/TypescriptLogo.png';

const anchorStyles = {
  color: primaryColor,
  fontWeight: 500,
  paddingTop: 10,
};

const Footer = (): JSX.Element => {
  return (
    <Container
      style={{
        color: textColor,
        paddingTop: 140,
        paddingBottom: 50,
      }}
    >
      <SectionTitle title="Let's work together" />
      <Text style={{ fontSize: 20, paddingTop: 25 }}>
        If you're looking for a developer feel free to reach out:
        <Group position="left" style={{ paddingBottom: 10 }}>
          <Anchor href={`mailto: ${mailLink}`} style={anchorStyles}>
            {mailLink}
          </Anchor>
          <Anchor href={linkedInLink} target="_blank" style={anchorStyles}>
            linkedin
          </Anchor>
        </Group>
        Or just take a look at my repositories:
        <Group position="left">
          <Anchor href={gitHubLink} target="_blank" style={anchorStyles}>
            github
          </Anchor>
        </Group>
      </Text>

      <Group position="right">
        <Text>Built with</Text>
        <Anchor href="https://reactjs.org/" target="_blank">
          <Image width={25} height={25} src={ReactLogo} alt="React logo" />
        </Anchor>
        <Anchor href="https://nodejs.dev/" target="_blank">
          <Image width={40} height={25} src={NodeLogo} alt="Node logo" />
        </Anchor>
        <Anchor href="https://www.typescriptlang.org/" target="_blank">
          <Image width={25} height={25} src={TypescriptLogo} alt="TypeScript logo" />
        </Anchor>
      </Group>

      <Group position="right" style={{ paddingTop: 10 }}>
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
