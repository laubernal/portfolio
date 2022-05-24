import React from 'react';
import { Stack, Text } from '@mantine/core';

function Hero(): JSX.Element {
  return (
    <Stack align="flex-start" spacing={5} style={{ color: '#8F98B3' }}>
      <Text style={{ fontSize: 30 }}>HI, MY NAME IS</Text>
      <Text style={{ fontSize: 40, fontWeight: 700 }}>LAURA BERNAL</Text>
      <Text style={{ fontSize: 30 }}>BACK END DEVELOPER</Text>
    </Stack>
  );
}

export default Hero;
