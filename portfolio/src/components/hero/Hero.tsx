import { Anchor, Container, Group, Image, Stack, Text } from '@mantine/core';

import GitHubLogo from '../../images/social/GitHubLogo.png';
import LinkedInLogo from '../../images/social/LinkedInLogo.png';

import { primaryColor, linkedInLink, gitHubLink, textColor } from '../../constants';

const Hero = (): JSX.Element => {
  return (
    <Container style={{ paddingTop: 150, paddingBottom: 275 }}>
      <Stack align="flex-start" spacing={1}>
        <Text style={{ color: textColor, fontSize: 25 }}>HI, MY NAME IS</Text>
        <Text style={{ color: primaryColor, fontSize: 60, fontWeight: 700, letterSpacing: 10 }}>
          LAURA BERNAL
        </Text>
        <Text style={{ color: textColor, fontSize: 30 }}>BACK END DEVELOPER</Text>
      </Stack>

      <Group style={{ paddingTop: 50 }}>
        <Anchor href={gitHubLink} target="_blank">
          <Image width={35} height={35} src={GitHubLogo} alt="GitHub logo" />
        </Anchor>
        <Anchor href={linkedInLink} target="_blank">
          <Image width={35} height={35} src={LinkedInLogo} alt="LinkedIn logo" />
        </Anchor>
      </Group>
    </Container>
  );
};

export default Hero;
