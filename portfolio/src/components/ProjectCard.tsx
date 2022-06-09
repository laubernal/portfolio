import React, { useState } from 'react';
import { Anchor, Card, Center, Group, Image, Modal, Paper, Text } from '@mantine/core';

import { primaryColor, textColor } from '../constants';
import ReactLogo from '../images/technologies/ReactLogo.png';
import NodeLogo from '../images/technologies/NodeLogo.png';
import TypescriptLogo from '../images/technologies/TypescriptLogo.png';

interface props {
  imageSrc: string;
  imageAlt: string;
  title: string;
  descriptionPreview: string;
  link: string;
  fullDescription: string;
}

const ProjectCard = ({
  imageSrc,
  imageAlt,
  title,
  descriptionPreview: description,
  link,
  fullDescription,
}: props): JSX.Element => {
  const [openedModal, setOpenedModal] = useState(false);

  return (
    <Card
      shadow="sm"
      p="lg"
      style={{ width: 340, margin: 'auto' }}
      onClick={() => setOpenedModal(true)}
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

      <Modal
        centered
        size="xl"
        opened={openedModal}
        onClose={() => setOpenedModal(false)}
        title={title}
      >
        <Text>{fullDescription}</Text>
        <Group position="center">
          <Text>Built with</Text>
          <Anchor href="https://reactjs.org/" target="_blank">
            <Image width={25} height={25} src={ReactLogo} alt="React logo" />
          </Anchor>
          <Anchor href="https://nodejs.dev/" target="_blank">
            <Image width={40} height={25} src={NodeLogo} alt="Node logo" />
          </Anchor>
          <Anchor href="https://www.typescriptlang.org/" target="_blank">
            <Image width={25} height={25} src={TypescriptLogo} alt="TypeScript logo" />
          </Anchor>
        </Group>
      </Modal>
    </Card>
  );
};

export default ProjectCard;
