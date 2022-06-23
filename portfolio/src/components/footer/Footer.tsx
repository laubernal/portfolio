import { Anchor, Container, Divider, Grid, Group, Image, Text, Tooltip } from '@mantine/core';

import ReactLogo from '../../images/technologies/ReactLogo.png';
import NodeLogo from '../../images/technologies/NodeLogo.png';
import TypescriptLogo from '../../images/technologies/TypeScriptLogo.png';
import {
  nodeWeb,
  primaryColor,
  reactWeb,
  secondaryColor,
  textColor,
  typescriptWeb,
} from '../../constants';

const Footer = (): JSX.Element => {
  return (
    <Container style={{ color: textColor, fontWeight: 400, paddingBottom: 30 }}>
      <Divider color={secondaryColor} size="xs" style={{ paddingBottom: 30 }} />
      <Grid justify="center" columns={24}>
        <Grid.Col xs={13} lg={7}>
          <Text style={{ fontSize: 18 }}>Made with 💜 by Laura Bernal</Text>
        </Grid.Col>

        <Grid.Col xs={13} lg={7}>
          <Group>
            <Text style={{ fontSize: 18 }}>Site built with</Text>

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
        </Grid.Col>

        <Grid.Col xs={13} lg={10}>
          <Group>
            <Text style={{ fontSize: 18 }}>
              Images designed by&nbsp;
              <Anchor
                href="https://www.freepik.com/author/pch-vector"
                target="_blank"
                style={{ color: primaryColor, fontWeight: 500 }}
              >
                Pch.vector&nbsp;
              </Anchor>
              from&nbsp;
              <Anchor
                href="https://www.freepik.com/"
                target="_blank"
                style={{ color: primaryColor, fontWeight: 500 }}
              >
                Freepik
              </Anchor>
            </Text>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Footer;
