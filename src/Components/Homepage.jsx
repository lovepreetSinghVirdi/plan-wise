// index.js
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<HomePage />);

// HomePage.js
import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';

const cards = [
  { title: 'Rogers', text: 'This is the first card.' },
  { title: 'Bell ', text: 'This is the second card.' },
  { title: 'Card ', text: 'This is the third card.' },
  { title: 'Dodo', text: 'This is the fourth card.' }
];

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="app-container">
 
      <Container className="content-container mt-4">
        <Row>
          {cards.map((card, idx) => (
            <Col md="6" className="mb-4" key={idx}>
              <Card className="shadow-sm content-card">
                <CardBody>
                  <CardTitle tag="h5">{card.title}</CardTitle>
                  <CardText>{card.text}</CardText>
                  <Button color="primary">Learn More</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}