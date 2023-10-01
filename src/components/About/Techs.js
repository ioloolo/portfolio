import { Col, Row } from 'react-bootstrap';

import { FaSwift } from 'react-icons/fa';
import {
  BiLogoCPlusPlus,
  BiLogoJava,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoRedux,
  BiLogoSpringBoot,
} from 'react-icons/bi';
import { SiMongodb, SiMysql } from 'react-icons/si';

const TECHS = [
  <BiLogoJava />,
  <BiLogoSpringBoot />,
  <BiLogoNodejs />,
  <FaSwift />,
  <BiLogoReact />,
  <BiLogoRedux />,
  <BiLogoCPlusPlus />,
  <BiLogoPython />,
  <SiMongodb />,
  <SiMysql />,
];

function Techs() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {TECHS.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tech}
        </Col>
      ))}
    </Row>
  );
}

export default Techs;
