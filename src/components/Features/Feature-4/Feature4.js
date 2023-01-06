import React from "react";
import { Container, Row, Col, Card, Stack } from "react-bootstrap";
import "./feature-4.scss";
import Icon1 from "../../../images/smile-icon.svg";
import Icon2 from "../../../images/rocket-icon.svg";
import Icon3 from "../../../images/consultant-icon.svg";
import Icon4 from "../../../images/goal-icon.svg";
import StatsCard from "../../StatsCard/StatsCard";

const statsCardData = [
  { number: 200, title: "Satisfied Customers", icon: Icon1 },
  { number: 15, title: "Projects Done", icon: Icon2 },
  { number: 5, title: "Consultants", icon: Icon3 },
  { number: 95, title: "Success Rate", icon: Icon4 },
];

const Feature4 = () => {
  return (
    <Container className="feature-container feature-container--4" fluid>
      <h2 className="feature-heading feature-heading__primary pb-2 text-center border-bottom">
        Why People Choose Us
      </h2>
      <Row className="mt-5">
        {statsCardData.map(({ number, title, icon }, idx) => (
          <Col key={idx}>
            <StatsCard number={number} title={title} icon={icon}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Feature4;
