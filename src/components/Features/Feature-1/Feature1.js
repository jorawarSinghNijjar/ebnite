import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CustomCard from "../../CustomCard/CustomCard";
import "../features.scss";

const Feature1 = ({cardData, primaryHeading, secondaryHeading}) => {
  return (
    <Container className="feature-container feature-container--1" fluid>
      <Container>
        <Row>
          <Col>
            <h2 className="feature-heading feature-heading__primary">
              {primaryHeading}
            </h2>
            <h5 className="feature-heading feature-heading__secondary">
              {secondaryHeading}
            </h5>
          </Col>
        </Row>
        <Row>
          {cardData.map(({ title, text, img }, idx) => (
            <Col xs={12} md={6} key={idx}>
              <CustomCard title={title} text={text} img={img} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Feature1;
