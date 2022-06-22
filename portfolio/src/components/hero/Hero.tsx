import { Anchor, Container, Grid, Group, Image, Text } from '@mantine/core';

import GitHubLogo from '../../images/social/GitHubLogo.png';
import LinkedInLogo from '../../images/social/LinkedInLogo.png';

import { primaryColor, linkedInLink, gitHubLink, textColor, secondaryColor } from '../../constants';

const Hero = (): JSX.Element => {
  return (
    <Container style={{ paddingBottom: 255 }}>
      <Grid>
        <Grid.Col span={12}>
          <Text
            sx={() => ({
              color: textColor,
              fontSize: 35,
              '@media (max-width: 1000px)': { fontSize: '6vw' },
            })}
          >
            HI, MY NAME IS
          </Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Text
            style={{}}
            sx={() => ({
              color: primaryColor,
              fontSize: 70,
              fontWeight: 700,
              letterSpacing: 10,
              '@media (max-width: 1000px)': {
                fontSize: '10vw',
              },
            })}
          >
            LAURA BERNAL
          </Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Group>
            <Text
              sx={() => ({
                color: textColor,
                fontSize: 40,
                '@media (max-width: 1000px)': {
                  fontSize: '6vw',
                },
              })}
            >
              BACK END
            </Text>

            <Text
              sx={() => ({
                color: secondaryColor,
                fontSize: 40,
                fontWeight: 500,
                '@media (max-width: 1000px)': {
                  fontSize: '6vw',
                },
              })}
            >
              DEVELOPER
            </Text>
          </Group>
        </Grid.Col>
      </Grid>

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
