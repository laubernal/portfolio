import { Text } from '@mantine/core';

import { PRIMARY_COLOR } from '../constants';

interface props {
  title: string;
}

const SectionTitle = ({ title }: props): JSX.Element => {
  return (
    <Text
      sx={() => ({
        color: PRIMARY_COLOR,
        fontSize: 50,
        fontWeight: 700,
        '@media (max-width: 500px)': { fontSize: '14vw' },
      })}
    >
      {title}
    </Text>
  );
};

export default SectionTitle;
