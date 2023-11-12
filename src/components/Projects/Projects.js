import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import spacetravelers from '../../Assets/second-img.PNG';
import mathmagician from '../../Assets/Screenshot (76).png';
import TodoApp from '../../Assets/React-todo thumbnail.PNG';
import Appointment from '../../Assets/img for project -1.PNG';
import worldweatherapp from '../../Assets/Screenshot (75).png';
import budgetapp from '../../Assets/Screenshot (72).png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent
          {' '}
          <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Appointment}
              isBlog={false}
              title="Book an Car Rental"
              description="The collaborative Kanban board project is designed to foster teamwork and enhance communication within a group or organization. It allows team members to easily collaborate on tasks, share updates, and delegate responsibilities in real time. By providing a centralized platform where team members can contribute, discuss, and coordinate their work, the collaborative Kanban board promotes synergy, productivity, and effective project management."
              ghLink="https://github.com/AJ193/Final_Capstone_Front_End"
              demoLink="https://car-rentals-teal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgetapp}
              isBlog={false}
              title="Budget-App"
              description="Budget-app is a mobile web application designed for efficient budget management. Users can register, log in, add transactions to categories, and monitor their expenses. With secure authentication, PostgreSQL database, and comprehensive testing, this app ensures seamless and secure budget tracking."
              ghLink="https://github.com/AJ193/Budget_App"
              demoLink="https://budget-app-senz.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TodoApp}
              isBlog={false}
              title="Todo-App"
              description="The Creative Commons Global Summit is an annual gathering that brings together a diverse community of creators, activists, and advocates of open content and open licensing. It serves as a platform for sharing knowledge, discussing emerging trends, and fostering collaborations that aim to promote the principles of open access and creative commons licensing worldwide."
              ghLink="https://github.com/AJ193/React-todo-app"
              demoLink="https://aj193.github.io/React-todo-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spacetravelers}
              isBlog={false}
              title="Space Travelers"
              description="The Space Travellers will allow users to book rockets and join selected space missions."
              ghLink="https://github.com/AJ193/Space-Travelers"
              demoLink="https://space-travelers-1204.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldweatherapp}
              isBlog={false}
              title="React-capstone-project-Metrics-webapp"
              description="This is an app that lets you view the current weather around the world. And a detailed minimum and maximum temperature of the last week."
              ghLink="https://github.com/AJ193/React-Capstone"
              demoLink="https://maps-react.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mathmagician}
              isBlog={false}
              title="Math Magicians"
              description="This is Math Magicians (SPA) Web App, The Web App is made up of one Calculator and one Math-related Quotes generator. React, CSS, JS, and API in are the basic tools for this project."
              ghLink="https://github.com/AJ193/Math-Magicians"
              demoLink="https://math-magicians-website-jjxd.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
