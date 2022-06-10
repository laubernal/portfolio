import { Anchor, Card, Center, Image, Paper, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { primaryColor, textColor } from '../constants';

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
  descriptionPreview: description,
  link,
  urlProjectName,
}: props): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Card
      shadow="sm"
      p="lg"
      style={{ width: 340, margin: 'auto' }}
      onClick={() => navigate(`/${urlProjectName}`, { replace: true })}
    >
      <Card.Section>
        <Image src={imageSrc} height={250} alt={imageAlt} />
      </Card.Section>
      <Paper>
        <Center>
          <Text
            style={{
              color: primaryColor,
              fontSize: 25,
              fontWeight: 600,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            {title}
          </Text>
        </Center>
        <Text style={{ color: textColor, paddingBottom: 10 }}>{description}</Text>
        <Anchor
          href={link}
          target="_blank"
          style={{ color: textColor, fontWeight: 500, paddingTop: 20 }}
        >
          <Text>VIEW SOURCE CODE &#8250;</Text>
        </Anchor>
      </Paper>
    </Card>
  );
};

export default ProjectCard;
