import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md" className="app-navbar bg-light">
      {/* Make this container a flex‐box */}
      <Container fluid className="d-flex align-items-center">
        {/* Brand on the left */}
        <NavbarBrand href="#home" className="fw-bold">
          PlanWise
        </NavbarBrand>

        {/* Toggler (will disappear on md+) */}
        <NavbarToggler onClick={toggle} />

        {/* Collapse becomes a flex item too */}
        <Collapse isOpen={isOpen} navbar>
          {/* ms-auto pushes this Nav to the right */}
          <Nav className="ms-auto" navbar>
            <NavItem><NavLink href="#home">Home</NavLink></NavItem>
            <NavItem><NavLink href="#rogers">Rogers</NavLink></NavItem>
            <NavItem><NavLink href="#bell">Bell</NavLink></NavItem>
            <NavItem><NavLink href="#vmedia">Vmedia</NavLink></NavItem>
            <NavItem><NavLink href="#dodo">Dodo</NavLink></NavItem>
            <NavItem><NavLink href="#about">About Us</NavLink></NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
