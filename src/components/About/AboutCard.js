import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am
            {' '}
            <span className="purple">Ghulam Shabbir </span>
            from
            {' '}
            <span className="purple"> Pakistan.</span>
            <br />
            {' '}
            I am a certified Full-Stack Developer at Microverse,
            An online platform that gives students from different parts of the world
            the opportunity to collaborate and complete their training as a developer.
            I am passionate about building web applications
            and solving complex problems
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
              {' '}
              Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />
              {' '}
              Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight />
              {' '}
              Travelling
            </li>
          </ul>
          <p style={{ color: 'rgb(155 126 172)' }}>
            Strive to build things that make a difference!
          </p>
          <footer className="blockquote-footer">AJ&apos;s</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
