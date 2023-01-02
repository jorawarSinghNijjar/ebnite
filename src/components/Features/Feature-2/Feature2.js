import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./feature-2.scss"
const Feature2 = () => {
  return (
    <Container className="feature-container feature-container--2" fluid>
      <Container>
        <Row>
          <Col>
            <h2 className="feature-heading feature-heading__primary feature-heading__primary--2">
              You miss 100% of the shots
            </h2>
            <h2 className="feature-heading feature-heading__primary feature-heading__primary--2">
              you don't take
            </h2>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button size="lg" className="feature-2-btn">Free Analysis</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Feature2;
