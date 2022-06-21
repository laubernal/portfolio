import { Container, Grid, Text, Anchor, Menu, UnstyledButton, MediaQuery } from '@mantine/core';
import { Menu2 } from 'tabler-icons-react';

import { primaryColor, textColor } from '../../constants';

const headerTextStyles = {
  fontSize: 20,
  fontWeight: 500,
  color: primaryColor,
};

const menuItemsStyles = {
  color: textColor,
  fontSize: 16,
  fontWeight: 500,
};

const Header = (): JSX.Element => {
  const scrollToSection = (section: string) => {
    const textElement = document.getElementById(section);

    textElement!.scrollIntoView({ behavior: 'smooth' });
  };

  // Smaller than 940 px Menu
  // Larger than 940 px grid

  return (
    <Container>
      <MediaQuery smallerThan={1000} styles={{ display: 'none' }}>
        <Grid
          grow
          style={{ color: primaryColor, fontWeight: 500, paddingLeft: 450, paddingTop: 30 }}
        >
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

      <MediaQuery largerThan={1000} styles={{ display: 'none' }}>
        <Menu
          trigger="hover"
          size={150}
          withArrow
          control={
            <UnstyledButton>
              <Menu2 size={36} color={primaryColor} />
            </UnstyledButton>
          }
          sx={() => ({
            width: '100%',
            paddingTop: 30,
          })}
        >
          <Menu.Item onClick={() => scrollToSection('aboutMe')} style={menuItemsStyles}>
            About me
          </Menu.Item>
          <Menu.Item onClick={() => scrollToSection('skills')} style={menuItemsStyles}>
            Skills
          </Menu.Item>
          <Menu.Item onClick={() => scrollToSection('projects')} style={menuItemsStyles}>
            Projects
          </Menu.Item>
          <Menu.Item onClick={() => scrollToSection('contact')} style={menuItemsStyles}>
            Contact me
          </Menu.Item>
        </Menu>
      </MediaQuery>
    </Container>
  );
};

export default Header;
