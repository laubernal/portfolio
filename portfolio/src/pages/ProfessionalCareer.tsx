import { Container } from '@mantine/core';
import { TEXT_COLOR } from '../constants';
import SectionTitle from '../components/SectionTitle';
import ProfessionalCarrerInfo from '../components/ProfessionalCarreerInfo';

const ProfessionalCarrer = (): JSX.Element => {
  return (
    <Container
      id="professionalCareer"
      style={{ color: TEXT_COLOR, paddingTop: 140, paddingBottom: 80 }}
    >
      <Container
        sx={() => ({
          paddingRight: 80,
          '@media (max-width: 500px)': { paddingLeft: 0, paddingRight: 0 },
        })}
      >
        <SectionTitle title="Professional career" />
        <ProfessionalCarrerInfo
          company="Grupo Mayo"
          position="Fullstack developer"
          time="January 2023"
          description="- Design and implement a pharmaceutical event attendee management system for 
          dynamically creating registration forms, managing registrants, automated email sending, 
          attendee capacity management,etc. <br /> 
          - Implement a chat service using Socket.IO <br /> 
          - Design and implement a diploma template management service to generate a PDF with the 
          necessary data to certify the completion of a training program."
          technologiesUsed="Node.js, NestJs, TypeScript, JavaScript, Docker, MongoDB, Mongoose, React, Socket.IO, MySQL, MikroORM"
        />
        <ProfessionalCarrerInfo
          company="Freelancer"
          position="Fullstack developer"
          time="June 2021 - December 2022"
          description="Built a product aimed at nutritionists that allowed them to keep track of their clients nutritional data."
          technologiesUsed="Node.js, NestJs, TypeScript, JavaScript, Docker, PostgreSQL, TypeORM, React, Jest"
        />
      </Container>
    </Container>
  );
};

export default ProfessionalCarrer;
