// src/Components/Homepage.jsx
import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';  // ← import this
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

const plans = [
  { key: 'rogers', title: 'Rogers', text: 'This is the first card.' },
  { key: 'bell',   title: 'Bell',   text: 'This is the second card.' },
  { key: 'vmedia', title: 'Vmedia', text: 'This is the third card.' },
  { key: 'teksavvy',   title: 'Teksavvy',   text: 'This is the fourth card.' },
];

export default function Homepage() {
  return (
    <Container className="py-4">
      <Row className="g-4">
        {plans.map(({ key, title, text }) => (
          <Col sm={12} md={6} key={key}>
            <Card className="h-100 shadow-sm">
              <CardBody className="d-flex flex-column">
                <CardTitle tag="h5">{title}</CardTitle>
                <CardText className="flex-grow-1">{text}</CardText>
                <div className="mt-3">
                  {/* turn this button into a React‑Router link */}
                  <Button
                    color="dark"
                    tag={RouterNavLink}
                    to={`/${key}`}
                  >
                    Learn More
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
