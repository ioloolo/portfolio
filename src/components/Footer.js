import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer-copyright">
          <h3>Copyright © {new Date().getFullYear()} Son Daehyeon</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
