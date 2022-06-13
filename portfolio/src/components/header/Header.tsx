import { Container, Grid, Text, Anchor } from '@mantine/core';

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

  return (
    <Container style={{ paddingLeft: 450, paddingTop: 30 }}>
      <Grid grow style={{ color: primaryColor, fontWeight: 500 }}>
        <Grid.Col span={3}>
          <Anchor underline={false} onClick={() => scrollToSection('aboutMe')}>
            <Text style={headerTextStyles}>About me</Text>
          </Anchor>
        </Grid.Col>

        <Grid.Col span={3}>
          <Anchor underline={false} onClick={() => scrollToSection('skills')}>
            <Text style={headerTextStyles}>Skills</Text>
          </Anchor>
        </Grid.Col>

        <Grid.Col span={3}>
          <Anchor underline={false} onClick={() => scrollToSection('projects')}>
            <Text style={headerTextStyles}>Projects</Text>
          </Anchor>
        </Grid.Col>

        <Grid.Col span={3}>
          <Anchor underline={false} onClick={() => scrollToSection('contact')}>
            <Text style={headerTextStyles}>Contact me</Text>
          </Anchor>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Header;
