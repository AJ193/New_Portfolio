import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
} from 'react-icons/si';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="font-size">
          Visualstudiocode
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="font-size">
          Postman
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p className="font-size">
          Slack
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p className="font-size">
          Vercel
        </p>
      </Col>
    </Row>
  );
}

export default Toolstack;
