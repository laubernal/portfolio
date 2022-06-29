import { ActionIcon, Container, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'tabler-icons-react';
import { PRIMARY_COLOR } from '../constants';

const BackToHomeArrow = (): JSX.Element => {
  return (
    <Container style={{ paddingBottom: 50 }}>
      <Group>
        <ActionIcon<typeof Link> component={Link} to="/" title="Back arrow">
          <ArrowLeft strokeWidth={3} color={PRIMARY_COLOR} />
        </ActionIcon>
        <ActionIcon<typeof Link>
          component={Link}
          to="/"
          title="Back button"
          style={{ textDecoration: 'none' }}
        >
          <Text
            style={{
              color: PRIMARY_COLOR,
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Back
          </Text>
        </ActionIcon>
      </Group>
    </Container>
  );
};

export default BackToHomeArrow;
