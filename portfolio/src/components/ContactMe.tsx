import { Anchor, Container, Grid, Group, Text } from '@mantine/core';

import { gitHubLink, linkedInLink, mailLink, primaryColor, textColor } from '../constants';

const anchorStyles = {
  color: 'white',
  fontSize: 18,
  fontWeight: 600,
  paddingTop: 10,
};

// 888 px to 1 column

const ContactMe = (): JSX.Element => {
  return (
    <Container
      id="contact"
      style={{
        color: textColor,
        paddingTop: 140,
        paddingBottom: 200,
      }}
    >
      <Grid style={{ height: 200 }}>
        <Grid.Col span={6} style={{ backgroundColor: primaryColor, height: 200, width: 300 }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 700,
              paddingLeft: 85,
              paddingTop: 30,
            }}
          >
            Let's work together
          </Text>
          <Group spacing={50} style={{ paddingTop: 40, paddingBottom: 10, paddingLeft: 40 }}>
            <Anchor href={`mailto: ${mailLink}`} style={anchorStyles}>
              {mailLink}
            </Anchor>
            <Anchor href={linkedInLink} target="_blank" style={anchorStyles}>
              linkedin
            </Anchor>
          </Group>
        </Grid.Col>
        <Grid.Col span={6} style={{ backgroundColor: '#F3F4F6', paddingLeft: 5 }}>
          <Text
            style={{
              color: primaryColor,
              fontSize: 30,
              fontWeight: 700,
              paddingLeft: 60,
              paddingTop: 30,
            }}
          >
            Take a look at my work
          </Text>
          <Group style={{ paddingTop: 40, paddingLeft: 200 }}>
            <Anchor
              href={gitHubLink}
              target="_blank"
              style={{ color: textColor, fontSize: 20, fontWeight: 600, paddingTop: 10 }}
            >
              github
            </Anchor>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ContactMe;
