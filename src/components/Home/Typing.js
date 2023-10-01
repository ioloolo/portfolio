import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import icon from '../../assets/home-main.svg';
import { useState } from 'react';

function Typing() {
  const [showHello, setShowHello] = useState(false);

  return (
    <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row>
          <Col md={8} className="home-header">
            <h1 className="heading">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('안녕하세요!')
                      .pauseFor(250)
                      .callFunction(() => setShowHello(true))
                      .start();
                  }}
                  options={{
                    cursor: '',
                  }}
                />
                {showHello && (
                  <span
                    className="wave"
                    role="img"
                    aria-labelledby="wave"
                    style={{ marginLeft: '10px' }}
                  >
                    👋🏻
                  </span>
                )}
              </div>

              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2350)
                    .typeString(
                      '<span class="purple">백엔드 개발자</span>가 되고싶은 <span class="purple">손대현</span>입니다.',
                    )
                    .start();
                }}
                options={{
                  cursor: '',
                }}
              />
            </h1>
          </Col>

          <Col md={4}>
            <img
              src={icon}
              alt="icon"
              className="img-fluid"
              style={{ maxHeight: '400px' }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Typing;
