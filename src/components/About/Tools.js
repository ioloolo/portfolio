import { Col, Row } from 'react-bootstrap';

import {
  BiLogoDocker,
  BiLogoGit,
  BiLogoGithub,
  BiLogoVisualStudio,
} from 'react-icons/bi';
import {
  SiClion,
  SiDocker,
  SiIntellijidea,
  SiMacos,
  SiMongodb,
  SiPostman,
  SiTermius,
  SiXcode,
} from 'react-icons/si';

const TOOLS = [
  <SiMacos />,
  <BiLogoVisualStudio />,
  <SiIntellijidea />,
  <SiClion />,
  <SiXcode />,
  <SiTermius />,
  <SiPostman />,
  <BiLogoGit />,
  <BiLogoGithub />,
  <BiLogoDocker />,
];

function Techs() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {TOOLS.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tool}
        </Col>
      ))}
    </Row>
  );
}

export default Techs;
