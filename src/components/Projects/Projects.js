import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';

import empty from '../../assets/project/empty.png';

const PROJECTS = [
  {
    title: 'Ignite',
    description:
      '제천고등학교 2022학년도 축제(Ignite) 디스코드 커뮤니티 관리 봇',
    img: empty,
    github: 'https://github.com/ioloolo/Ignite',
  },
  {
    title: 'School Helper',
    description:
      '제천고등학교 2023학년도 코딩 동아리 코딩 연구소 프로젝트 - 제천고등학교 도우미 앱(급식 및 개인 시간표)',
    img: empty,
    github: 'https://github.com/ioloolo/School-Helper-Backend',
  },
  {
    title: '티플',
    description: 'School Helper의 심화 프로젝트. 교사를 위한 교사 시간표',
    img: empty,
    github: 'https://github.com/ioloolo/Teacher-Plan-Backend',
  },
  {
    title: '컴시간 API',
    description: '컴시간 시간표를 다룰 수 있는 자바 라이브러리',
    img: empty,
    github: 'https://github.com/ioloolo/ComciganApi',
  },
  {
    title: '온라인 저지',
    description: '온라인 저지',
    img: empty,
    github: 'https://github.com/ioloolo/OnlineJudge-Backend',
  },
  {
    title: '원격제어 공기청정기',
    description: '2023 제천 지역 일반계 고등학교 연합 해커톤 아두이노 작품',
    img: empty,
    github: 'https://github.com/ioloolo/JHSU-Hackathon-Arduino',
  },
  {
    title: '하쿠나 마타타',
    description:
      '제천고등학교 2022학년도 사회참여프로젝트 - 온라인 쇼핑몰 사이트',
    img: empty,
    github: 'https://github.com/ioloolo/Hakuna-Matata-Backend',
  },
  {
    title: '음악 플레이어',
    description: '클론 코딩 - 음악 플레이어 앱',
    img: empty,
    github: 'https://github.com/ioloolo/MusicPlayer-Backend',
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          나의 <strong className="purple">프로젝트</strong>
        </h1>

        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {PROJECTS.map(({ title, description, img, github }, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                title={title}
                description={description}
                img={img}
                github={github}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
