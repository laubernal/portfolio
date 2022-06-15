import { Container, Grid, Text, Anchor, Menu, UnstyledButton, MediaQuery } from '@mantine/core';
import { Menu2 } from 'tabler-icons-react';

import { primaryColor } from '../../constants';

const headerTextStyles = {
  fontSize: 18,
  fontWeight: 500,
  color: primaryColor,
};

const Header = (): JSX.Element => {
  const scrollToSection = (section: string) => {
    const textElement = document.getElementById(section);

    textElement!.scrollIntoView({ behavior: 'smooth' });
  };

  // Smaller than 940 px Menu
  // Larger than 940 px grid

  return (
    <Container style={{ paddingLeft: 450, paddingTop: 30 }}>
      <MediaQuery smallerThan={940} styles={{ display: 'none' }}>
        <Grid grow style={{ color: primaryColor, fontWeight: 500 }}>
          <Grid.Col span={2}>
            <Anchor underline={false} onClick={() => scrollToSection('aboutMe')}>
              <Text style={headerTextStyles}>About me</Text>
            </Anchor>
          </Grid.Col>

          <Grid.Col span={1}>
            <Anchor underline={false} onClick={() => scrollToSection('skills')}>
              <Text style={headerTextStyles}>Skills</Text>
            </Anchor>
          </Grid.Col>

          <Grid.Col span={2}>
            <Anchor underline={false} onClick={() => scrollToSection('projects')}>
              <Text style={headerTextStyles}>Projects</Text>
            </Anchor>
          </Grid.Col>

          <Grid.Col span={2}>
            <Anchor underline={false} onClick={() => scrollToSection('contact')}>
              <Text style={headerTextStyles}>Contact me</Text>
            </Anchor>
          </Grid.Col>
        </Grid>
      </MediaQuery>

      <MediaQuery largerThan={940} styles={{ display: 'none' }}>
        <Menu
          control={
            <UnstyledButton>
              <Menu2 size={36} color={primaryColor} />
            </UnstyledButton>
          }
          sx={() => ({
            width: '100%',
            paddingLeft: 300,
          })}
        >
          <Menu.Label>Application</Menu.Label>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item>Messages</Menu.Item>
          <Menu.Item>Gallery</Menu.Item>
          <Menu.Item
            rightSection={
              <Text size="xs" color="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item>Transfer my data</Menu.Item>
          <Menu.Item color="red">Delete my account</Menu.Item>
        </Menu>
      </MediaQuery>
    </Container>
  );
};

export default Header;
