import React, { useState } from 'react';
import { Anchor, Card, Center, Group, Image, Modal, Paper, Text, Title } from '@mantine/core';

import { primaryColor, textColor } from '../constants';
import ReactLogo from '../images/technologies/ReactLogo.png';
import NodeLogo from '../images/technologies/NodeLogo.png';
import TypescriptLogo from '../images/technologies/TypescriptLogo.png';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const projectTitle = title.trim().toLowerCase().split(' ').join('-');

  return (
    <Card
      shadow="sm"
      p="lg"
      style={{ width: 340, margin: 'auto' }}
      // onClick={() => setOpenedModal(true)}
      onClick={() => navigate(`/${projectTitle}`, { replace: true })}
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
        size="70%"
        title={<Title style={{ color: primaryColor, fontSize: 40, paddingTop: 10 }}>{title}</Title>}
        overflow="inside"
        opened={openedModal}
        onClose={() => setOpenedModal(false)}
      >
        <Text style={{ color: textColor, fontSize: 20 }}>{fullDescription}</Text>

        <Title style={{ color: primaryColor, fontSize: 30, paddingTop: 25, paddingBottom: 10 }}>
          Purpose and goals
        </Title>
        <Text style={{ color: textColor, fontSize: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae placerat tellus.
          Aliquam pulvinar, orci sit amet condimentum auctor, leo turpis venenatis lectus, sit amet
          porttitor risus odio sit amet tortor. In eget odio ut est maximus elementum id ac tellus.
          Pellentesque tincidunt nisl ac nulla placerat, at sagittis massa dictum. Morbi gravida dui
          nec nisl sollicitudin iaculis. Maecenas velit quam, finibus vitae lacinia eget, tristique
          nec ipsum. Nulla facilisi. Maecenas at justo eros. Aenean auctor lectus et fermentum
          posuere. Ut metus purus, tempus id nulla at, semper fermentum ligula. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Pellentesque convallis eu mauris vel feugiat.
        </Text>

        <Title style={{ color: primaryColor, fontSize: 30, paddingTop: 25, paddingBottom: 10 }}>
          Tech stack and explanation
        </Title>
        <Text style={{ color: textColor, fontSize: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae placerat tellus.
          Aliquam pulvinar, orci sit amet condimentum auctor, leo turpis venenatis lectus, sit amet
          porttitor risus odio sit amet tortor. In eget odio ut est maximus elementum id ac tellus.
          Pellentesque tincidunt nisl ac nulla placerat, at sagittis massa dictum. Morbi gravida dui
          nec nisl sollicitudin iaculis. Maecenas velit quam, finibus vitae lacinia eget, tristique
          nec ipsum. Nulla facilisi. Maecenas at justo eros. Aenean auctor lectus et fermentum
          posuere. Ut metus purus, tempus id nulla at, semper fermentum ligula. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Pellentesque convallis eu mauris vel feugiat.
        </Text>

        <Title style={{ color: primaryColor, fontSize: 30, paddingTop: 25, paddingBottom: 10 }}>
          Problems and thought process
        </Title>
        <Text style={{ color: textColor, fontSize: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae placerat tellus.
          Aliquam pulvinar, orci sit amet condimentum auctor, leo turpis venenatis lectus, sit amet
          porttitor risus odio sit amet tortor. In eget odio ut est maximus elementum id ac tellus.
          Pellentesque tincidunt nisl ac nulla placerat, at sagittis massa dictum. Morbi gravida dui
          nec nisl sollicitudin iaculis. Maecenas velit quam, finibus vitae lacinia eget, tristique
          nec ipsum. Nulla facilisi. Maecenas at justo eros. Aenean auctor lectus et fermentum
          posuere. Ut metus purus, tempus id nulla at, semper fermentum ligula. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Pellentesque convallis eu mauris vel feugiat.
        </Text>

        <Title style={{ color: primaryColor, fontSize: 30, paddingTop: 25, paddingBottom: 10 }}>
          Lessons learned
        </Title>
        <Text style={{ color: textColor, fontSize: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae placerat tellus.
          Aliquam pulvinar, orci sit amet condimentum auctor, leo turpis venenatis lectus, sit amet
          porttitor risus odio sit amet tortor. In eget odio ut est maximus elementum id ac tellus.
          Pellentesque tincidunt nisl ac nulla placerat, at sagittis massa dictum. Morbi gravida dui
          nec nisl sollicitudin iaculis. Maecenas velit quam, finibus vitae lacinia eget, tristique
          nec ipsum. Nulla facilisi. Maecenas at justo eros. Aenean auctor lectus et fermentum
          posuere. Ut metus purus, tempus id nulla at, semper fermentum ligula. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Pellentesque convallis eu mauris vel feugiat.
        </Text>

        <Group position="center" style={{ paddingTop: 25 }}>
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
