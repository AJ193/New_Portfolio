import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from 'react-icons/di';
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
} from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="font-size">
          Javascript
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="font-size">
          Node.js
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="font-size">
          React
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p className="font-size">
          Next.js
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="font-size">
          Git
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p className="font-size">
          Firebase
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p className="font-size">
          Postgresql
        </p>
      </Col>
    </Row>
  );
}

export default Techstack;
