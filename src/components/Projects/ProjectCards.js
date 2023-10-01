import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsGithub } from 'react-icons/bs';

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.img}
        style={{
          width: '50%',
          height: 'auto',
        }}
        alt="card-img"
      />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: 'justify' }}>
          {props.description}
        </Card.Text>

        <Button variant="primary" href={props.github} target="_blank">
          <BsGithub />
          &nbsp;Github
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
