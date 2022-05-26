import React from 'react';
import { Anchor, Card, CardSection, Paper, Text } from '@mantine/core';

interface props {
  title: string;
  description: string;
}

function ProjectCard({ title, description }: props): JSX.Element {
  return (
    <Card shadow="sm" p="lg" style={{ width: 340, margin: 'auto' }}>
      <CardSection>
        <Text style={{ color: '#707070', fontSize: 25, fontWeight: 600, alignContent: 'center' }}>
          {title}
        </Text>
      </CardSection>
      <Paper>
        <Text>{description}</Text>
        <Anchor
          href="https://github.com/laubernal/training-app"
          target="_blank"
          style={{ color: '#707070' }}
        >
          <Text>VIEW PROJECT &#8250;</Text>
        </Anchor>
      </Paper>
    </Card>
  );
}

export default ProjectCard;
