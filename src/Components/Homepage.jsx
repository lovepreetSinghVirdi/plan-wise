import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';

const Page = () => {
  // Example card data
  const cards = [
    { title: 'Card 1', text: 'This is the first card.' },
    { title: 'Card 2', text: 'This is the second card.' },
    { title: 'Card 3', text: 'This is the third card.' },
    { title: 'Card 4', text: 'This is the fourth card.' }
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar color="light" light expand="md">
        <NavbarBrand href="#">My App</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      {/* Main content */}
      <Container className="mt-4">
        <Row>
          {cards.map((card, idx) => (
            <Col md="6" className="mb-4" key={idx}>
              <Card>
                <CardBody>
                  <CardTitle tag="h5">{card.title}</CardTitle>
                  <CardText>{card.text}</CardText>
                  <Button>Learn More</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Page;
