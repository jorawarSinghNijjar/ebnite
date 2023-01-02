import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./employee-card.scss";
import fbIcon from "../../images/facebook-icon.svg";
import twitterIcon from "../../images/twitter-icon.svg";
import linkdinIcon from "../../images/linkdin-icon.svg";
import instagramIcon from "../../images/instagram-icon.svg";

const EmployeeCard = ({ name, title, profilePhoto, socialLinks }) => {
  return (
    <Card
      className="text-center mx-auto py-4 bg-transparent"
      style={{ width: "18.5rem", border: "none" }}
    >
      <Card.Img variant="top" src={profilePhoto} className="mx-auto mb-5" />
      <Card.Body className="employee-card-body">
        <Row className="d-flex justify-content-between flex-nowrap mb-4">
          <Col>
            <Card.Title className="employee-card-body__name">{name}</Card.Title>
          </Col>
          <Col>
            <Card.Title className="employee-card-body__position">
              {title}
            </Card.Title>
          </Col>
        </Row>

        <Row>
          <Col>
            <a
              href={socialLinks.fb}
              target="_blank" rel="noreferrer"
            >
              <img
                className="employee-card__icon-img"
                src={fbIcon}
                alt="fb-icon"
              ></img>
            </a>
          </Col>
          <Col>
            <a
              href={socialLinks.twitter}
              target="_blank" rel="noreferrer"
            >
              <img
                className="employee-card__icon-img"
                src={twitterIcon}
                alt="fb-icon"
              ></img>
            </a>
          </Col>
          <Col>
            <a
              href={socialLinks.linkdin}
              target="_blank" rel="noreferrer"
            >
              <img
                className="employee-card__icon-img"
                src={linkdinIcon}
                alt="fb-icon"
              ></img>
            </a>
          </Col>
          <Col>
            <a
              href={socialLinks.insta}
              target="_blank" rel="noreferrer"
            >
              <img
                className="employee-card__icon-img"
                src={instagramIcon}
                alt="fb-icon"
              ></img>
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EmployeeCard;
