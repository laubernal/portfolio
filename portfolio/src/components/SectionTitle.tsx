import React from 'react';
import { Text } from '@mantine/core';

interface props {
  title: string;
}

function SectionTitle({ title }: props): JSX.Element {
  return <Text style={{ color: '#8F98B3', fontSize: 35, fontWeight: 700 }}>{title}</Text>;
}

export default SectionTitle;
