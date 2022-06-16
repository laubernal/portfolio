import React from 'react';
import { Text } from '@mantine/core';
import { primaryColor } from '../constants';

interface props {
  title: string;
}

const SectionTitle = ({ title }: props): JSX.Element => {
  return <Text style={{ color: primaryColor, fontSize: 35, fontWeight: 700 }}>{title}</Text>;
};

export default SectionTitle;
