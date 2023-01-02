import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./feature-5.scss";

import clientIcon1 from "../../../images/client-icon-1.png";
import clientIcon2 from "../../../images/client-icon-2.png";
import clientIcon3 from "../../../images/client-icon-3.png";
import clientIcon4 from "../../../images/client-icon-4.png";
import clientIcon5 from "../../../images/client-icon-5.png";
import clientIcon6 from "../../../images/client-icon-6.png";

const icons = [
  clientIcon1,
  clientIcon2,
  clientIcon3,
  clientIcon4,
  clientIcon5,
  clientIcon6,
];

const Feature5 = () => {
  return (
    <Container className="feature-container feature-container--4" fluid>
      <h2 className="feature-heading feature-heading__primary pb-2 text-center border-bottom">
        Our Clients
      </h2>
      <Row className="mx-auto" style={{ width: "80%" }}>
        {icons.map((icon, idx) => (
          <Col xs={6} md={4} lg={2} my={3} className="text-center" key={idx}>
            <img src={icon} alt="client-icon" className="client-icon"></img>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Feature5;
