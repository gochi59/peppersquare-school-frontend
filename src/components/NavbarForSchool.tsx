import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const NavbarForSchool: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm py-2">
      <Container className="d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="src/assets/dbtr-logo.45a21b23fec82c9d4072.png"
            alt="School Logo"
            height="82"
            className="me-3"
          />
        </Navbar.Brand>

        {/* Navigation Links */}
        <Nav className="mx-auto gap-4">
          <Nav.Link href="#school" className="text-dark fw-medium fs-5">The School</Nav.Link>
          <Nav.Link href="#academics" className="text-dark fw-medium fs-5">Academics</Nav.Link>
          <Nav.Link href="#life" className="text-dark fw-medium fs-5">Life @ DBTR</Nav.Link>
          <Nav.Link href="#contact" className="text-dark fw-medium fs-5">Contact us</Nav.Link>
        </Nav>

        {/* Buttons */}
        <div className="d-flex align-items-center gap-3">
          <Button variant="outline-danger" className="fw-bold px-4 py-2 fs-5">CSR</Button>
          <Button variant="warning" className="fw-bold px-4 py-2 fs-5">
            Donate <span style={{ fontSize: "1.3rem" }}>♥</span>
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarForSchool;
