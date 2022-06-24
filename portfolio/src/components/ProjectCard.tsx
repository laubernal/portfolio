import { Anchor, Card, Center, Image, Paper, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import { secondaryColor, textColor } from '../constants';

interface props {
  imageSrc: string;
  imageAlt: string;
  title: string;
  descriptionPreview: string;
  link: string;
  urlProjectName: string;
}

const ProjectCard = ({
  imageSrc,
  imageAlt,
  title,
  descriptionPreview,
  link,
  urlProjectName,
}: props): JSX.Element => {
  return (
    <Card
      shadow="sm"
      p="lg"
      sx={() => ({
        minHeight: 450,
        width: 340,
        margin: 'auto',
        '@media (max-width: 500px)': { width: 200 },
      })}
    >
      <Card.Section<typeof Link> component={Link} to={`/${urlProjectName}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          sx={() => ({
            height: 250,
            '@media (max-width: 500px)': { width: '100%', height: '100%' },
          })}
        />
      </Card.Section>

      <Paper>
        <Center>
          <Text<typeof Link>
            component={Link}
            to={`/${urlProjectName}`}
            style={{
              color: secondaryColor,
              fontSize: 25,
              fontWeight: 600,
              paddingTop: 10,
              paddingBottom: 10,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            {title}
          </Text>
        </Center>
        <Text style={{ color: textColor, fontSize: 18, paddingBottom: 20, paddingLeft: 20 }}>
          {descriptionPreview}
        </Text>

        <Anchor href={link} target="_blank" style={{ color: textColor }}>
          <Text style={{ fontWeight: 500, paddingLeft: 20 }}>VIEW SOURCE CODE &#8250;</Text>
        </Anchor>
      </Paper>
    </Card>
  );
};

export default ProjectCard;
