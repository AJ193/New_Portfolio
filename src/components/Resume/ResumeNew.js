import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { AiOutlineDownload } from 'react-icons/ai';
import Particle from '../Particle';

const pdf1Url = 'https://docs.google.com/document/d/15tOn6rGB3mA5WRo_hq_o3UyM_3uJDiQycMArem5ytaQ/edit?pli=1';

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdf1Url}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <iframe
            src={pdf1Url}
            title="Resume"
            width="100%"
            height="2000px"
          />
        </Row>

        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdf1Url}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
