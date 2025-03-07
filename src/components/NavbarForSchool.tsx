import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const NavbarForSchool: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-white py-2 shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src="/logo.png" // Replace with actual logo URL
            alt="School Logo"
            height="50"
          />
        </Navbar.Brand>

        {/* Navbar Links */}
        <Nav className="mx-auto">
          <Nav.Link href="#school" className="text-dark fw-medium">The School</Nav.Link>
          <Nav.Link href="#academics" className="text-dark fw-medium">Academics</Nav.Link>
          <Nav.Link href="#life" className="text-dark fw-medium">Life @ DBTR</Nav.Link>
          <Nav.Link href="#contact" className="text-dark fw-medium">Contact us</Nav.Link>
        </Nav>

        {/* Buttons */}
        <div className="d-flex align-items-center">
          <Button variant="outline-danger" className="me-3 fw-bold">CSR</Button>
          <Button variant="danger" className="fw-bold">
            Donate <span style={{ fontSize: "1.2rem" }}>♥</span>
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarForSchool;
