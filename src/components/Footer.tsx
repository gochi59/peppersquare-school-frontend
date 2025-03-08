import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary-subtle">
      <Container className="    ">
        <Row className="align-items-center">
          <Col lg={2} md={12} className="text-center mb-4 mb-lg-0">
            <img
              src="src/assets/dbtr-logo.45a21b23fec82c9d4072.png"
              alt="School Logo"
              height="100"
              className="mb-3"
            />
          </Col>

          <Col lg={2} md={6} className="text-center text-lg-start mb-lg-0">
            <h5 className="fw-bold mb-1 text-wrap">
              DBTR National Higher Secondary School
            </h5>
            <p className="text-primary fw-semibold">Virtuousness is Life</p>
            <p className="text-muted">
              Established in 1901, DBTR is situated in the temple town of
              Mayiladuthurai.
            </p>
          </Col>

          <Col lg={2} md={6} className="text-center text-lg-start mb-lg-0 mt-0">
            <h5 className="fw-bold mb-5 text-wrap">Quick Links</h5>
            <ul className="list-unstyled px-2">
              <li>
                <a
                  href="#admissions"
                  className="text-dark text-decoration-none"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a href="#alumni" className="text-dark text-decoration-none">
                  Alumni association
                </a>
              </li>
              <li>
                <a href="#donate" className="text-dark text-decoration-none">
                  Donate
                </a>
              </li>
              <li>
                <a href="#events" className="text-dark text-decoration-none">
                  Events
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="text-center text-lg-start mb-lg-0">
            <h5 className="fw-bold mb-5 mt-5 pt-5 text-wrap">Contact</h5>
            <p className="mb-1">DBTR NHSS,</p>
            <p className="text-muted">
              Mahadhana Street, Kamarajar Salai, <br />
              Mayiladuthurai, Tamilnadu – 609001
            </p>
            <p className="fw-bold mb-1">+91.436.422.3272</p>
            <p>
              <a
                href="mailto:contact@nationalhighschool.in"
                className="text-dark text-decoration-none"
              >
                contact@nationalhighschool.in
              </a>
            </p>
          </Col>

          <Col lg={2} md={6} className="text-center text-lg-start mb-lg-0">
            <p className="fw-bold">Big or small, you can make an impact.</p>
            <Button
              style={{
                backgroundColor: "#F54E39",
                borderColor: "#F54E39",
                color: "#fff",
              }}
              className="fw-bold px-4 py-2"
            >
              Donate <span style={{ fontSize: "1.3rem" }}>♥</span>
            </Button>
          </Col>
        </Row>

        <hr className="my-4" />
        <Row className="d-flex justify-content-between ">
          <Col md={6} className="text-left pe-5">
            <p className="text-muted mb-2">
              &copy; DBTR 2023, All Rights Reserved |{" "}
              <a href="#sitemap" className="text-dark text-decoration-none">
                Sitemap
              </a>
            </p>
            <p className="text-muted mb-0">
              Designed by{" "}
              <img
                src="src/assets/Pepper_Square_Logo.png"
                alt="Pepper Square Logo"
                height="20"
              />
            </p>
          </Col>

          <Col
            md={6}
            className="d-flex ps-5 align-items-start justify-content-end"
          >
            <FaTwitter className="mx-2 fs-5 text-dark" />
            <FaLinkedin className="mx-2 fs-5 text-dark" />
            <FaInstagram className="mx-2 fs-5 text-dark" />
            <FaFacebook className="mx-2 fs-5 text-dark" />
            <FaYoutube className="mx-2 fs-5 text-dark" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
