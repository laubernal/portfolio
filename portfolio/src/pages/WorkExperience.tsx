import { Container } from '@mantine/core';
import { TEXT_COLOR } from '../constants';
import SectionTitle from '../components/SectionTitle';
import WorkExperienceInfo from '../components/WorkExperienceInfo';

const WorkExperience = (): JSX.Element => {
  return (
    <Container
      id="workExperience"
      style={{ color: TEXT_COLOR, paddingTop: 100, paddingBottom: 80 }}
    >
      <Container
        sx={() => ({
          paddingRight: 80,
          '@media (max-width: 500px)': { paddingLeft: 0, paddingRight: 0 },
        })}
      >
        <SectionTitle title="Work experience" />
        <WorkExperienceInfo
          company="Grupo Mayo"
          position="Fullstack developer"
          time="January 2023 - Present"
          description="<ul><li>Design and implement a pharmaceutical event attendee management system for 
          dynamically creating registration forms, managing registrants, automated email sending, 
          attendee capacity management, etc.</li>
        <li>Implement a chat service using Socket.IO</li>
          <li>Design and implement a diploma template management service to generate a PDF with the 
          necessary data to certify the completion of a training program.</li></ul>"
          technologiesUsed="Node.js, NestJs, TypeScript, JavaScript, Docker, MongoDB, Mongoose, React, Socket.IO, MySQL, MikroORM"
        />
        <WorkExperienceInfo
          company="Freelancer"
          position="Fullstack developer"
          time="June 2021 - December 2022"
          description="<ul><li>Developed a product aimed at nutritionists that allowed them to keep track of their clients nutritional data.</li> 
          <li>Designed and implemented various features such as subscription management, permission and role management, among others.</li></ul>"
          technologiesUsed="Node.js, NestJs, TypeScript, JavaScript, Docker, PostgreSQL, TypeORM, React, Jest"
        />
      </Container>
    </Container>
  );
};

export default WorkExperience;
