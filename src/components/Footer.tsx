import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Section - Logo & Description */}
          <Col lg={3} md={12} className="text-center text-lg-start">
            <img
              src="src/assets/dbtr-logo.45a21b23fec82c9d4072.png"
              alt="School Logo"
              height="100"
              className="mb-3"
            />
            <h5 className="fw-bold mb-1">DBTR National Higher Secondary School</h5>
            <p className="text-primary fw-semibold">Virtuousness is Life</p>
            <p className="text-muted">
              Established in 1901, DBTR is situated in the temple town of Mayiladuthurai.
            </p>
          </Col>

          {/* Middle Section - Quick Links */}
          <Col lg={3} md={6} className="text-center text-md-start">
            <h6 className="fw-bold mb-3">QUICK LINKS</h6>
            <ul className="list-unstyled">
              <li><a href="#admissions" className="text-dark text-decoration-none">Admissions</a></li>
              <li><a href="#alumni" className="text-dark text-decoration-none">Alumni association</a></li>
              <li><a href="#donate" className="text-dark text-decoration-none">Donate</a></li>
              <li><a href="#events" className="text-dark text-decoration-none">Events</a></li>
            </ul>
          </Col>

          {/* Right Section - Contact & Donate */}
          <Col lg={3} md={6} className="text-center text-md-start">
            <h6 className="fw-bold mb-3">CONTACT</h6>
            <p className="mb-1 fw-bold">DBTR NHSS,</p>
            <p className="text-muted">
              Mahadhana Street, Kamarajar Salai, <br />
              Mayiladuthurai, Tamilnadu – 609001
            </p>
            <p className="fw-bold mb-1">+91.436.422.3272</p>
            <p>
              <a href="mailto:contact@nationalhighschool.in" className="text-dark text-decoration-none">
                contact@nationalhighschool.in
              </a>
            </p>
          </Col>

          {/* Donation Section */}
          <Col lg={3} md={12} className="text-center text-lg-start">
            <p className="fw-bold">Big or small, you can make an impact.</p>
            <Button variant="danger" className="fw-bold px-4 py-2">
              Donate <span style={{ fontSize: "1.3rem" }}>♥</span>
            </Button>
          </Col>
        </Row>

        {/* Bottom Section */}
        <hr className="my-4" />
        <Row className="text-center">
          <Col md={6} className="text-muted">
            &copy; DBTR 2023, All Rights Reserved | <a href="#sitemap" className="text-dark text-decoration-none">Sitemap</a>
          </Col>
          <Col md={6} className="text-muted">
            Designed by <span className="fw-bold text-uppercase">PEPPER SQUARE</span>
          </Col>
        </Row>

        {/* Social Media Icons */}
        <Row className="mt-3 text-center">
          <Col>
            <FaTwitter className="mx-2 fs-5 text-secondary" />
            <FaLinkedin className="mx-2 fs-5 text-secondary" />
            <FaInstagram className="mx-2 fs-5 text-secondary" />
            <FaFacebook className="mx-2 fs-5 text-secondary" />
            <FaYoutube className="mx-2 fs-5 text-secondary" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
