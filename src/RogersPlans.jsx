import React from 'react';
import {
  Container, Row, Col,
  Card, CardBody, CardTitle, CardText, Button
} from 'reactstrap';

const rogersPlans = [
  { id: 1, name: 'Rogers Basic',     description: 'Entry‑level plan',        price: '$39.99/mo' },
  { id: 2, name: 'Rogers Unlimited', description: 'Unlimited data',          price: '$69.99/mo' },
  { id: 3, name: 'Rogers Family',    description: 'Shareable family plan',   price: '$109.99/mo' },
];

export default function RogersPlans() {
  return (
    <section style={{ paddingTop: '80px' }}>
      <Container>
        <h2 className="mb-4">Rogers Plans</h2>
        <Row>
          {rogersPlans.map(plan => (
            <Col key={plan.id} sm="6" md="4" lg="3" className="mb-4">
              <Card className="h-100">
                <CardBody className="d-flex flex-column">
                  <CardTitle tag="h5">{plan.name}</CardTitle>
                  <CardText className="flex-grow-1">
                    {plan.description}
                  </CardText>
                  <div className="mt-auto">
                    <h6 className="mb-2">{plan.price}</h6>
                    <Button block>Choose</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
