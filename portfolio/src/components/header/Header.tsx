import React from 'react';
import { ActionIcon, Button, Container, Grid, Text } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import { useWindowScroll } from '@mantine/hooks';

import { primaryColor } from '../../constants';

function Header(): JSX.Element {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Container style={{ paddingLeft: 450, paddingTop: 30 }}>
      <div className="grid grid-cols-2 w-full sm:w-min sm:flex gap-4 text-xl sm:text-base">
        {['About', 'Skills', 'Projects', 'Timeline'].map(section => (
          <button
            key={section}
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            onClick={() => scrollIntoView({ alignment: 'center' })}
          >
            {section}
          </button>
        ))}
      </div>
      <Grid grow style={{ color: primaryColor, fontWeight: 500 }}>
        <Grid.Col span={2} offset={1}>
          <ActionIcon>
            <Text
              style={{ backgroundColor: 'white', color: primaryColor, fontWeight: 500 }}
              onClick={() => scrollTo({ y: 500 })}
              // onClick={() => scrollIntoView({ alignment: 'center' })}
            >
              About me
            </Text>
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span={2}>
          <Text>Projects</Text>
        </Grid.Col>
        <Grid.Col span={2}>
          <Text>Contact me</Text>
        </Grid.Col>
      </Grid>
      {/* <div style={{ height: '50vh' }} />
      <Text ref={targetRef}>Hello there</Text> */}
    </Container>
  );
}

export default Header;
