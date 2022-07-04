import { Anchor, Container, Divider, Grid, Group, Image, Text, Tooltip } from '@mantine/core';

import ReactLogo from '../../images/technologies/ReactLogo.png';
import NodeLogo from '../../images/technologies/NodeLogo.png';
import TypescriptLogo from '../../images/technologies/TypescriptLogo.png';
import MantineLogo from '../../images/technologies/MantineLogo.png';
import {
  MANTINE_WEB,
  NODE_WEB,
  PRIMARY_COLOR,
  REACT_WEB,
  SECONDARY_COLOR,
  TEXT_COLOR,
  TYPESCRIPT_WEB,
} from '../../constants';

const Footer = (): JSX.Element => {
  return (
    <Container style={{ color: TEXT_COLOR, fontWeight: 400, paddingBottom: 30, paddingLeft: 0 }}>
      <Divider color={SECONDARY_COLOR} size="xs" style={{ paddingBottom: 30 }} />
      <Grid justify="center" columns={24}>
        <Grid.Col xs={16} lg={7}>
          <Text style={{ fontSize: 18 }}>Made with 💜 by Laura Bernal</Text>
        </Grid.Col>

        <Grid.Col xs={16} lg={9}>
          <Group>
            <Text style={{ fontSize: 18 }}>Site built with</Text>

            <Tooltip
              label="Node.js"
              withArrow
              transition="slide-down"
              transitionDuration={300}
              transitionTimingFunction="ease"
            >
              <Anchor href={NODE_WEB} target="_blank">
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
              <Anchor href={TYPESCRIPT_WEB} target="_blank">
                <Image width={25} height={25} src={TypescriptLogo} alt="TypeScript logo" />
              </Anchor>
            </Tooltip>

            <Tooltip
              label="React"
              withArrow
              transition="slide-down"
              transitionDuration={300}
              transitionTimingFunction="ease"
            >
              <Anchor href={REACT_WEB} target="_blank">
                <Image width={25} height={25} src={ReactLogo} alt="React logo" />
              </Anchor>
            </Tooltip>

            <Tooltip
              label="Matine"
              withArrow
              transition="slide-down"
              transitionDuration={300}
              transitionTimingFunction="ease"
            >
              <Anchor href={MANTINE_WEB} target="_blank">
                <Image width={25} height={25} src={MantineLogo} alt="Mantinelogo" />
              </Anchor>
            </Tooltip>
          </Group>
        </Grid.Col>

        <Grid.Col xs={16} lg={10}>
          <Group>
            <Text style={{ fontSize: 18, wordBreak: 'break-word' }}>
              Images designed by&nbsp;
              <Anchor
                href="https://www.freepik.com/author/pch-vector"
                target="_blank"
                style={{ color: PRIMARY_COLOR, fontWeight: 500 }}
              >
                Pch.vector&nbsp;
              </Anchor>
              from&nbsp;
              <Anchor
                href="https://www.freepik.com/"
                target="_blank"
                style={{ color: PRIMARY_COLOR, fontWeight: 500 }}
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
