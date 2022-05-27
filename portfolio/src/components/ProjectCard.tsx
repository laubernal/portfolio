import React from 'react';
import { Anchor, Card, Paper, Text } from '@mantine/core';

import { primaryColor, textColor } from '../constants';

interface props {
  title: string;
  description: string;
  link: string;
}

function ProjectCard({ title, description, link }: props): JSX.Element {
  return (
    <Card shadow="sm" p="lg" style={{ width: 340, margin: 'auto' }}>
      <Paper>
        <Text
          style={{ color: primaryColor, fontSize: 25, fontWeight: 600, alignContent: 'center' }}
        >
          {title}
        </Text>
        <Text>{description}</Text>
        <Anchor href={link} target="_blank" style={{ color: textColor }}>
          <Text>VIEW PROJECT &#8250;</Text>
        </Anchor>
      </Paper>
    </Card>
  );
}

export default ProjectCard;