import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Navbar, Nav } from 'react-bootstrap';

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai';

const PATHS = [
  {
    title: '홈',
    path: '/home',
    icon: <AiOutlineHome />,
  },
  {
    title: '소개',
    path: '/about',
    icon: <AiOutlineUser />,
  },
  {
    title: '프로젝트',
    path: '/projects',
    icon: <AiOutlineFundProjectionScreen />,
  },
];

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [top, setTop] = useState(false);

  window.addEventListener('scroll', () => setTop(window.scrollY >= 20));

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={top ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <span className="brand-name">Son Daehyeon</span>
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {PATHS.map(({ title, path, icon }, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as={Link}
                  to={path}
                  onClick={() => setExpanded(false)}
                >
                  {icon}&nbsp;{title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
