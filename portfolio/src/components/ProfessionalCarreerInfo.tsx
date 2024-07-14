import { Text, TypographyStylesProvider } from '@mantine/core';
import { SECONDARY_COLOR, TEXT_COLOR } from '../constants';

interface props {
  company: string;
  position: string;
  time: string;
  description: string;
  technologiesUsed: string;
}

const ProfessionalCarrerInfo = ({
  company,
  position,
  time,
  description,
  technologiesUsed,
}: props): JSX.Element => {
  return (
    <>
      <Text
        align="justify"
        sx={() => ({
          color: SECONDARY_COLOR,
          fontSize: 30,
          fontWeight: 700,
          paddingLeft: 30,
          paddingTop: 40,
          '@media (max-width: 500px)': { fontSize: '6vw', paddingLeft: 0 },
        })}
      >
        {company}
      </Text>
      <Text
        align="justify"
        sx={() => ({
          color: TEXT_COLOR,
          fontSize: 17,
          paddingLeft: 30,
          '@media (max-width: 500px)': { fontSize: '6vw', paddingLeft: 0 },
        })}
      >
        {position} | {time}
      </Text>
      <Text
        align="justify"
        sx={() => ({
          color: TEXT_COLOR,
          fontSize: 20,
          fontWeight: 550,
          paddingLeft: 30,
          paddingTop: 5,
          '@media (max-width: 500px)': { fontSize: '6vw', paddingLeft: 0 },
        })}
      >
        <span dangerouslySetInnerHTML={{ __html: `${description}` }} />
      </Text>
      <Text
        align="justify"
        sx={() => ({
          color: TEXT_COLOR,
          fontSize: 18,
          paddingLeft: 30,
          paddingTop: 5,
          '@media (max-width: 500px)': { fontSize: '6vw', paddingLeft: 0 },
        })}
      >
        Technologies I used: {technologiesUsed}
      </Text>
    </>
  );
};

export default ProfessionalCarrerInfo;
