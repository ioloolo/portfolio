import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const SOCIALS = [
  {
    icon: <AiFillGithub />,
    url: 'https://github.com/ioloolo',
  },
  {
    icon: <AiFillInstagram />,
    url: 'https://www.instagram.com/son._.daehyeon',
  },
];

function Social() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-social">
            <h1 style={{ fontSize: '2em' }}>
              저에게 <span className="purple">연락</span>하세요.
            </h1>

            <ul className="home-about-social-links">
              {SOCIALS.map(({ icon, url }, index) => (
                <li className="social-icons" key={index}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Social;
