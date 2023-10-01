import { Container, Row, Col } from 'react-bootstrap';

import { AboutCard, Techs, Tools, Github } from './';

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.4em' }}>
              <strong className="purple">&ldquo;나&rdquo;</strong>에 대해
              소개합니다.
            </h1>
            <AboutCard />
          </Col>
        </Row>

        <h1 className="project-heading">
          자주 사용하는 <strong className="purple">기술</strong>
        </h1>
        <Techs />

        <h1 className="project-heading">
          자주 사용하는 <strong className="purple">도구</strong>
        </h1>
        <Tools />

        <h1 className="project-heading">
          <strong className="purple">Github</strong> 잔디
        </h1>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
