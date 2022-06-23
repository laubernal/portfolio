import { Anchor, Container, Grid, Text } from '@mantine/core';

import {
  backgroundColor,
  gitHubLink,
  linkedInLink,
  mailLink,
  primaryColor,
  textColor,
} from '../constants';

const anchorStyles = {
  color: 'white',
  fontSize: 18,
  fontWeight: 600,
};

// 888 px to 1 column

const ContactMe = (): JSX.Element => {
  return (
    <Container
      id="contact"
      sx={() => ({
        color: textColor,
        paddingTop: 140,
        paddingBottom: 300,
        '@media (max-width: 1200px)': {
          paddingBottom: 400,
        },
      })}
    >
      <Grid justify="center" style={{ height: 200 }}>
        <Grid.Col
          xs={10}
          lg={6}
          sx={() => ({
            backgroundColor: primaryColor,
            height: 200,
            width: 300,
            '@media (max-width: 1200px)': {
              height: 250,
            },
          })}
        >
          <Grid justify="center">
            <Grid.Col>
              <Text
                sx={() => ({
                  color: 'white',
                  fontSize: 30,
                  fontWeight: 700,
                  paddingTop: 30,
                  paddingBottom: 40,
                  textAlign: 'center',
                  '@media (max-width: 1200px)': {
                    fontSize: 40,
                    paddingBottom: 0,
                  },
                  '@media (max-width: 755px)': {
                    fontSize: '6vw',
                    paddingBottom: 30,
                  },
                })}
              >
                Let's work together
              </Text>
            </Grid.Col>

            <Grid justify="center">
              <Grid.Col
                xs={12}
                lg={9}
                sx={() => ({
                  '@media (max-width: 1200px)': {
                    fontSize: '4vw',
                    textAlign: 'center',
                  },
                })}
              >
                <Anchor
                  href={`mailto: ${mailLink}`}
                  style={anchorStyles}
                  sx={() => ({
                    '@media (max-width: 400px)': { wordBreak: 'break-all' },
                  })}
                >
                  {mailLink}
                </Anchor>
              </Grid.Col>

              <Grid.Col
                xs={12}
                lg={3}
                sx={() => ({
                  '@media (max-width: 1200px)': {
                    textAlign: 'center',
                  },
                })}
              >
                <Anchor href={linkedInLink} target="_blank" style={anchorStyles}>
                  linkedin
                </Anchor>
              </Grid.Col>
            </Grid>
          </Grid>
        </Grid.Col>

        <Grid.Col
          xs={10}
          lg={6}
          style={{}}
          sx={() => ({
            backgroundColor: backgroundColor,
            paddingLeft: 5,
            '@media (max-width: 1200px)': {
              height: 250,
            },
          })}
        >
          <Grid justify="center">
            <Grid.Col span={12}>
              <Text
                sx={() => ({
                  color: primaryColor,
                  fontSize: 30,
                  fontWeight: 700,
                  paddingTop: 30,
                  paddingBottom: 40,
                  textAlign: 'center',
                  '@media (max-width: 1200px)': {
                    fontSize: 40,
                    paddingBottom: 0,
                  },
                  '@media (max-width: 755px)': {
                    fontSize: '6vw',
                    paddingBottom: 30,
                  },
                })}
              >
                Take a look at my work
              </Text>
            </Grid.Col>

            <Grid.Col
              xs={12}
              lg={3}
              sx={() => ({
                '@media (max-width: 1200px)': {
                  textAlign: 'center',
                },
              })}
            >
              <Anchor
                href={gitHubLink}
                target="_blank"
                sx={() => ({
                  color: textColor,
                  fontSize: 20,
                  fontWeight: 600,
                  textAlign: 'center',
                  '@media (max-width: 400px)': {
                    fontSize: 18,
                    textAlign: 'center',
                  },
                })}
              >
                github
              </Anchor>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ContactMe;
