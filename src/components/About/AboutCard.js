import { Card } from 'react-bootstrap';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            나는 누구일까 생각하다가,{' '}
            <span className="purple">일단 보류중..</span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
