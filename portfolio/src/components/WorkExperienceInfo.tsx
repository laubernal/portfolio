import { Text } from '@mantine/core';
import { SECONDARY_COLOR, TEXT_COLOR } from '../constants';

interface props {
  company: string;
  position: string;
  time: string;
  description: string;
  technologiesUsed: string;
}

const WorkExperienceInfo = ({
  company,
  position,
  time,
  description,
  technologiesUsed,
}: props): JSX.Element => {
  return (
    <>
      <Text
        sx={() => ({
          color: SECONDARY_COLOR,
          fontSize: 30,
          fontWeight: 700,
          paddingTop: 40,
          '@media (max-width: 500px)': { fontSize: '6vw', paddingLeft: 0 },
        })}
      >
        {company}
      </Text>
      <Text
        sx={() => ({
          color: TEXT_COLOR,
          fontSize: 17,
          fontStyle: 'italic',
          '@media (max-width: 500px)': { fontSize: '6vw', paddingLeft: 0 },
        })}
      >
        {position} | {time}
      </Text>
      <Text
        sx={() => ({
          color: TEXT_COLOR,
          fontSize: 20,
          fontWeight: 500,
          paddingTop: 5,
          '@media (max-width: 500px)': { fontSize: '6vw', paddingLeft: 0 },
        })}
      >
        <span dangerouslySetInnerHTML={{ __html: `${description}` }} />
      </Text>
      <Text
        sx={() => ({
          color: TEXT_COLOR,
          fontSize: 18,
          fontStyle: 'italic',
          paddingTop: 5,
          '@media (max-width: 500px)': { fontSize: '6vw', paddingLeft: 0 },
        })}
      >
        Technologies I used: {technologiesUsed}
      </Text>
    </>
  );
};

export default WorkExperienceInfo;
