import { Anchor, Container, Grid, Text } from '@mantine/core';

import {
  BACKGROUND_COLOR,
  GITHUB_LINK,
  LINKEDIN_LINK,
  MAIL_LINK,
  PRIMARY_COLOR,
  TEXT_COLOR,
} from '../constants';

const anchorStyles = {
  color: 'white',
  fontSize: 18,
  fontWeight: 600,
};

const ContactMe = (): JSX.Element => {
  return (
    <Container
      id="contact"
      sx={() => ({
        color: TEXT_COLOR,
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
            backgroundColor: PRIMARY_COLOR,
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
                  href={`mailto: ${MAIL_LINK}`}
                  style={anchorStyles}
                  sx={() => ({
                    '@media (max-width: 400px)': { wordBreak: 'break-all' },
                  })}
                >
                  {MAIL_LINK}
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
                <Anchor href={LINKEDIN_LINK} target="_blank" style={anchorStyles}>
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
            backgroundColor: BACKGROUND_COLOR,
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
                  color: PRIMARY_COLOR,
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
                href={GITHUB_LINK}
                target="_blank"
                sx={() => ({
                  color: TEXT_COLOR,
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
