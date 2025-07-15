// src/Components/AppHeader.jsx
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
import { NavLink as RouterNavLink } from 'react-router-dom';

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const appName = 'PlanWise';
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark color="dark" expand="md" className="app-navbar sticky-top">
      <Container fluid className="align-items-center">
        <NavbarBrand tag={RouterNavLink} to="/" className="fw-bold">
          {appName}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink tag={RouterNavLink} to="/" end>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterNavLink} to="/rogers">
                Rogers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterNavLink} to="/bell">
                Bell
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterNavLink} to="/vmedia">
                Vmedia
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterNavLink} to="/teksavvy">
                Teksavvy
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterNavLink} to="/about">
                About Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
