import { Anchor, Container, Group, Image, Text, Tooltip } from '@mantine/core';

import ReactLogo from '../../images/technologies/ReactLogo.png';
import NodeLogo from '../../images/technologies/NodeLogo.png';
import TypescriptLogo from '../../images/technologies/TypeScriptLogo.png';
import { nodeWeb, reactWeb, textColor, typescriptWeb } from '../../constants';

const Footer = (): JSX.Element => {
  return (
    <Container style={{ color: textColor }}>
      <Group position="right">
        <Text>Site built with</Text>

        <Tooltip
          label="React"
          withArrow
          transition="slide-down"
          transitionDuration={300}
          transitionTimingFunction="ease"
        >
          <Anchor href={reactWeb} target="_blank">
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
          <Anchor href={nodeWeb} target="_blank">
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
          <Anchor href={typescriptWeb} target="_blank">
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
