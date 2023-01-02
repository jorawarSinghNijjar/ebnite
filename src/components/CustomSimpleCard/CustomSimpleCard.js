import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import "./custom-simple-card.scss";

const CustomSimpleCard = (props) => {
  return (
    <Row className="my-5 py-5 border-bottom">
      <Col md={12} lg={5} className={`${props.reverse ? "order-lg-2": "order-lg-1"}`}>
        <Image src={props.img} fluid />
      </Col>
      <Col md={12} lg={7} className={`${props.reverse ? "order-lg-1": "order-lg-2"}`}>
        <h5 className="custom-simple-card-title text-primary">{props.title}</h5>
        <p className="custom-simple-card-text text-primary p-1">{props.text}</p>
      </Col>
    </Row>
  );
};

export default CustomSimpleCard;
