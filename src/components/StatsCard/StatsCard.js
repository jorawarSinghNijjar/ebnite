import React from "react";
import {  Card } from "react-bootstrap";
import "./stats-card.scss";
import Icon1 from "../../images/smile-icon.svg";

const StatsCard = ({number, title, icon}) => {
  return (
    <Card
      className="text-center mx-auto py-4"
      style={{ width: "18rem", border: "none" }}
    >
      <Card.Img
        variant="top"
        src={icon}
        className="stats-card-icon mx-auto mb-4"
      />
      <Card.Body>
        <Card.Title className="card-title-1 border-bottom pb-2">{number}</Card.Title>
        <Card.Title className="card-title-2">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default StatsCard;
