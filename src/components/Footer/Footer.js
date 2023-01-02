import React from "react";
import "./footer.scss";

import { Container, Row, Col, Stack, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../images/logo/logo.png";
import fbIcon from "../../images/facebook-icon.svg";
import twitterIcon from "../../images/twitter-icon.svg";
import linkdinIcon from "../../images/linkdin-icon.svg";
import instagramIcon from "../../images/instagram-icon.svg";

export const Footer = () => {
  return (
    <Container className="footer" fluid>
      <Row className="mx-auto pb-4" style={{ width: "80%" }}>
        <Col xs={12} lg={6}>
          <h6 className="label-name">
            Phone No. :{" "}
            <span className="field">438-882-9621, 516-263-4586</span>
          </h6>
        </Col>
        <Col xs={12} lg={6}>
          <h6 className="label-name">
            Email : <span className="field">support@ebnite.com</span>
          </h6>
        </Col>
      </Row>
      <div className="c-divider"></div>
      <Row className="pt-4 footer-nav mx-auto justify-content-md-between">
        <Col xs={12} md={4} className="my-3">
          <Stack gap={3} className="footer-nav__col">
            <div className="logo-box">
              <Image src={Logo} alt="logo" fluid />
            </div>
            <Row>
              <Col xs={2}>
                <a href="/" target="_blank" rel="noreferrer">
                  <img
                    className="footer-social-icon"
                    src={fbIcon}
                    alt="fb-icon"
                  ></img>
                </a>
              </Col>
              <Col xs={2}>
                <a href="/" target="_blank" rel="noreferrer">
                  <img
                    className="footer-social-icon"
                    src={twitterIcon}
                    alt="fb-icon"
                  ></img>
                </a>
              </Col>
              <Col xs={2}>
                <a href="/" target="_blank" rel="noreferrer">
                  <img
                    className="footer-social-icon"
                    src={linkdinIcon}
                    alt="fb-icon"
                  ></img>
                </a>
              </Col>
              <Col xs={2}>
                <a href="/" target="_blank" rel="noreferrer">
                  <img
                    className="footer-social-icon"
                    src={instagramIcon}
                    alt="fb-icon"
                  ></img>
                </a>
              </Col>
            </Row>
          </Stack>
        </Col>
        <Col xs={6} md={4} className="my-3">
          <Stack gap={2} className="footer-nav__col">
            <h6 className="footer-nav__heading">Quick Links</h6>
            <Link to="/about" className="text-white footer-links">
              About
            </Link>
            <Link to="/blog" className="text-white">
              Blog Posts
            </Link>
            <Link to="/services" className="text-white">
              Services
            </Link>
            <Link to="/contact-us" className="text-white">
              Connect with Us
            </Link>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};
